var t = Math.floor((Math.random()*100)+1);
document.getElementById("dd").innerHTML="Sonuç"+t;
var count=0;
function Kontrol(){
    var i=document.getElementById("in1").value;
    if(i<t){
        count++;
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tahmin Sayınızı Büyütün : ";
    } else if(i>t){
        count++
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tahmin Sayınızı Küçültün : ";

    }else if(i==t){
        count++;
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tebrikler  : ";

    }

}