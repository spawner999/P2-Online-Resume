var work = {
	"jobs" : [
		{
			"employer" : "LineaEffe Srl",
			"title" : "Labourer",
			"location" : "Italy",
			"dates" : "2015",
			"description" : "Simple Labourer"
		},
		{
			"employer" : "Università Insubria",
			"title" : "Front Office",
			"location" : "Italy",
			"dates" : "2014",
			"description" : "Student Helpdesk"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Udacity FEND P0",
			"dates" : "08/15",
			"description" : "About Me",
			"images" : "myImgUrl1"
		},
		{
			"title" : "Udacity FEND P1",
			"dates" : "09/15",
			"description" : "Build A Porfolio Site",
			"images" : "myImgUrl2"
		},
		{
			"title" : "Udacity FEND P2",
			"dates" : "09/15",
			"description" : "Online Resume",
			"images" : "myImgUrl3"
		}
	]
};

var bio = {
	"name" : "Lorenzo",
	"role" : "FE Apprentice",
	"welcomeMessage" : "Welcome to My Online Resume!",
	"contacts" : {
		"mobile" : "3495141142",
		"email" : "lore.ferrario@gmail.com",
		"github" : "spawner999",
		"location" : "Italy"
	},
	"skills" : ["HTML5",
		"CSS3",
		"JS"]
};

var education = {
	"schools" : [
		{
			"name" : "Liceo Scientifico Da Vinci",
			"location" : "Gallarate, VA",
			"degree" : "Diploma di Maturità",
			"majors" : [null],
			"dates" : "2005-2010"
		},
		{
			"name" : "Università Insubria",
			"location" : "Varese",
			"degree" : "Not finished",
			"majors" : ["Computer Science"],
			"dates" : "2011/2014"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Nanodegree",
			"school" : "Udacity",
			"dates" : "08-12/2015",
			"url" : "http://www.udacity.com"
		}
	]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

if (bio.skills.length >0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}