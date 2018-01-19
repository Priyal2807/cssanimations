const Benedict = ['The Abdominable Bride','The Child In Time','Doctor Strange','Twelve years a slave','Starter for 10','The Fifth estate','Star Trek Into Darkness','The Imitation Game','Sherlock','The Hollow Crown','Atonement','The Cuurent War'];
const sortbenedict = Benedict.sort(function(a,b){
  if(a>b){
    return 1;
  }
  else {
    return -1;
  }
})
console.log(sortbenedict);
