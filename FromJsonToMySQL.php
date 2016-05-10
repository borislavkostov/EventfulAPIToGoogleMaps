<?php
error_reporting(E_ALL); ini_set('display_errors', 1);
    $servername = "localhost";
	$username = "root";
	$password = "lENOVOT999";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

    //read the json file contents
    $jsondata = file_get_contents('events.json');
    
    //convert json object to php associative array


    //get the employee details
    $id = $data['id'];
    $url  = $data['url'];
    $title = $data['title'];
    $description = $data['description'];
    $start_time = $data['start_time'];
    $stop_time = $data['stop_time'];
    $venue_id = $data['venue_id'];
    $venue_url = $data['venue_url'];
    $latitude = $data['latitude'];
    $longitude = $data['longitude'];
    
    //insert into mysql table
    $sql = "INSERT INTO event(id,url,title,description,start_time,stop_time,venue_id,venue_url,latitude,longitude)
    VALUES('$id',$url,$title,$description,$start_time,$stop_time,$venue_id,$venue_url, '$latitude', '$longitude')";
    if(!mysqli($sql,$conn))
    {
        die('Error : '. mysqlierror());
    }
?>
