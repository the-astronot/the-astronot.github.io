var info = {
	"temp": {
		"date": "05/11/2023",
		"song": "Like A Stone",
		"band": "Audioslave",
		"status": "getting better",
		"current": [
			"classwork"
		]
	},
	"education": {
		"Rensselaer Polytechnic Institute": [
			"B.S.   Aeronautical Engineering - Expected 2023",
			"B.S.   Computer Science         - Expected 2023",
			"M.Eng. Aeronautical Engineering - Expected 2024"
		]
	},
	"experience": {
		"NASA_Johnson_Space_Center_(EG2)" : {
			"title": "usra_intern",
			"date": "summer_2022"
		},
		"NASA_Johnson_Space_Center_(Remote)" : {
			"title": "undergrad_researcher",
			"date": "spring_2022"
		},
		"RPI_Center_for_Earthquake_Engineering_Simulation" : {
			"title": "undergrad_research_asst.",
			"date": "fall_2020,fall_2021"
		},
		"RPI_Critical_CS" : {
			"title": "undergrad_research_asst.",
			"date": "spring_2020"
		},
		"City_of_Woburn_Engineering_Dept": {
			"title" : "paid_intern",
			"date": "2016-2018,summer_2019,summer_2021"
		}
	},
	"skills": {
		"engineering": [
			"fusion360",
			"matlab",
			"simulink",
			"stk",
			"spatial_analyzer"
		],
		"programming": [
			"python",
			"c/c++/c#",
			"latex",
			"bash",
			"linux",
			"matlab"
		]
	},
	"hobbies": [
		"coding",
		"building_things",
		"listening_to_music",
		"watching_movies",
		"playing_guitar"
	],
	"contact": {
		"email": "maxtmarshall99@gmail.com",
		"github": "https://github.com/the-astronot",
		"linkedin": "https://www.linkedin.com/in/max-t-marshall",
		"website": "https://the-astronot.com"
	}
}

var help = "Here is a list of commands you can try:\n" +
"------------------------------\n" +
"## Standard Bash commands:\n" +
"cd - change the current directory\n" + 
"ls - list files and folders in directory\n" +
"cat - open a file for reading\n" +
"------------------------------\n" + 
"## About Me:\n" +
"education - lists education\n" +
"experience - lists experience\n" +
"skills - lists skills\n" +
"hobbies - lists hobbies\n" +
"status - speaks for itself\n" +
"current - current project(s)\n" +
"contact - lists my email and profiles\n" +
"------------------------------\n" +
"## Other Totally Unneccessary Bash Commands\n" +
"su - switch user";

var intro = "Welcome to my website!\n\n" +
"Feel free to have a look around.\n\n" +
'"help" lists commands available to you.\n\n' +
"Last_Updated: " + info["temp"]["date"] + "\n" +
"Last_Song: "+ info["temp"]["song"] + " - " + info["temp"]["band"] + "\n";
