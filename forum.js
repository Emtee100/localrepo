for(var i=0;i<document.querySelectorAll(".topic").length;i++){
    document.querySelectorAll('.topic')[i].addEventListener('mouseover',function(){
        document.querySelector('.topic').classList.toggle('hovered-topic')
    })
}