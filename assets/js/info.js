var info = {
	"education": {
		"Rensselaer Polytechnic Institute": [
			"B.S. Aerospace Engineering - Expected 2023",
			"B.S. Computer Science      - Expected 2023"
		]
	},
	"experience": {
		"NASA_Johnson_Space_Center" : {
			"title": "EG2_usra_intern",
			"date": "summer_2022"
		},
		"NASA_Johnson_Space_Center" : {
			"title": "undergrad_researcher",
			"date": "spring_2022"
		},
		"RPI_Center_for_Earthquake_engineering_Simulation" : {
			"title": "undergrad_research_asst.",
			"date": "2020-2021"
		},
		"RPI_Critical_CS" : {
			"title": "undergrad_research_asst.",
			"date": "spring_2020"
		},
		"City_of_Woburn_Engineering_Dept": {
			"title" : "paid_intern",
			"date": "2016-2021"
		}
	},
	"skills": {
		"engineering": [
			"fusion360",
			"matlab",
			"simulink",
			"stk",
			"excel"
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
		"building things",
		"listening to music",
		"watching movies",
		"playing guitar"
	],
	"contact": {
		"email": "maxtmarshall99@gmail.com",
		"github": "https://github.com/Jormungandr1105",
		"linkedin": "https://www.linkedin.com/in/max-t-marshall"
	},
	"temp": {
		"date": "06/10/2022",
		"song": "Fade to Black",
		"band": "Metallica",
		"status": "tired of admin",
		"current": [
			"none"
		]
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
