var s=["1.Soru","2.Soru","3.Soru"];
var c=["1.Cevap","2.Cevap","3.Cevap"];
var k=0;
document.getElementById("h5").innerHTML=s[k];

function Cevap(){
    document.getElementById("pp").innerHTML=c[k];
}
function Ileri(){
    if(k==s.length-1){
        alert("Sorular bitti...")
    }else{k++;
        document.getElementById("h5").innerHTML=s[k];
        document.getElementById("pp").innerHTML="";}
    
}
function Geri(){
    if(k==s.length-3){
        alert("geriye gidemezsiniz...")
    }else{k--;
        document.getElementById("h5").innerHTML=s[k];
        document.getElementById("pp").innerHTML="";}
}
