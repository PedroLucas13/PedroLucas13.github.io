<?php 

function getClientIP(){
    $ip = $_SERVER['REMOTE_ADDR'];
  return $ip;
}

$ipaddress = getClientIP();

function ip_details($ip) {
  $json = file_get_contents("https://ipinfo.io/$ip?token=07d5cdd453f92b");
  $details = json_decode($json, true);
  return $details;
}

$details = ip_details($ipaddress);
echo $details['loc'];


?>