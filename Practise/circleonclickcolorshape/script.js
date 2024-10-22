  let body = document.querySelector("body");
  document.addEventListener("click", function(event){
  var shape = document.createElement('div');
  shape.className = "circle";
  console.log(shape);
  shape.style.left=event.clientX+"px";
  shape.style.top=event.clientY+"px";
  document.body.appendChild(shape);
  setInterval(random,500);
  function random(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);  
        shape.style.backgroundColor = color;  
   }
   setTimeout(expand,2000);
   function expand(){
    shape.style.width=100+"px";
    shape.style.height=100+"px";
   }

   setTimeout(disappear,10000);
   function disappear(){
    document.body.removeChild(shape);
   }
});