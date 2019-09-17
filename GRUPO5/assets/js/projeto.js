document.addEventListener('DOMContentLoaded', function() {
	let parametro = coDesExtract()
	let valor = parametro["key"]
	let variavel= parametro["x"]

let db = coDesConnect('https://canario-957b5.firebaseio.com/')

  db.download('/portfolio/auxiio', function(data) {
    let context = data[valor]['projetos'][valor]
    coDesReplace('.container3', context)



  })
})
