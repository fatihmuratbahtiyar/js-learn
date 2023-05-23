function ShowTime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var durum="AM";
        if(h>=12){
            durum="PM";
        }
    var time=(h-12)+":"+m+":"+s+" "+durum;
    document.getElementById("demo").innerHTML=time;
    setTimeout(ShowTime,1000);
}
ShowTime();