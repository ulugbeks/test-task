<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sendTo = 'forged@true-forged.com';
$subject = 'Application from ' . $name . ' <'.$email.'>';
$headers = 'Reply-To: ' . $email . "\r\n";

mail($sendTo, $subject, $message, $headers);