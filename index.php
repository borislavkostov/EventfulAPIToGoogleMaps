<!DOCTYPE html>
<html>
<body>
<?php
class Markers{
var $name;
var $address;
var $lat;
var $lng;


}
$xml=simplexml_load_file("markers.xml") or die("Error: Cannot create object");
foreach($xml->children() as $markers) {

   $name= $markers->name . ", ";
   echo $name; 
   $address= $markers->address . ", "; 
    $lat= $markers->lat . ", ";
    $lng= $markers->lng . "<br>";
} 
?>
</body>
</html>
