var newItemCounter = 1;
var ourList = document.getElementById('our-list');
var btn = document.getElementById('btn');
var ourHeadline = document.getElementById('our-headline');
var listItems = document.getElementById('our-list').getElementsByTagName('li');

ourList.addEventListener("click", activateItem);


function activateItem(e) {
	if (e.target.nodeName == 'LI') {
		ourHeadline.innerHTML = e.target.innerHTML;
		for (var i = 0; i < e.target.parentNode.children.length; i++) {
			e.target.parentNode.children[i].classList.remove('active');
		}
		e.target.classList.add('active');
	}
	
}

btn.addEventListener('click', createNewItem);

function createNewItem(){
	ourList.innerHTML += '<li>Guest ' + newItemCounter + '</li>';
	newItemCounter++;
}


var x = document.getElementById("myVideo");

function getPlaySpeed() { 
    alert(x.playbackRate);
} 

function setPlaySpeed() { 
    x.playbackRate = 0.2;
} 