function buscarPrimos() {
  
  
  var input = parseInt(document.getElementById("formulario").input.value);
  var worker = new Worker("worker.js");
  worker.postMessage(input);
  worker.onmessage = function(event) {

    document.getElementById('result').innerHTML = event.data;
  }
  
}

