const y=[];

function Ekle(){
    var a=document.getElementById("yy").value;
    y.push(a+"<br>");
    var a=document.getElementById("pp").innerHTML=y;
}
function Sil(){
    
    y.pop();
    document.getElementById("pp").innerHTML=y;
}
