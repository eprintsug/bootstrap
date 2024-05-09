$c->{theme} ="bootstrap";

# To enable bootstrap login screen
$c->{plugin_alias_map}->{"Screen::Login::Internal"} = "Screen::Login::BootstrapLogin";
$c->{plugin_alias_map}->{"Screen::Login::BootstrapLogin"} = undef;
