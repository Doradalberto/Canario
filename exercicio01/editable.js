let history = []


function add(total, number) {
	history.push(number)

	let prev = getValue(total) /*Valor atual do visor*/

	let curr = prev + number /*pega o valor que o usuario colocou e soma com o antigo*/

	setValue(total, curr)
}


function undo(total) {
	if(history.length > 0) {

	})

}
