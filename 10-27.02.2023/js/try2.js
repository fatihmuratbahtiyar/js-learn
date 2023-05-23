
function SayiTest(){
    try{
        var x=parseInt(document.getElementById("in1").value);
        var z=parseInt(document.getElementById("in2").value);
        var y=x/z;
        document.getElementById("hid").innerHTML=y;
       

    }catch(a){
        document.getElementById("hid").innerHTML=a;
    }
    
}