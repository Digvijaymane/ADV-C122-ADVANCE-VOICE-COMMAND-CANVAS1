x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + "Apples drawn";
    draw_apple = "apple.jpg";
  }
  if(draw_oraange == "set")
  {
    document.getElementById("status").innerHTML = to_number + "Orange drawn";
    draw_orange = "=oraange.jpg";
  }
  if(draw_bannana == "set")
  {
    document.getElementById("status").innerHTML = to_number + "Bannana drawn";
    draw_bannana = "bannana.jpg";
  }
  if(draw_strawberry == "set")
  {
    document.getElementById("status").innerHTML = to_number + "Strawberry drawn";
    draw_strawberry = "strawberry.jpg";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}