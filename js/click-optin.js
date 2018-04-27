(function($){
	$(document).ready(function($) {
	var buttonId = '#clickoptin_cf_button_' + clickOptinId,
		inputId  = '#clickoptin_cf_email_' + clickOptinId;

		$( buttonId ).click(function() {
			var check_email = $( inputId ).val();
			if (check_email != '' && /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(check_email)) {
				$( buttonId ).addClass('clickoptin_cf_email_green');
				if(clickOptinRedirect === 'newtab') {
					window.open('https://' + clickOptinSubdomain + '/instant_optin/' + clickOptinId + '/' + $( inputId ).val(), '_blank');
				}
				else {
					window.location.href = 'https://' + clickOptinSubdomain + '/instant_optin/' + clickOptinId + '/' + $( inputId ).val();
				}
			}
			else {
			   $( buttonId ).addClass('clickoptin_cf_email_red');
			}
		});
	});
})(jQuery);
