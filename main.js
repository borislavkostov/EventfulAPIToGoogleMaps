// JavaScript Document


var map = new google.maps.Map(document.getElementById('map'),{
	zoom:2,
	center:new google.maps.LatLng(36.05178307933835,42.49737373046878),
	mapTypeId:google.maps.MapTypeId.ROADMAP
	});
		

$(window).load(function () {
// Send the Request to show all future events of Andrea Bocelli     
jsonRequest("http://api.eventful.com/json/events/search?c=music&app_key=Tm9vvdLvvQvkZ6KF&page_number=1&date=Future&keywords=Andrea-Bocelli&callback=processJSONP");
});
		
/*
Function for JSON Request
*/
function jsonRequest(url)
{
     var script=document.createElement('script');
     script.src=url;
     document.getElementsByTagName('head')[0].appendChild(script);
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

