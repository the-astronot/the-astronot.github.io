var path = [''];
var welcome = 'Hello there\nWould you like to play a game?';
var curr_dir = dir[''];
var user = "guest";

var term = $('#terminal').terminal({
		set(new_path) {
			path = new_path;
			Promise.resolve().then(() => console.log($('.terminal-output').html().replace(/<[^>]+>/g, '')));
		},
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
			} else {
				if (step in curr_dir) {
					path.push(step);
					curr_dir = curr_dir[step];
				} else {
					this.echo("cd: "+step+" No such file or directory")
				}
			}
		},
		ls(folder="") {
			if (folder === "") {
				ls(curr_dir);
			} else {
				if (Object.keys(curr_dir).indexOf(folder) != -1) {
					ls(curr_dir[folder]);
				} else {
					this.echo("ls: "+folder+": No such file or directory")
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
			this.echo("Experience")
		},
		skills() {

		},
		hobbies() {
			this.echo("My hobbies include:");
			hobbies = info["hobbies"];
			for(var i=0; i<hobbies.length; i++) {
				this.echo("  - "+hobbies[i]);
			}
		},
		status() {
			this.echo("status: "+info["temp"]["status"])
		},
		current() {
			this.echo("current projects include:")
			for (var i=0; i<info["temp"]["current"].length; i++) {
				this.echo("- "+info["temp"]["current"][i]);
			}
		},
		contact() {
			var methods = Object.keys(info["contact"]);
			for (var i=0; i<methods.length; i++) {
				term.echo(methods[i]+": "+info["contact"][methods[i]])
			}
		},
		hack() {
			user = "root";
			term.typing("echo",20,color("green","hacking.start()\n\ngenerating multi-byte ssd 16-megan-pixel mpv4a transcoding...\n\ninjecting a.i. dhcp transmitters...\n\ndisconnecting 1080p PPPoE pixels...\n\nrebooting optical capacitors...\n\nnavigating backend protocols...\n\ndropping sql tables...\n\nreaddressing css makefiles...\n\ncompressing firewall...\n\ndeleting java from the mainframe...\n\nsynthesizing  xyz-raid-1+5=6 arrays...\n\noverriding y2k ports...\n\ncalculating bluetooth circuit transistor...\n\ndownloading more ram...\n\nopen-sourcing the api botnets...\n\nbaking raspberry pi...\n\nparsing visual network...\n"),function(){term.typing("echo",1,color("green","CREDENTIALS ACCEPTED\n\nWELCOME, JORMUNGANDR1105\n"),function(){});});
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

function set_path(new_path) {
	path = new_path;
	Promise.resolve().then(() => console.log($('.terminal-output').html().replace(/<[^>]+>/g, '')));
}

function path_to_string() {
	var strpath = "";
	for (var i=0; i<path.length; i++) {
		strpath = strpath + path[i] + "/"
	}
	return strpath;
}

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

// Fixing terminal height runnign away
$("#terminal").css("height",$(window).height()*.75);