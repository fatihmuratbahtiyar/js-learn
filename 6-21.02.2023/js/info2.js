function DemoKontrol(){
    var x=document.getElementById("demo").value;
    switch(x){
        case "155" :
            document.getElementById("h1").innerHTML="Pazartesi";
            break;
            case "2" :
            document.getElementById("h1").innerHTML="Salı";
            break;
    }
}