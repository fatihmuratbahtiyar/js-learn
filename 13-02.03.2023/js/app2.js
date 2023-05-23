function TagApp(){
    var x=document.getElementsByTagName("h3");
    var y=x.length;
    
    for(var i=0;i<y;i++){
        x[i].innerHTML="Test"+" "+i;
    }
}