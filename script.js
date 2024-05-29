
var countDownDate = new Date("Oct 10, 2024 11:7:55").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var slide=0;

function slideNext(){
  slide+=1;

  if(slide==1){
    document.querySelector('#img2').classList.remove('d-none');
    document.querySelector('#img1').classList.add('d-none');    
  }
  if(slide==2){
    document.querySelector('#img3').classList.remove('d-none');
    document.querySelector('#img2').classList.add('d-none');
  }
  if(slide==3){
    document.querySelector('#img4').classList.remove('d-none');
    document.querySelector('#img3').classList.add('d-none');   
  }
  if(slide==4){
    document.querySelector('#img1').classList.remove('d-none');
    document.querySelector('#img4').classList.add('d-none');
    slide=0;
  }
}

function slidePre(){
  slide-=1;

  if(slide==0){
    document.querySelector('#img2').classList.add('d-none');
    document.querySelector('#img1').classList.remove('d-none');    
  }
  if(slide==1){
    document.querySelector('#img3').classList.add('d-none');
    document.querySelector('#img2').classList.remove('d-none');
  }
  if(slide==2){
    document.querySelector('#img4').classList.add('d-none');
    document.querySelector('#img3').classList.remove('d-none');   
  }
  if(slide==-1){
    document.querySelector('#img1').classList.add('d-none');
    document.querySelector('#img4').classList.remove('d-none');
    slide=3;
  }
}