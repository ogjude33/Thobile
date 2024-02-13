const n = document.querySelector('.n')
const y = document.querySelector('.y')

let x = 2
let z= -2
let j = x*z
let b =+ 2



y.addEventListener("click", function() {
      // Replace 123456789 with the recipient's phone number
      var phoneNumber = "+27767076862";
      
      // You can also include a message using the "text" parameter
      var message = "Ok .. you have won my heart!! ";
      
      // Generate the WhatsApp URL
      var whatsappUrl = "https://wa.me/" + phoneNumber + "/?text=" + encodeURIComponent(message);
      
      // Open WhatsApp in a new tab/window
      window.open(whatsappUrl, '_blank');
    });



function grw (){
  
  
    
    
if (b<=1){
  
    n.innerHTML = 'come on ..it will be fun'}
if(b<=2){
    n.innerHTML = 'You will love it. I promise'}
  
  if (true){
    x+=5
    let k = x
    y.style.fontSize = k+'8px'
    
    let j = z*x
    n.style.width = j+'8px'
        console.log(x)
    
    b+=1
  }
if (x <= 7){
  
    n.innerHTML = 'NO'}
if (x <= 12){
  
    n.innerHTML = 'Come on it will be fun'}
if(x <= 17){
    n.innerHTML = 'You will love it. I promise'}
  
  if (x<=22){
  
    n.innerHTML = 'come on it will be fun'}
  if (x<=27){
  
    n.innerHTML = 'pinky promise'}
    
  if (x<=32){
  
    n.innerHTML = 'Please++'}
  
}



n.addEventListener('touchstart',grw)
