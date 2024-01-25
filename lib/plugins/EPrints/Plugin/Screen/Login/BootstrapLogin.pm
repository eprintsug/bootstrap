=head1 NAME

Subclass Login and provide Bootstrap nice login elements

=cut

package EPrints::Plugin::Screen::Login::BootstrapLogin;
use EPrints::Plugin::Screen::Login::Internal;

@ISA = qw( EPrints::Plugin::Screen::Login EPrints::Plugin::Screen::Register );

use strict;


sub new
{
	my( $class, %params ) = @_;

	my $self = $class->SUPER::new(%params);
	
	$self->{appears} = [
		{
			place => "login_tabs",
			position => 100,
		},
	];

	return $self;
}

sub render
{
    my( $self, %bits ) = @_;

	my $repo = $self->{repository};

	my $op1;
	my $op2;

    #Added bit for log message so pre login messages can be displayed without interupping the bootstrappynes of the BootstrapLogin
    $bits{log_in_until} = $repo->make_element( "select", name=>"login_log_in_until" );
	$op1 = $repo->make_element( "option", value=>"until_close", selected=>"selected" );
	$op1->appendChild( $repo->html_phrase( "cgi/login:until_close" ) );
	$op2 = $repo->make_element( "option", value=>"forever" );
	$op2->appendChild( $repo->html_phrase( "cgi/login:forever" ) );
	$bits{log_in_until}->appendChild( $op1 );
	$bits{log_in_until}->appendChild( $op2 );
	
	$bits{bind_to_ip} = $repo->make_element( "select", name=>"login_log_in_until" );
	$op1 = $repo->make_element( "option", value=>"bind", selected=>"selected" );
	$op1->appendChild( $repo->html_phrase( "cgi/login:bind" ) );
	$op2 = $repo->make_element( "option", value=>"dont_bind" );
	$op2->appendChild( $repo->html_phrase( "cgi/login:dont_bind" ) );
	$bits{bind_to_ip}->appendChild( $op1 );
	$bits{bind_to_ip}->appendChild( $op2 );

	my $reset_ok =  $repo->get_repository->get_conf("allow_reset_password");
	if( $reset_ok ) {
		$bits{reset_link} = $repo->html_phrase("cgi/login:reset_link" );
	} else {
		$bits{reset_link} = $repo->make_doc_fragment;
	}                                   
 
    $bits{login_message} = $repo->html_phrase("cgi/login:pre_message");	
                                       
	$bits{problems} = $repo->make_doc_fragment;
	$bits{input_username} = $repo->render_input_field(
	   type => "text",
       name => 'login_username',
       id => "login_username",
       class => "ep_form_text form-control", 
       placeholder => $repo->html_phrase("cgi/login:username"),
       value => "",
       'aria-label' => $repo->html_phrase("cgi/login:username"),
    );

	$bits{input_password} = $repo->render_input_field(
        type => "password",
        name => "login_password",
        id => "login_password",
        class => "form-control ep_form_text",
        placeholder => $repo->html_phrase("cgi/login:password"),
        autocomplete => "off",
       'aria-label' => $repo->html_phrase("cgi/login:password"),
    );
    
    	my $title = $self->render_title;
	$bits{login_button} = $repo->render_button(
        type => "submit",
        name => "_action_login",
        id => "login-submit" ,
        class => "ep_form_action_button login-button",
        value => $repo->xhtml->to_text_dump( $title ),
    );
            
	$repo->xml->dispose( $title );

	my $form = $repo->render_form( "POST" );

	$form->appendChild( $self->render_hidden_bits );
	$form->appendChild( $repo->html_phrase( "cgi/login:page_layout", %bits ) );

	my $script = $repo->make_javascript( '$("login_username").focus()' );
	$form->appendChild( $script );

	return $form;
}

sub action_login
{
	my( $self ) = @_;

	my $processor = $self->{processor};
	my $repo = $self->{repository};

	$processor->{screenid} = 'Login';

	my $username = $repo->param( "login_username" );
	my $password = $repo->param( "login_password" );
	my $real_username = $repo->valid_login( $username, $password );

	if( defined $username && !defined $real_username )
	{
		$processor->add_message( "error", $repo->html_phrase( "cgi/login:failed" ) );
		return;
	}

	$self->{processor}->{username} = $real_username;

	$self->SUPER::action_login;

	return $self->finished;
}

1;
