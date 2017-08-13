function checkSos(sos){
    var count = 1;
    var check = "SOS";
    //document.write(sos[0]);
    for(var i = 0; i < sos.length; i++){
        
        if(sos[i] != check[i%3]){
            count++;
        }
    }
    return count;
}
document.write(checkSos("SOSSPSSQSSOR"));