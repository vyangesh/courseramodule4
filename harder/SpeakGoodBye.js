(function(Window){
var byeSpeaker ={};

var speakWord = "Good Bye";

byeSpeaker.speak=function(name) {
  console.log(speakWord + " " + name);
};
	Window.byeSpeaker=byeSpeaker;
})(window);
