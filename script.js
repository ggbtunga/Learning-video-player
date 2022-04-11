
let video = document.getElementById("vid1");

function retroceder(){
    video.currentTime -= 15;
}

function pular(){
    video.currentTime +=15;  //unity in seconds
}

function diminuir_vel(){
    video.playbackRate -= 0.1; //change video velocity 
}

function aumentar_vel(){
    video.playbackRate += 0.1;
}

function pausar(){
    video.pause(); 
}

function play(){
    video.play();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}
