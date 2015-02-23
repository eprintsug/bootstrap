package EPrints::Plugin::Screen::EPMC::Bootstrap;

@ISA = ( 'EPrints::Plugin::Screen::Bootstrap' );

use strict;

sub new 
{

	my( $class, %params ) = @_;

	my $self = $class->SUPER::new( %params );

	$self->{actions} = [qw( enable disable )];
	$self->{disable} = 0; # always enabled, even in lib/plugins

	$self->{package_name} = 'bootstrap';

	return $self;

}

sub action_enable
{
        my( $self, $skip_reload ) = @_;

        $self->SUPER::action_enable( $skip_reload );
        my $repo = $self->{repository};

	# With the current code you cannot provide an override for a report field that is derived 
	# I.e. one that has a "sub" as a "source" in the report map rather than an EPrint field. 
	#my $filename = $repo->config( "config_path" )."/workflows/eprint/default.xml";
	my $filename = $repo->config( "config_path" )."/citations/eprint/summary_page.xml";
        my $insert = EPrints::XML::parse_xml( $repo->config( "lib_path" )."/workflows/eprint/rioxx2.xml" );
        EPrints::XML::add_to_xml( $filename, $insert->documentElement(), $self->{package_name} );

        $self->reload_config if !$skip_reload;
}

