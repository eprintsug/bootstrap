package EPrints::Plugin::Screen::EPMC::Bootstrap;

@ISA = ( 'EPrints::Plugin::Screen::EPMC' );

use File::Copy;
use strict;

 # Make the plug-in
sub new
{
	my( $class, %params ) = @_;
 
	my $self = $class->SUPER::new( %params );
 
	$self->{actions} = [qw( enable disable )];
	$self->{disable} = 0; # always enabled, even in lib/plugins
 
	$self->{package_name} = "Bootstrap";
 
	return $self;
}
 
=item $screen->action_enable( [ SKIP_RELOAD ] )
 
Enable the L<EPrints::DataObj::EPM> for the current repository.
 
If SKIP_RELOAD is true will not reload the repository configuration.
 
=cut
 
sub action_enable
{
	
	my( $self, $skip_reload ) = @_;
 
	$self->SUPER::action_enable( $skip_reload );
 
	my $repo = $self->{repository};
 

	my $original = $repo->config( "config_path" )."/citations/eprint/summary_page.xml";
	my $backup = $repo->config( "config_path" )."/citations/eprint/summary_page.xml_backup";
	my $bootstrap = $repo->config( "config_path" )."/citations/eprint/bootstrap_summary_page.xml";

	#copy original to original_backup
	move($original,$backup) or die "Arse";	
	#copy bootstrap to original
	copy($bootstrap,$original);
	
	unless( $repo->expire_abstracts() )
        {
		$self->{processor}->add_message( "warning","You need to regenerate abstracts" );
        }
 
	$self->reload_config if !$skip_reload;
 }
 
=item $screen->action_disable( [ SKIP_RELOAD ] )
 
Disable the L<EPrints::DataObj::EPM> for the current repository.
 
If SKIP_RELOAD is true will not reload the repository configuration.
 
=cut
 
sub action_disable
{
	my( $self, $skip_reload ) = @_;
 
	$self->SUPER::action_disable( $skip_reload );
	my $repo = $self->{repository};


	my $backup = $repo->config( "config_path" )."/citations/eprint/summary_page.xml_backup";
	my $original = $repo->config( "config_path" )."/citations/eprint/summary_page.xml";
        
	#copy backup to original 
	copy($backup,$original);      

	unless( $repo->expire_abstracts() )
        {
                $self->{processor}->add_message( "warning","You need to regenerate abstracts" );
        }
	 
	$self->reload_config if !$skip_reload;
 
}
 
1;
