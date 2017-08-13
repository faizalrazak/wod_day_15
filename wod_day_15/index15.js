function sos(sosMessage){
  var real = /[^SOS]/g;
  var result = sosMessage.match(real);
  
  return result.length;
}
document.write(sos("SOSSPSSQSSOR"));