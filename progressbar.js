function move()
{
  var bar=document.getElementById("myBar");
  var width=1;
  var id=setInterval(frame,10);
  function frame{
    if(width>=100){clearInterval(id);}
    else{ width++;
      bar.style.width=width+'%';}
  }
}
