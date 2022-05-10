var path = [''];
var welcome = 'Hello there\nWould you like to play a game?';
var curr_dir = dir[''];
var user = "guest";

var term = $('#terminal').terminal({
		/*********************************************************
			Basic commands
		*********************************************************/
		cd(step="") {
			if (step === "") {
				path = [''];
				curr_dir = dir[''];
			} else if (step === "..") {
				path.pop();
				curr_dir = dir[''];
				for (var i=1; i<path.length; i++) {
					curr_dir = curr_dir[path[i]];
				}
				if (path.length === 0) {path.push("");}
			} else {
				path_cpy = path.valueOf();
				dir_cpy = curr_dir.valueOf();
				var steps = split_path(step);
				var failed = false;
				for (var i=0; i<steps.length; i++) {
					if (steps[i] in curr_dir) {
						path.push(steps[i]);
						curr_dir = curr_dir[steps[i]];
					} else if (steps[i] === "..") {
						path.pop();
						curr_dir = dir[''];
						for (var j=1; j<path.length; j++) {
							curr_dir = curr_dir[path[j]];
						}
						if (path.length === 0) {path.push("");}
				  } else {
						failed = true;
						break;
					}
				}
				if (failed) {
					this.echo("cd: "+step+" No such file or directory");
					path = path_cpy.valueOf();
					curr_dir = dir_cpy.valueOf();
				}
			}
		},
		ls(folder="") {
			if (folder === "") {
				ls(curr_dir);
			} else {
				var dir_cpy = curr_dir.valueOf();
				var path_cpy = path.valueOf();
				var folders = split_path(folder);
				var failed = false;
				for (var i=0; i<folders.length; i++) {
					if (Object.keys(dir_cpy).indexOf(folders[i]) != -1) {
						dir_cpy = dir_cpy[folders[i]];
						path_cpy.push(folders[i]);
					} else if (folders[i] == "..") {
						path_cpy.pop();
						dir_cpy = dir[''];
						for (var j=1; j<path_cpy.length; j++) {
							dir_cpy = dir_cpy[path_cpy[j]];
						}
						if (path_cpy.length === 0) {path_cpy.push("");}
					}else {
						failed = true;
						break;
					}
				}
				if (failed) {
					this.echo("ls: "+folder+": No such file or directory");
				} else {
					ls(dir_cpy);
				}
			}
		},
		cat(filename) {
			if (Array.isArray(curr_dir)) {
				if (curr_dir.indexOf(filename) != -1) {
					try_cat("_posts",filename);
					try_cat("projects",filename);
					try_cat("random",filename);
					return;
				}
			}
			this.echo("cat: "+filename+": No such file or directory");		
		},
		help() {
			this.echo(color("white",help));
		},
		/***********************************************************
			Special commands
		***********************************************************/
		education() {
			var schools = Object.keys(info["education"])
			for (var i=0; i<schools.length; i++) {
				this.echo(color("white",schools[i]+":"));
				var degrees = info["education"][schools[i]];
				for (var j=0; j<degrees.length; j++) {
					this.echo(color("white","\t"+degrees[j]));
				}
			}
		},
		experience() {
			var exps = Object.keys(info["experience"]);
			for (var i=0; i<exps.length; i++) {
				var exp = info["experience"][exps[i]];
				wcho(exps[i]+":");
				wcho(" - position: "+exp["title"]);
				wcho(" - date: "+exp["date"]);
			}
		},
		skills() {
			var skills = Object.keys(info["skills"]);
			for (var i=0; i<skills.length; i++) {
				wcho(skills[i]+":");
				var degrees = info["skills"][skills[i]];
				for (var j=0; j<degrees.length; j++) {
					wcho(" - "+degrees[j]);
				}
			}
		},
		hobbies() {
			wcho("My hobbies include:");
			hobbies = info["hobbies"];
			for(var i=0; i<hobbies.length; i++) {
				wcho("  - "+hobbies[i]);
			}
		},
		status() {
			wcho("status: "+info["temp"]["status"])
		},
		current() {
			wcho("current projects include:")
			for (var i=0; i<info["temp"]["current"].length; i++) {
				wcho("- "+info["temp"]["current"][i]);
			}
		},
		contact() {
			var methods = Object.keys(info["contact"]);
			for (var i=0; i<methods.length; i++) {
				wcho(methods[i]+": "+info["contact"][methods[i]])
			}
		},
		/**************************************************************
		 Bonus Unnecessary Shit
		**************************************************************/
		pwd() {
			this.echo(path_to_string());
		},
		hostname() {
			this.echo("jormungandr1105.com");
		},
		sudo() {
			if (user != "root") {
				this.echo(user+" is not in the sudoers file. This incident will be reported.")
			} else {
				this.echo("Sudo not required by root.")
			}
		},
		su(username="") {
			if (username === user) {return;}
			else if (username === "") {this.echo("No user entered.");return;}
			this.set_mask(true).read("Enter password for "+username+": ").then(password => {
				term.set_mask(false);
				if (username === "root") {
					if (password === "here_there_be_dragons") {
						user = "root";
					} else {
						this.echo("Incorrect Password. This incident will be reported.")
					}
				} else {
					user = username;
				}
			});
		},
		hack() {
			user = "root";
			term.invoke_key("CTRL+L");
			term.typing("echo",20,color("green","hacking.start()\n\ngenerating multi-byte ssd 16-megan-pixel mpv4a transcoding...\n\ninjecting a.i. dhcp transmitters...\n\ndisconnecting 1080p PPPoE pixels...\n\nrebooting optical capacitors...\n\ndropping sql tables...\n\nreaddressing css makefiles...\n\ncompressing firewall...\n\ndeleting java from the mainframe...\n\nsynthesizing xyz-raid-1+5=6 arrays...\n\noverriding y2k ports...\n\ndownloading more ram...\n\nopen-sourcing the api botnets...\n\nbaking raspberry pi...\n\nparsing visual network...\n"),function(){term.typing("echo",1,color("green","CREDENTIALS ACCEPTED\n\nWELCOME, JORMUNGANDR1105\n"),function(){});});
		}
}, {
		greetings: false,
		prompt() {
				return `┌──[${color('green', user+'@jormungandr1105.com')}:${color('violet', path_to_string(path))}]\n└───\$ `;
		},
		checkArity: false,
		onInit: function() {
			this.typing('echo',20, intro, function() { });
		}
});

function color(name, string) {
	var colors = {
			black:  '#000',
			blue:   '#55f',
			green:  '#4d4',
			grey:   '#999',
			red:    '#A00',
			yellow: '#FF5',
			violet: '#8b05ff',
			white:  '#fff'
	}
	if (colors[name]) {
			return '[[;' + colors[name] + ';]' + string + ']';
	} else {
			return string;
	}
}

// Converts a path to a string
function path_to_string() {
	var strpath = "";
	for (var i=0; i<path.length; i++) {
		strpath = strpath + path[i] + "/"
	}
	return strpath;
}

// Try opening file
function try_cat(folder,filename) {
	$.ajax({
		url: "/"+folder+"/"+filename+".html",
		method: "HEAD",
		statusCode: {
			200: function() {
				window.open("/"+folder+"/"+filename+".html");
				return true;
			},
			404: function() {
				return false;
			}
		}
	});
}

function ls(dir) {
	if (Array.isArray(dir)) {
		for(var i=0; i<dir.length; i++) {
			term.echo(color("green","- "+dir[i]));
		}
	} else {
		var files = Object.keys(dir);
		for (var i=0; i<files.length; i++ ) {
			if (files[i] instanceof Array) {
				for (var j=0; j<files[i].length; j++) {
					term.echo(color('green',"- "+files[i][j]));
				}
			} else {
			term.echo(color('violet',files[i]));
			}
		}
	}
}

// Fixing terminal height running away
$("#terminal").css("height",$(window).height()*.70);

// Echo, but white colored
function wcho(string) {
	term.echo(color("white",string));
}

// Splits path
function split_path(path) {
	return path.split("/");
}
