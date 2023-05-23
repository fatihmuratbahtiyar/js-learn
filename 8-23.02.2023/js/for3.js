document.write("<table border='50'><tr>");
for(var i=1;i<=12;i++){
    document.write("<td>");
    for(var y=1;y<=12;y++){
        document.write(i+"*"+y+"="+i*y+"<br/>");
    }
    document.write("</td>");
}
document.write("</tr></table>");