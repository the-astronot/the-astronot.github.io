var info = {
	"education": {
		"Rensselaer Polytechnic Institute": [
			"B.S. Aerospace Engineering - Expected 2023",
			"B.S. Computer Science      - Expected 2023"
		]
	},
	"experience": {
		"nasa_jsc" : {
			"title" : "undergrad_researcher",
			"date" : ""
		},
		"rpi_cees" : {
			"title": "undergrad_research_asst",
			"date": ""
		},
		"rpi_critical_cs" : {
			"title" : "undergrad_research_asst",
			"date" : ""
		},
		"city_of_woburn": {
			"title" : "paid intern",
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
			"c/c++",
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
		"watching movies"
	],
	"contact": {
		"email": "maxtmarshall99@gmail.com",
		"github": "https://github.com/Jormungandr1105",
		"linkedin": "https://www.linkedin.com/in/max-t-marshall"
	},
	"temp": {
		"date": "05/02/2022",
		"song": "Sloom",
		"band": "Of Monsters And Men",
		"status": "busy",
		"current": [
			"website",
			"homelab"
		]
	}
}

var help = "Here is a list of commands you can try:\n" +
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
"------------------------------";

var intro = "Welcome to my website!\n\n" +
"On this page, I have simulated a primitive bash terminal. "+
"Feel free to have a look around.\n" +
'"help" lists commands available to you.\n\n' +
"Assuming you aren't familiar with bash and haven\'t immediately left the page, feel free to have a look in the other tabs in the header.\n\n" +
"Last_Updated: " + info["temp"]["date"] + "\n" +
"Last_Song: "+ info["temp"]["song"] + " - " + info["temp"]["band"] + "\n";
