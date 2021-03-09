function name_pers(){
yourname = prompt("Введите сюда свое имя:");
massage  = "<div class='name'> Ваше имя "+yourname+"</div>";
var content = document.querySelector(".content");
content.innerHTML = massage;
}
function rename(){
	if(confirm("Начать заново?")){

	if(confirm("Не надоело?")){
		name_pers();
        setTimeout(rename,2000);
	}
	else {
		alert("Ну и правильно!");
	}
}
}
name_pers();
setTimeout(rename,2000);
