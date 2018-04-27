(function($){
	$(document).ready(function($) {
	var formId   = '#clickoptin_cf_wrapper_' + clickOptinId,
		buttonId = '#clickoptin_cf_button_' + clickOptinId,
		inputId  = '#clickoptin_cf_email_' + clickOptinId,
		emailAddress = '';

		$( formId ).on( 'submit', function(e) {
			e.preventDefault();

			emailAddress = $( inputId ).val();
			if (emailAddress != '' && /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailAddress)) {
				$( buttonId ).addClass('clickoptin_cf_email_green');
				if(clickOptinRedirect === 'newtab') {
					window.open('https://' + clickOptinSubdomain + '/instant_optin/' + clickOptinId + '/' + emailAddress, '_blank');
				}
				else {
					window.location.href = 'https://' + clickOptinSubdomain + '/instant_optin/' + clickOptinId + '/' + emailAddress;
				}
			}
			else {
			   $( buttonId ).addClass('clickoptin_cf_email_red');
			}
		});
	});
})(jQuery);
