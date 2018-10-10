// slowing down her video
var x = document.getElementById("myVideo");

function getPlaySpeed() { 
    alert(x.playbackRate);
} 

function setPlaySpeed() { 
    x.playbackRate = 0.2;
} 


function goSurf() {
	var doYou = prompt('do you live near the ocean?');
	var answer = doYou.toLowerCase();
	if(answer === 'yes'){
		alert('go surf then!');
	}else{
		alert('move to somwhere that you can surf dude!');
	}
}

document.getElementById("clickOne").addEventListener("click", changeText);

function changeText() {
    document.getElementById("clickOne").innerHTML = "YOU CLICKED ME!";
};

document.getElementById('clickedTwo').addEventListener('click', doNotTouch);

function doNotTouch(){
	alert('Do not click the pictures!');
};

var d = new Date();
document.getElementById("now").innerHTML = d;






// this will show all@
// for (movie of movies){
// 	console.log(movie);
// } 