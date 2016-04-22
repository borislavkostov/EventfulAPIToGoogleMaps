<!DOCTYPE html>
<html>
<body>
<?php
class Markers{
var $name;
var $address;
var $lat;
var $lng;
$lat[];
$lng[];

}
$xml=simplexml_load_file("markers.xml") or die("Error: Cannot create object");
foreach($xml->children() as $markers) {
var $i;
$i++;
   $name= $markers->name . ", ";
echo $name; 
   $address= $markers->address . ", "; 
    $lat= $markers->lat . ", ";
$lat[$i]=$lat;
echo $lat[$i];
    $lng= $markers->lng . "<br>";
$lng[$i]=$lng;
echo $lng[$i];
} 
?>
</body>
</html>
