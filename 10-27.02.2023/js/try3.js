function Val(){
    let x=document.getElementById("in1").value;
    let y=document.getElementById("pid");
    y.innerHTML="";
    y.style.color="red";
    try{
        if(x=="") throw "Input Boş Olamaz!!!";
        if(x<5) throw "5 sayısından küçük olamaz!!!";
        if(x>10) throw "10 sayısından büyük olamaz!!!";
        if(isNaN(x)) throw "Sayı girmeniz gerekiyor!!!";
        if(x>=5 && x<=10) {
            y.innerHTML="Doğru girişi sağladınız";
            y.style.color="green";
        }
    }catch(e){
        y.innerHTML=e;
    }
}