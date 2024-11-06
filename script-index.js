console.log("hello");

var chosen_rating=0;
var chosen=false;

var button1=document.getElementById("button1");
// button1.addEventListener("click",function () {
//     console.log(button1.innerHTML);
    
// })
button1.addEventListener("click",function () { 
    getRating(button1);
    
})
//use an anonynomus/no name fxn[function (){ <<declare ur fxn here>>}]
//so that your function doesnt automatically run when it's waiting for an eventlistener but
//rather waits until it gets activated by for example,clicking.
document.getElementById("button2").addEventListener("click",function () {
    getRating(document.getElementById("button2"));
    
})
var button3=document.getElementById("button3");
button3.addEventListener("click",function () {
    getRating(button3);
    
})
var button4=document.getElementById("button4");
button4.addEventListener("click",function () {
    getRating(button4);
    
})
var button5=document.getElementById("button5");
button5.addEventListener("click",function () {
    getRating(button5);
    
})
var SubmitBtn=document.getElementById("SubmitBtn");
SubmitBtn.addEventListener("click",function () {
HideGetRating();
    
})
var LightGrey="rgba(149, 158, 172,0.2)";
function getRating(element) {
    // console.log(element);
    if (element ) {
        // && chosen==false
        
        chosen_rating=element.innerHTML;
        console.log(chosen_rating);
        // element.style.backgroundColor="white";

        ShowSelectedRating();
        
    }
}
function ShowSelectedRating() {
    if (chosen_rating==null){
        return;
    }
    // console.log("c fxn here!");
    
    switch (chosen_rating) {
        case "1":
            document.getElementById("button1").style.backgroundColor="white";
            document.getElementById("button2").style.backgroundColor=LightGrey;
            document.getElementById("button3").style.backgroundColor=LightGrey;
            document.getElementById("button4").style.backgroundColor=LightGrey;
            document.getElementById("button5").style.backgroundColor=LightGrey;
            // console.log("Case 1");
            
            break;
       case "2":
        document.getElementById("button1").style.backgroundColor=LightGrey;
        document.getElementById("button2").style.backgroundColor="white";
        document.getElementById("button3").style.backgroundColor=LightGrey;
        document.getElementById("button4").style.backgroundColor=LightGrey;
        document.getElementById("button5").style.backgroundColor=LightGrey;
        break;
        case "3":
            document.getElementById("button1").style.backgroundColor=LightGrey;
            document.getElementById("button2").style.backgroundColor=LightGrey;
            document.getElementById("button3").style.backgroundColor="white";
            document.getElementById("button4").style.backgroundColor=LightGrey;
            document.getElementById("button5").style.backgroundColor=LightGrey;
        break;
        case "4":
            document.getElementById("button1").style.backgroundColor=LightGrey;
            document.getElementById("button2").style.backgroundColor=LightGrey;
            document.getElementById("button3").style.backgroundColor=LightGrey;
            document.getElementById("button4").style.backgroundColor="white";
            document.getElementById("button5").style.backgroundColor=LightGrey;
            break;
        case "5":
            document.getElementById("button1").style.backgroundColor=LightGrey;
            document.getElementById("button2").style.backgroundColor=LightGrey;
            document.getElementById("button3").style.backgroundColor=LightGrey;
            document.getElementById("button4").style.backgroundColor=LightGrey;
            document.getElementById("button5").style.backgroundColor="white";
        break;
        
       
        default:
           
            break;
       }
}
ShowSelectedRating();
function HideGetRating() {
    if(chosen_rating==null ||chosen_rating==0){
        return;
    }
    // chosen=true;
    var cardThanks=document.getElementsByClassName("cardThankYou");
    var cardRating =document.getElementsByClassName("cardRating");
    // cardThanks.forEach(element => {
    //     element.getElementById
        
    // });
    for (let index = 0; index < cardThanks.length; index++) {
        const element = cardThanks[index];
        element.style.display="flex";
        
    }
    document.getElementById("rating--Final").innerText=chosen_rating.toString();
    for (let index = 0; index < cardRating.length; index++) {
        const element = cardRating[index];
        element.style.display="none";
        
    
 }
    
}