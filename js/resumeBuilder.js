var work = {
	"jobs" : [
		{
			"employer" : "LineaEffe Srl",
			"url" : "http://www.lineaeffesrl.it/",
			"location" : "Lonate Pozzolo, Italy",
			"dates" : "2015",
			"description" : "Here goes job description"
		},
		{
			"employer" : "Università Insubria",
			"url" : "http://www4.uninsubria.it/on-line/home.html",
			"location" : "Varese, Italy",
			"dates" : "2014",
			"description" : "Here goes job description"
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
			"description" : "Porfolio Site",
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
	"pic" : "https://placehold.it/150x150",
	"contacts" : {
		"mobile" : "3495141142",
		"email" : "lore.ferrario@gmail.com",
		"github" : "spawner999",
		"location" : "Madrid, Spain"
	},
	"skills" : ["html5",
		"css3",
		"js",
		"bootstrap",
		"jquery"
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
			"majors" : [null],
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


bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#name_role").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#name_role").prepend(formattedName);
	var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
	$("#pic").prepend(formattedPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#name_role").append(formattedMsg);

	for(index in bio.contacts){
		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[index]).replace("%contact%", index);
		$("#contact_c").append(formattedContact);
	}

	if (bio.skills.length > 0) {
		$("#skills").append(HTMLskillsStart);
		for (index in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
			$("#skills").append(formattedSkill);
		}
	}
}

bio.display();

work.display = function(){
	for(index in work.jobs){
		$("#work_c").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer).replace("url", work.jobs[index].url);
		$(".work-entry:last").append(formattedWorkEmployer);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

work.display();

projects.display = function(){
	for(index in projects.projects){
		$("#projects_c").append(HTMLprojectStart);

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

education.display = function(){
	for(index in education.schools){
		$("#education_c").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name).replace("url", "http://google.it");
		$(".education-entry:last").append(formattedSchoolName);

		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
		$(".education-entry:last").append(formattedschoolDegree);

		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
		$(".education-entry:last").append(formattedschoolDates);
	}

	if (education.onlineCourses.length > 0) {

		$("#education_c").append(HTMLonlineClasses);

		for(index1 in education.onlineCourses){

			$("#education_c").append(HTMLschoolStart);

			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index1].school).replace("url", "http://google.it");
			$(".education-entry:last").append(formattedOnlineSchool);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index1].title);
			$(".education-entry:last").append(formattedOnlineTitle);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index1].dates);
			$(".education-entry:last").append(formattedOnlineDates);
		}
	}
}

education.display();