
/*
These	are	HTML	strings.	As	part	of	the	course,	you"ll	be	using	JavaScript	functions
replace	the	%data%	placeholder	text	you	see	in	them.
*/
var	HTMLheaderName	=	'<h1	id="name">%data%</h1>';
var	HTMLheaderRole	=	'<h4	id="role">%data%</h4></h3>';

var HTMLmenuSkills = '<li><a href="#skill_c">Skills</a></li>';
var HTMLmenuWork = '<li><a href="#work_c"">Work</a></li>';
var HTMLmenuProjects = '<li><a href="#projects_c">Projects</a></li>';
var HTMLmenuEducation = '<li><a href="#education_c">Education</a></li>';
var HTMLmenuMap = '<li><a href="#map_c">Map</a></li>';
var HTMLmenuContacts = '<li><a href="#contact_c">Contacts</a></li>';

var	HTMLcontactGeneric	=	'<div	class="contact-entry	col-sm-6"><li><span	class="c_type">%contact%</span>	%data%</li></div>';

var	HTMLbioPic	=	'<img	src="%data%"	class="biopic">';
var	HTMLwelcomeMsg	=	'<h4	class="welcome-message">%data%</h4>';

var	HTMLskillsStart	=	'<h2	id="skills-h3">>_	Skills</h2><ul	id="skills"></ul>';
var	HTMLskills	=	'<div	class="col-sm-4"><li>%data%</li></div>';

var	HTMLworkStart	=	'<div	class="work-entry	col-sm-4"></div>';
var	HTMLworkEmployer	=	'<a	href="url">%data%</a>';
var	HTMLworkDates	=	'<div	class="date-text">%data%</div>';
var	HTMLworkLocation	=	'<div	class="location-text">%data%</div>';
var	HTMLworkDescription	=	'<p>%data%</p>';

var	HTMLprojectStart	=	'<div	class="project-entry	col-sm-4"></div>';
var	HTMLprojectTitle	=	'<a	href="url">%data%</a>';
var	HTMLprojectDates	=	'<div	class="date-text">%data%</div>';
var	HTMLprojectDescription	=	'<p>%data%</p>';
var	HTMLprojectImage	=	'<img	src="%data%">';

var	HTMLschoolStart	=	'<div	class="education-entry	col-sm-6"></div>';
var	HTMLschoolName	=	'<a	href="url">%data%</a>';
var	HTMLschoolDegree	=	'<div>%data%</div>';
var	HTMLschoolDates	=	'<div>%data%</div>';
var	HTMLmajorStart	=	'<div	class="major_list">Majors:	</div>';

var	HTMLonlineClasses	=	'<div	class="col-sm-12"	id="onlineTitle"><h2>>_	Online	Classes</h2></div>';
var	HTMLonlineTitle	=	'<div	class="date-text">%data%</div>';
var	HTMLonlineSchool	=	'<a	href="url">%data%</a>';
var	HTMLonlineDates	=	'<div	class="date-text">%data%</div>';


/*
The	next	few	lines	about	clicks	are	for	the	Collecting	Click	Locations	quiz	in	Lesson	2.
*/
clickLocations	=	[];

function	logClicks(x,y)	{
		clickLocations.push(
				{
						x:	x,
						y:	y
				}
		);
		console.log("x	location:	"	+	x	+	";	y	location:	"	+	y);
}

$(document).click(function(loc)	{
		var	x	=	loc.pageX;
		var	y	=	loc.pageY;
		logClicks(x,y);
		});


/*
Fixes	a	bug	in	Mobile	navbar
*/
$(document).on("click",".navbar-collapse.in",function(e)	{
		if(	$(e.target).is("a")	&&	$(e.target).attr("class")	!=	"dropdown-toggle"	)	{
						$(this).collapse("hide");
				}
});


/*
This	is	the	fun	part.	Here"s	where	we	generate	the	custom	Google	Map	for	the	website.
See	the	documentation	below	for	more	details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var	map;				//	declares	a	global	map	variable


/*
Start	here!	initializeMap()	is	called	when	page	is	loaded.
*/
function	initializeMap()	{

		var	locations;

		var	mapOptions	=	{
				disableDefaultUI:	true
		};



		/*
		locationFinder()	returns	an	array	of	every	location	string	from	the	JSONs
		written	for	bio,	education,	and	work.
		*/
		function	locationFinder()	{

				//	initializes	an	empty	array
				var	locations	=	[];

				//	adds	the	single	location	property	from	bio	to	the	locations	array
				locations.push(bio.contacts.location);

				//	iterates	through	school	locations	and	appends	each	location	to
				//	the	locations	array
				for	(var	school	in	education.schools)	{
						locations.push(education.schools[school].location);
				}

				//	iterates	through	work	locations	and	appends	each	location	to
				//	the	locations	array
				for	(var	job	in	work.jobs)	{
						locations.push(work.jobs[job].location);
				}

				return	locations;
		}

		/*
		For	the	map	to	be	displayed,	the	googleMap	var	must	be
		appended	to	#mapDiv	in	resumeBuilder.js.
		*/
				map	=	new	google.maps.Map(document.querySelector("#mapDiv"),	mapOptions);


		/*
		createMapMarker(placeData)	reads	Google	Places	search	results	to	create	map	pins.
		placeData	is	the	object	returned	from	search	results	containing	information
		about	a	single	location.
		*/
		function	createMapMarker(placeData)	{

				//	The	next	lines	save	location	data	from	the	search	result	object	to	local	variables
				var	lat	=	placeData.geometry.location.lat();		//	latitude	from	the	place	service
				var	lon	=	placeData.geometry.location.lng();		//	longitude	from	the	place	service
				var	name	=	placeData.formatted_address;			//	name	of	the	place	from	the	place	service
				var	bounds	=	window.mapBounds;												//	current	boundaries	of	the	map	window

				//	marker	is	an	object	with	additional	data	about	the	pin	for	a	single	location
				var	marker	=	new	google.maps.Marker({
						map:	map,
						position:	placeData.geometry.location,
						title:	name
				});

				//	infoWindows	are	the	little	helper	windows	that	open	when	you	click
				//	or	hover	over	a	pin	on	a	map.	They	usually	contain	more	information
				//	about	a	location.
				var	infoWindow	=	new	google.maps.InfoWindow({
						content:	name
				});

				//	hmmmm,	I	wonder	what	this	is	about...
				google.maps.event.addListener(marker,	"click",	function()	{
						//	your	code	goes	here!
				});

				//	this	is	where	the	pin	actually	gets	added	to	the	map.
				//	bounds.extend()	takes	in	a	map	location	object
				bounds.extend(new	google.maps.LatLng(lat,	lon));
				//	fit	the	map	to	the	new	marker
				map.fitBounds(bounds);
				//	center	the	map
				map.setCenter(bounds.getCenter());
		}

		/*
		callback(results,	status)	makes	sure	the	search	returned	results	for	a	location.
		If	so,	it	creates	a	new	map	marker	for	that	location.
		*/
		function	callback(results,	status)	{
				if	(status	==	google.maps.places.PlacesServiceStatus.OK)	{
						createMapMarker(results[0]);
				}
		}

		/*
		pinPoster(locations)	takes	in	the	array	of	locations	created	by	locationFinder()
		and	fires	off	Google	place	searches	for	each	location
		*/
		function	pinPoster(locations)	{

				//	creates	a	Google	place	search	service	object.	PlacesService	does	the	work	of
				//	actually	searching	for	location	data.
				var	service	=	new	google.maps.places.PlacesService(map);

				//	Iterates	through	the	array	of	locations,	creates	a	search	object	for	each	location
				for	(var	place	in	locations)	{

						//	the	search	request	object
						var	request	=	{
								query:	locations[place]
						};

						//	Actually	searches	the	Google	Maps	API	for	location	data	and	runs	the	callback
						//	function	with	the	search	results	after	each	search.
						service.textSearch(request,	callback);
				}
		}

		//	Sets	the	boundaries	of	the	map	based	on	pin	locations
		window.mapBounds	=	new	google.maps.LatLngBounds();

		//	locations	is	an	array	of	location	strings	returned	from	locationFinder()
		locations	=	locationFinder();

		//	pinPoster(locations)	creates	pins	on	the	map	for	each	location	in
		//	the	locations	array
		pinPoster(locations);

}

/*
Uncomment	the	code	below	when	you"re	ready	to	implement	a	Google	Map!
*/

//	Calls	the	initializeMap()	function	when	the	page	loads
window.addEventListener("load",	initializeMap);

//	Vanilla	JS	way	to	listen	for	resizing	of	the	window
//	and	adjust	map	bounds
window.addEventListener("resize",	function(e)	{
		//Make	sure	the	map	bounds	get	updated	on	page	resize
map.fitBounds(mapBounds);
});

