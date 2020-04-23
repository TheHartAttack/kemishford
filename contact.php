<?php
$field_firstname = $_POST['cf_firstname'];
$field_lastname = $_POST['cf_lastname'];
$field_email = $_POST['cf_email'];
$field_phone = $_POST['cf_phone'];
$field_address1 = $_POST['cf_address1'];
$field_address2 = $_POST['cf_address2'];
$field_town = $_POST['cf_town'];
$field_county = $_POST['cf_county'];
$field_postcode = $_POST['cf_postcode'];
$field_message = $_POST['cf_message'];
$website = 'Kemishford Interiors';

$mail_to = 'info@kemishford.co.uk';
$subject = 'KP&D: '.$field_firstname.' '.$field_lastname.' - '.$field_town.', '.$field_county;

$body_message = '<html><b>From: </b>'.$field_firstname.' '.$field_lastname.'<br><br>';
$body_message .= '<b>Phone: </b>'.$field_phone.'<br><br>';
$body_message .= '<b>E-mail: </b>'.$field_email.'<br><br>';
$body_message .= '<b>Address: </b>'.$field_address1.', '.$field_address2.', '.$field_town.', '.$field_county.', '.$field_postcode.'<br><br>';
$body_message .= $field_message.'</html>';

$headers = 'From: '.$website."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you, your message was successfully submitted.');
		window.location = 'http://kemishfordinteriors.co.uk';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please send an e-mail to info@kemishford.co.uk.');
		window.location = 'http://kemishfordinteriors.co.uk';
	</script>
<?php
}
?>
