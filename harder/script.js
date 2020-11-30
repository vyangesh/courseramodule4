(function(globe){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var nam in names) {
	firstLetter=(names[nam].charAt(0)).toLowerCase();
	if (/* fill in condition here */firstLetter==='j') {
		byeSpeaker.speak(names[nam]);
	} 
	else {
		helloSpeaker.speak(names[nam]);
		}
}
	})(window);
