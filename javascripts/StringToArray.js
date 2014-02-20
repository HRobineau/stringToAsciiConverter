/** 
		Here's a function that turn a string in parameter to an ascii string
		-->
					 	 _   _   _____   _       _       _____
						| |_| | |  __ | | |     | |     |  _  |
			hello ---->	|  _  | |  __|  | |___  | |___  | |_| |
						|_| |_| |_____| |_____| |_____| |_____|


*/
asciiRef = {
	" " : "                            ",
	"a" : "   _     / \\   / _ \\ /_/ \\_\\",
	"b" : " ___   |___|  |    \\ |____/ ",
	"c" : " _____ |  ___|| |___ |_____|",
	"d" : " ____  |  _ \\ | |_| ||____/ ",
	"e" : " _____ |  __ ||  __| |_____|",
	"f" : " _____ |  __ ||  __| |__|   ",
	"g" : " _____ |  __ || |_ \\ |_____|",
	"h" : " _   _ | |_| ||  _  ||_| |_|",
	"i" : " _____ |_   _| _| |_ |_____|",
	"j" : " _____ |_   _| _| |  |___|  ",
	"k" : "",
	"l" : " _     | |    | |___ |_____|",
	"m" : " _   _ | \\ / ||  v  ||_| |_|",
	"n" : " _   _ | \\ | || |\\| ||_| \\_|",
	"o" : " _____ |  _  || |_| ||_____|",
	"p" : " _____ |  _  ||  ___||_|    ",
	"q" : " _____ |     ||  O  ||___\\_\\",
	"r" : " _____ |  _  ||     ||__|\\_\\",
	"s" : " _____ |  ___||_____  _____|",
	"t" : " _____ |_   _|  | |    |_|  ",
	"u" : " _   _ | | | || |_| ||_____|",
	"v" : " _   _ | | | |\\ \\ / / \\___/ ",
	"w" : " _   _ | | | ||  A  ||_/ \\_|",
	"x" : " _  _  \\ \\/ /  \\  /  /_/\\_\\ ",
	"y" : " _  _  \\ \\/ /  \\  /    \\_\\  ",
	"z" : " _____ |__  /  /   / |_____|"
};
			/* on recupere les clef du tableau asciiref*/
			var dictionnaryKey = new Array();
		      	for (key in asciiRef)
		    	{
		          dictionnaryKey.push(key);
		       	}

		/* This function return in console the ascii equivalent for the string paramater "chaine" */
		function prettyPrint(ascii){
			console.log(buildAsciiWord(ascii));
			$('#output').text(buildAsciiWord(ascii));
			/*document.getElementById("output").innerHTML=buildAsciiWord(ascii);*/
		}

		/* This function return the build letter in ascii from asciiRef */

		function buildAsciiChar(aLetter){
			var lettre = asciiRef2[aLetter];

			var lettreAscii = lettre.substring(0,7)+"\n"+lettre.substring(7,14)+"\n"+lettre.substring(14,21)+"\n"+lettre.substring(21,28);
			console.log(lettreAscii);
			return lettreAscii;

		}

		/* This function return the build word in ascii from asciiRef */
		function buildAsciiWord(aWord){
			var mySplitWord = aWord.split("");
			var wordLength = aWord.length;
			var myBuiltWord = "";
			for(var i=0;i<aWord.length;i++){
				myBuiltWord += asciiRef[mySplitWord[i]].substring(0,7)+"  ";
			}
			myBuiltWord+= "\n";
			for(var i=0;i<aWord.length;i++){
				myBuiltWord += asciiRef[mySplitWord[i]].substring(7,14)+"  ";
			}
			myBuiltWord+= "\n";
			for(var i=0;i<aWord.length;i++){
				myBuiltWord += asciiRef[mySplitWord[i]].substring(14,21)+"  ";
			}
			myBuiltWord+= "\n";
			for(var i=0;i<aWord.length;i++){
				myBuiltWord += asciiRef[mySplitWord[i]].substring(21,28)+"  ";
			}
			return myBuiltWord;
		}

		function checkInput(texte){
			var exist = true;
			texte.toLowerCase().split("").forEach(function(element,index){
				if(dictionnaryKey.indexOf(element) == -1){
					exist = false;
				}
			});
			if(exist){
				$('#message').text("");	
				prettyPrint(texte.toLowerCase());
			}else{
				$('#message').text("Unsupported character");	
			}
		}
