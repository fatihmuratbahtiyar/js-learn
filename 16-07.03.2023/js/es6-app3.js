function ToplaES5(){
    var x=Number(document.getElementById("in1").value);
    var y=Number(document.getElementById("in2").value);
    var result=Sum(x,y);
    document.getElementById("demo").innerHTML=result;
}

function Sum(a,b){
    return a+b;
}

function ToplaES6(){
    var d=Number(document.getElementById("in1").value);
    var c=Number(document.getElementById("in2").value);
    var s=(f,t)=>{return f+t};
    document.getElementById("demo").innerHTML=s(d,c);
}