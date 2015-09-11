/*
Json
*/

var work = {
	'jobs' : [
		{
			'employer' : 'LineaEffe Srl',
			'url' : 'http://www.lineaeffesrl.it/',
			'location' : 'Lonate Pozzolo, Italy',
			'dates' : '2015',
			'description' : 'Here goes job description'
		},
		{
			'employer' : 'Università Insubria',
			'url' : 'http://www4.uninsubria.it/on-line/home.html',
			'location' : 'Varese, Italy',
			'dates' : '2014',
			'description' : 'Here goes job description'
		}
	]
};

var projects = {
	'projects' : [
		{
			'title' : 'Udacity FEND P0',
			'dates' : '08/15',
			'description' : 'About Me',
			'images' : 'https://placehold.it/150x150',
			'url' : 'http://www.udacity.com'
		},
		{
			'title' : 'Udacity FEND P1',
			'dates' : '09/15',
			'description' : 'Porfolio Site',
			'images' : 'https://placehold.it/150x150',
			'url' : 'http://www.udacity.com'
		},
		{
			'title' : 'Udacity FEND P2',
			'dates' : '09/15',
			'description' : 'Online Resume',
			'images' : 'https://placehold.it/150x150',
			'url' : 'http://www.udacity.com'
		}
	]
};

var bio = {
	'name' : 'Lorenzo Ferrario',
	'role' : 'FE Apprentice',
	'welcomeMessage' : 'Welcome to My Online Resume!',
	'pic' : 'https://placehold.it/150x150',
	'contacts' : {
		'mobile' : '000000000',
		'@' : 'abc123@gmail.com',
		'github' : 'spawner999',
		'location' : 'Madrid, Spain'
	},
	'skills' : ['html5',
		'css3',
		'js',
		'bootstrap',
		'jquery'
	]
};

var education = {
	'schools' : [
		{
			'name' : 'Liceo Scientifico Da Vinci',
			'location' : 'Gallarate, VA',
			'degree' : 'Diploma di Maturità',
			'majors' : ['a', 'b', 'c'],
			'dates' : '2005-2010',
			'url' : 'http://www.udacity.com'
		},
		{
			'name' : 'Università Insubria',
			'location' : 'Varese',
			'degree' : 'Not finished',
			'majors' : [],
			'dates' : '2011/2014',
			'url' : 'http://www.udacity.com'
		}
	],
	'onlineCourses' : [
{
			'title' : 'Front End Nanodegree',
			'school' : 'Udacity',
			'dates' : '08-12/2015',
			'url' : 'http://www.udacity.com'
		}
	]
}

/*
Function declaration
*/

var data = '%data%';

work.display = function(){
	for(var index = 0; index < work.jobs.length; index ++){
		$('#work_c').append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace(data, work.jobs[index].employer).replace('url', work.jobs[index].url);
		var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[index].dates);
		var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[index].description);

		$('.work-entry:last').append(formattedWorkEmployer, formattedWorkDates, formattedWorkDescription);
	}

	$('#section_menu').append(HTMLmenuWork);
}

projects.display = function(){
	for(var index = 0; index < projects.projects.length; index ++){
		$('#projects_c').append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[index].title).replace('url', projects.projects[index].url);
		var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[index].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[index].description);
		var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[index].images);

		$('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
	}

	$('#section_menu').append(HTMLmenuProjects);
}

bio.display = function(){
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace(data, bio.pic);

	$('#name_role').append(formattedName, formattedRole, formattedMsg);
	$('#pic').prepend(formattedPic);

	for(var index in bio.contacts){
		var formattedContact = HTMLcontactGeneric.replace(data, bio.contacts[index]).replace('%contact%', index);
		$('#contact_c').append(formattedContact);
	}

	if(bio.skills.length){
		$('#skills').append(HTMLskillsStart);
		$('#section_menu').append(HTMLmenuSkills);

		for(var index = 0; index < bio.skills.length; index ++){
			var formattedSkill = HTMLskills.replace(data, bio.skills[index]);
			$('#skills').append(formattedSkill);
		}
	}

	$('#section_menu').append(HTMLmenuContacts);
}

education.display = function() {
	for(var index = 0; index < education.schools.length; index ++){
		$('#education_c').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace(data, education.schools[index].name).replace('url', education.schools[index].url);
		var formattedschoolDegree = HTMLschoolDegree.replace(data, education.schools[index].degree);
		$('.education-entry:last').append(formattedSchoolName, formattedschoolDegree);

		if(education.schools[index].majors.length){
			$('.education-entry:last').append(HTMLmajorStart);
			var majors_txt = '';

			for(var index0 = 0; index0 < education.schools[index].majors.length; index0 ++){
				majors_txt = majors_txt + ' ' + education.schools[index].majors[index0];
			}

			$('.education-entry:last .major_list').append(majors_txt);

		}

		var formattedschoolDates = HTMLschoolDates.replace(data, education.schools[index].dates);
		$('.education-entry:last').append(formattedschoolDates);

	}

	if(education.onlineCourses.length){

		$('#education_c').append(HTMLonlineClasses);

		for(var index = 0; index < education.onlineCourses.length; index ++){
			$('#education_c').append(HTMLschoolStart);

			var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[index].school).replace('url', education.onlineCourses[index].url);
			var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[index].title);
			var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[index].dates);

			$('.education-entry:last').append(formattedOnlineSchool, formattedOnlineTitle, formattedOnlineDates);
		}
	}

	$('#section_menu').append(HTMLmenuEducation, HTMLmenuMap);
}

/*
Function call
*/

work.display();
projects.display();
bio.display();
education.display();

