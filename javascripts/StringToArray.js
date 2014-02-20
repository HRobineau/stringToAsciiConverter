/** 
		Here's a function that turn a string in parameter to an ascii string
		-->
					 	 _   _   _____   _       _       _____
						| |_| | |  __ | | |     | |     |  _  |
			hello ---->	|  _  | |  __|  | |___  | |___  | |_| |
						|_| |_| |_____| |_____| |_____| |_____|


*/


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
			for(var j=1;j<5;j++){
				for(var i=0;i<aWord.length;i++){
					myBuiltWord += asciiRef[mySplitWord[i]].substring((j-1)*7,j*7)+"  ";
				}
				myBuiltWord+= "\n";
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
