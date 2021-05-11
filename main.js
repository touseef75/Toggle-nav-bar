$(function(){
    $("span").click(function(){
        $("nav").toggle(1500);
        $("#color").toggle(1000);
        $("#blue").toggle(800);
        $("#yellow").toggle(600);
        $("#audio").play();
    })
    let audio = document.getElementById("audio")
    let but = document.querySelector("span");
    but.addEventListener("click",function(){
        audio.play();
    })
    
})
// $("nav").click(function(){
    //     $("nav").css("background-color","pink")

    //     // let a = $("nav").html();
    //     // console.log(a)
    // })
    // $("nav").mouseenter(function(){
    //     $("nav").css("background-color","yellow")

    //     // let a = $("nav").html();
    //     // console.log(a)
    // })



















































































// let main = document.getElementById("cont")
// // let conti = document.getElementsByClassName("container")
// let cli = document.querySelector("button")

