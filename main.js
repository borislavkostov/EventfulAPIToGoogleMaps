// JavaScript Documentz

var map = new google.maps.Map(document.getElementById('map'),{
	zoom:2,
	center:new google.maps.LatLng(36.05178307933835,42.49737373046878),
	mapTypeId:google.maps.MapTypeId.ROADMAP
	});
//-----------------------------------------------
	function download_file() 
	{
	for(i=0;i<10;i++)//This is for page number counter
   {
   	var url = "http://api.eventful.com/json/events/search?c=music&app_key=API_KEY&page_number="+i+"&date=Future"
  	window.location = url;
	

$(window).load(function () {    
jsonRequest(url);
});
    }
	}
//------------------------------------------------------		
/*
Function for JSON Request
*/
function jsonRequest(url)
{
     var script=document.createElement('script');
     script.src=url;
     document.head.appendChild(script);//80% faster than document.getElementsByTagName("head")[0]
}

/*
Callback function after the request
*/
function processJSONP(data)
{
	var $content = $('#sidebar');// selector caching
	$content.html("");// Erase the content at beginning of every json Request
	console.log(data);
	if(data.events.length==0)// Results count is zero. So no data obtained
	{
		$content.html("No events found");// No valid concerts found
		}
	else
	{		
	  for(var i=0;i<data.events.event.length;i++)																
	  {
		  $thisevent = data.events.event[i];// Get the current event
		  console.log($thisevent);
		  var marker = new google.maps.Marker({	
                            position:new google.maps.LatLng($thisevent.latitude, $thisevent.longitude),	// Get the latitude and longitude
icon:"icon.png",title:"Date : "+$thisevent.start_time+"</br><a href="+$thisevent.url+">MORE</a>",// Set Date and URL
                            });
							
				var infowindow = new google.maps.InfoWindow();		
                marker.setMap(map);			
				google.maps.event.addListener(marker,'click',function(){// On click event listener
				infowindow.setContent(this.title);// get the title property of marker
    			infowindow.open(map,this);// Open infowindow associated with this marker
				});		  
	  }
	}
}


