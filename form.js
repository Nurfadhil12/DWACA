document.getElementById("masuk").addEventListener('click',function(){
document.querySelector('.modal-login').style.display = 'flex';
document.querySelector("body").style.overflowY='hidden';
});

document.querySelector('.close').addEventListener('click',function(){
	document.querySelector('.modal-login').style.display = 'none';
});