var work = {
	"jobs" : [
		{
			"employer" : "LineaEffe Srl",
			"title" : "Labourer",
			"location" : "Lonate Pozzolo, Italy",
			"dates" : "2015",
			"description" : "Simple Labourer"
		},
		{
			"employer" : "Università Insubria",
			"title" : "Front Office",
			"location" : "Varese, Italy",
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
			"images" : "https://placehold.it/150x150"
		},
		{
			"title" : "Udacity FEND P1",
			"dates" : "09/15",
			"description" : "Build A Porfolio Site",
			"images" : "https://placehold.it/150x150"
		},
		{
			"title" : "Udacity FEND P2",
			"dates" : "09/15",
			"description" : "Online Resume",
			"images" : "https://placehold.it/150x150"
		}
	]
};

var bio = {
	"name" : "Lorenzo Ferrario",
	"role" : "FE Apprentice",
	"welcomeMessage" : "Welcome to My Online Resume!",
	"contacts" : {
		"mobile" : "3495141142",
		"email" : "lore.ferrario@gmail.com",
		"github" : "spawner999",
		"location" : "Gallarate, Italy"
	},
	"skills" : ["HTML5",
		"CSS3",
		"JS",
		"BOOTSRAP"
	]
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

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (index in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
		$("#skills").append(formattedSkill);
	}
}

work.display = function(){
	for(index in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

work.display();

projects.display = function(){
	for(index in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();

$("#mapDiv").append(googleMap);