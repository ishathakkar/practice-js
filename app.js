function enter(){
    var a=document.getElementById("four");
    var b=document.createElement("li");
    b.innerText=a.value;
    document.getElementById("finallist").appendChild(b);
}
