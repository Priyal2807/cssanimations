const Benedict = ['The Abdominable Bride','The Child In Time','Doctor Strange','Twelve years a slave','Starter for 10','The Fifth estate','Star Trek Into Darkness','The Imitation Game','Sherlock','The Hollow Crown','Atonement','The Current War'];
function strip(movieName){
  return movieName.replace(/^(a |the |an )/i, '').trim();
}



const sortbenedict = Benedict.sort((a,b)=> strip(a)>strip(b)?1:-1);
/*  if(strip(a)>strip(b)){
    return 1;
  }
  else {
    return -1;
  }*/
document.querySelector('#Benedict').innerHTML =
sortbenedict
.map(ben => `<li>${ben}</li>`)
.join('');
console.log(sortbenedict);
