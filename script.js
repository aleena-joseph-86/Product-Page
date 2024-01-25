const btns = document.getElementsByClassName("btn");
const image = document.getElementById("initailimage");

btns[0].onclick=function(){
    image.src="image1.png";
    for(let btn of btns){
        btn.classList.remove("selected");
    }
    this.classList.add("selected");
}

btns[1].onclick=function(){
    image.src="image2.png";
    for(let btn of btns){
        btn.classList.remove("selected");
    }
    this.classList.add("selected");
}

btns[2].onclick=function(){
    image.src="image3.png";
    for(let btn of btns){
        btn.classList.remove("selected");
    }
    this.classList.add("selected");
}

function alertmsg(){
    alert("sumbitted successfully");
}