function getValue(total) {
	let words = total.innerHTML.split(' ')

	return parseInt(words[1])
}


function setValue(total, value) {
	total.innerHTML = 'Total: ' + value
}


function clear(number) {
	number.innerHTML = '0'
}


function concDigit(number, digit) {
	if(number.innerHTML == '0') {
		number.innerHTML = digit
	}
	else {
		number.innerHTML += digit
	}
}


document.addEventListener('DOMContentLoaded', function() {
	let total = document.querySelector('.total')
	setValue(total, 0)

	let number = document.querySelector('.number')
	clear(number)

	let keys

	keys = document.querySelectorAll('.num')

	for(let key of keys) {
		key.addEventListener('click', function() {
			concDigit(number, key.innerHTML)
		})
	}

	keys = document.querySelectorAll('.com')

	for(let key of keys) {
		key.addEventListener('click', function() {
			if(key.innerHTML == '⟲') {
				undo(total)
			}
			if(key.innerHTML == '+') {
				add(total, parseInt(number.innerHTML))
				clear(number)
			}
		})
	}
})
