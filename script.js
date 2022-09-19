function calcular() {
  var n1 = Number(document.getElementById("n1").value)
  var n2 = Number(document.getElementById("n2").value)
  var n3 = Number(document.getElementById("n3").value)
  var n4 = Number(document.getElementById("n4").value)
  var n5 = Number(document.getElementById("n5").value)

  var conta1 = n1 * n1 
  var conta2 = n2 * n2
  var conta3 = n3 * n3
  var conta4 = n4 * n4
  var conta5 = n5 * n5

  document.getElementById('resultado').innerHTML = `<p>Quadrado do primerio número ${conta1} <br> Quadrado do segundo número ${conta2} <br> Quadrado do terceiro número ${conta3} <br> Quadrado do quarto número ${conta4} <br> Quadrado do quinto número ${conta5}</p>`
}