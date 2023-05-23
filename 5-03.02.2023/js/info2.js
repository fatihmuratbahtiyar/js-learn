function Topla(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("hh").innerHTML=Number(x)+Number(y);
}
function Cikar(){
    var a=parseInt(document.getElementById("in1").value);
    var b=parseInt(document.getElementById("in2").value);
    document.getElementById("hh").innerHTML=a-b;
}
function Carp(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("hh").innerHTML=Number(x)*Number(y);
}
function Bol(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("hh").innerHTML=Number(x)/Number(y);
}