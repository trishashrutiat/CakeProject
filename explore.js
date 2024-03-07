const fp=document.querySelector(".fprice");
const flav=document.querySelector(".fflavour");
const tp=document.querySelector(".ftype");
const fn=document.querySelector(".fin");
const shp=document.querySelector(".fshape");
const fw=document.querySelector(".fweight");
const c1=document.querySelector(".c1");
const c2=document.querySelector(".c2");
const c3=document.querySelector(".c3");
const c4=document.querySelector(".c4");
const c5=document.querySelector(".c5");
const c6=document.querySelector(".c6");
const b1=document.querySelector(".b1");
const b2=document.querySelector(".b2");
const b3=document.querySelector(".b3");
const b4=document.querySelector(".b4");
const b5=document.querySelector(".b5");
const b6=document.querySelector(".b6");
var searche=document.getElementById("search")
var itemscontainer=document.getElementById("items")
var itemlist=itemscontainer.querySelectorAll("div")

searche.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<itemlist.length;count=count+1){
        var itemname=itemlist[count].querySelector("h2").textContent
        if(itemname.toUpperCase().indexOf(enteredValue)<0){
            itemlist[count].style.display="none"
        }
        else{
            itemlist[count].style.display="block"
        }
    }
})
function price(){
    fp.style.display="block";
    b1.style.display="none";
}
function flavour(){
    flav.style.display="block";
    b2.style.display="none";
}
function typee(){
    tp.style.display="block";
    b3.style.display="none";
}
function ing(){
    fn.style.display="block";
    b4.style.display="none";
}
function shape(){
    shp.style.display="block";
    b5.style.display="none";
}
function weight(){
    fw.style.display="block";
    b6.style.display="none";
}
function cprice(){
    fw.style.display="none";
    b6.style.display="block";
}
