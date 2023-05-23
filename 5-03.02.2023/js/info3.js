function LoginKontrol(){
    var e=document.getElementById("mail").value;
    var s=document.getElementById("sifre").value;
    if(e=="info@gmail.com" && s=="12345"){
        document.getElementById("demo").innerHTML="Giriş Başarılı ";
    }else{
        alert("Bilgilerinizi KOntrol ediniz");
    }
}