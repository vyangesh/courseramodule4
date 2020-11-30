(function(Window){
var helloSpeaker ={};

var speakWord = "Hello";


helloSpeaker.speak=function (name) {
  console.log(speakWord + " " + name);
};
	Window.helloSpeaker=helloSpeaker;
})(window);
