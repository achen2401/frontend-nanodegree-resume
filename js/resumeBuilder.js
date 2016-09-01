var bio = {
    'name': 'Amy Chen',
    'role': 'Application Developer',
    'contacts': {
        'mobile': '888-888-8888',
        'email': 'gal@gmail.com',
        'github': 'https://github.com/achen2401',
        'blog': 'http://amysbubble.us',
        'location': 'Seattle, Washington'
    },
    'welcomeMessage' : 'Welcome to my online resume.  The journey started in Seattle. Then I left. And now I have come back home where I started.',
    'skills' : ['Full Stack Web Development', 'Twitter Bootstrap', 'JQuery', 'AngularJS', 'Restful Services'],
    'biopic' : 'images/fefe.jpg',
    'display': function() {

        $('#header').prepend(
            HTMLheaderName.replace('%data%',this.name),
            HTMLheaderRole.replace('%data%',this.role)
        );

        $('#topContacts').append(
            HTMLmobile.replace('%data%', this.contacts.mobile),
            HTMLemail.replace('%data%', this.contacts.email),
            HTMLgithub.replace('%data%', this.contacts.github),
            HTMLblog.replace('%data%', this.contacts.blog),
            HTMLlocation.replace('%data%', this.contacts.location)
        );

        $('#header').append(
            HTMLbioPic.replace('%data%', this.biopic),
            HTMLwelcomeMsg.replace('%data%', this.welcomeMessage),
            HTMLskillsStart
        );

        this.skills.forEach(function(skill) {
            $('#skills').append(HTMLskills.replace('%data%', skill));
        });

        $('#footerContacts').append(
            HTMLcontactGeneric.replace('%contact%', 'email').replace('%data%', this.contacts.email),
            HTMLcontactGeneric.replace('%contact%', 'mobile').replace('%data%', this.contacts.mobile)
        );


    }


};

var education = {
    'schools' : [
        {   'name': 'University of Washington',
            'degree': 'BS',
            'majors' : ['Psychology'],
            'dates' : '2000 - 2004',
            'location': 'Seattle, Washington',
            'url':'http://u.washington.edu/'
        },
        {
            'name': 'University of Minnesota',
            'degree': 'Certificate',
            'majors': ['Computer Science & Information Technology'],
            'dates': '2005 - 2007',
            'location': 'Mineapolis, Minnesota',
            'url': 'https://twin-cities.umn.edu'
        },
        {
            'name': 'Udacity',
            'degree': 'Nanodegree',
            'majors' : ['Front End Development'],
            'dates' : '2016 to Present',
            'location': 'Seattle, Washington',
            'url' : 'http://www.udacity.com'

        }
    ],
    'onlineCourses' : [
        {
            'title': 'R Programming',
            'school': 'Johns Hopkins',
            'dates' : 'Aug 2015 - Sep 2015',
            'url' : 'https://www.coursera.org/learn/r-programming'

        },
        {
            'title': 'Full Stack Foundations',
            'school': 'Udacity',
            'dates' : 'Oct 2015 - Nov 2015',
            'url' : 'https://www.udacity.com/'

        }

    ],
    'display': function(){

        this.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(
                HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree),
                HTMLschoolDates.replace('%data%', school.dates),
                HTMLschoolLocation.replace('%data%', school.location),
                HTMLschoolMajor.replace('%data%', school.majors.join(', '))
            );

        });


        this.onlineCourses.forEach(function(onlineCourse, index) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(
                (index === 0 ? HTMLonlineClasses : ''),
                HTMLonlineTitle.replace('%data%', onlineCourse.title) + HTMLonlineSchool.replace('%data%', onlineCourse.school),
                HTMLonlineDates.replace('%data%', onlineCourse.dates),
                HTMLonlineURL.replace('%data%', onlineCourse.url)
            );

        });


    }

};

var work = {
    jobs : [
        {
            'employer' : 'Information School, University of Washington',
            'title': 'Application Developer',
            'location' : 'Seattle, Washington',
            'dates': 'Dec 2015 - Aug 2016',
            'description': 'Setting up and maintaining Java-based digital repository application for storing documents on Apache server.  Performing, analyzing and extracting data and generating reports using R. Designing responsive web applications utilizing Node.js as the runtime engine.  Creating/designing responsive and interactive user interface using JQuery and Angular JS and Twitter Bootstrap.  Writing and maintaining backend restful services in PHP.  Linux server maintenance to include writing bash scripts and scheduling cron jobs.'
        },
        {
            'employer' : 'Lab of Computer Science, Mass General',
            'title': 'Application Developer',
            'dates': 'Oct 2008 - July 2016',
            'location' : 'Boston, Massachuesetts',
            'description': 'Fullstack web application development catering to the needs of health professionals.   Designing responsive user interface using JQuery, Javascript and Twitter Bootstrap.  Programming Restful services in classic ASP and  C# in .NET framework.  Implementing MVC applications in .Net framework.'
        }
    ],
    display: function() {
        this.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(
                HTMLworkEmployer.replace('%data%', job.employer),
                HTMLworkTitle.replace('%data%', job.title),
                HTMLworkDates.replace('%data%', job.dates),
                HTMLworkLocation.replace('%data%', job.location),
                HTMLworkDescription.replace('%data%', job.description)
            );
        });

    }
};

var projects = {
    'projects': [
        {
            'title': 'Photography',
            'dates': '2007 - Present',
            'description': 'Taking photos at spare time',
            'images': ['images/photography1.jpg', 'images/photography2.jpg']
        }
    ],
    'display': function() {
        projects.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(
                HTMLprojectTitle.replace('%data%', project.title),
                HTMLprojectDates.replace('%data%', project.dates),
                HTMLprojectDescription.replace('%data%', project.description)
            );
            project.images.forEach(function(image) {
                $('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
            });

        });

    }


};

[bio, education, work, projects].forEach(function(section) { section.display(); });

$('#mapDiv').append(googleMap);