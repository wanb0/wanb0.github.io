var flag=true;
function shou_menu(){
    var menu1=document.getElementById("menu1");
    if(flag){
        menu1.style.display="block";
        flag=false;
    }else{
        menu1.style.display="none";
        flag=true;
    }
   
}
function shou_menu1(){
    var menu1=document.getElementById("menu1");
    menu1.style.display="none";
    flag=true;
}