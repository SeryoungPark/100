
var arr = ["person1.html",
"person2.html", "person3.html",
"person4.html","person5.html","person6.html","person7.html","person8.html"];

function randSite(){
        location.href = "" + arr[Math.floor (Math.random()*arr.length)];
}
