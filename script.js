let generate = document.querySelector(".generate")
let finalNum = document.querySelector(".output")


let numbers = []
let checkNum = 0;
let validity = false;

const randomNum = () => {
	let one = Math.floor(Math.random() * 9)
	let two = Math.floor(Math.random() * 9)
	let three = Math.floor(Math.random() * 9)
	let four = Math.floor(Math.random() * 9)
	let five = Math.floor(Math.random() * 9)
	let six = Math.floor(Math.random() * 9)
	let seven = Math.floor(Math.random() * 9)
	let eight = Math.floor(Math.random() * 9)
	let nine = Math.floor(Math.random() * 9)
	let ten = Math.floor(Math.random() * 9)
	let eleven = Math.floor(Math.random() * 9)
	let twelve = Math.floor(Math.random() * 9)
	let thirteen = Math.floor(Math.random() * 9)
	let fourteen = Math.floor(Math.random() * 9)
	let fifteen = Math.floor(Math.random() * 9)
	let sixteen = Math.floor(Math.random() * 9)

	let ccNum = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen]


	for (let i = ccNum.length - 2; i >= 0; i -= 2) {
		numbers.push(ccNum[i] * 2)
	}
	console.log(numbers)
	for (let j = 0; j < numbers.length; j++) {
		if (numbers[j] > 9) {
			numbers[j] -= 9
		}
	}
	if (ccNum.length % 2 === 0) {
		console.log(numbers)
		for (let k = ccNum.length - 1; k >= 0; k -= 2) {
			numbers.push(ccNum[k])
		}
		console.log(numbers)
		for (let l = 0; l < numbers.length; l++) {
			checkNum += numbers[l]
		}
	} else {
		console.log(numbers)
		for (let k = ccNum.length - 1; k > 0; k -= 2) {
			numbers.push(ccNum[k])
		}
		console.log(numbers)
		for (let l = 1; l < numbers.length - 1; l++) {
			checkNum += numbers[l]
		}
	};
	console.log(checkNum)
	if (checkNum % 10 == 0) {
		validity = true;
		finalNum.innerText = ccNum.join('');
	} else {
		validity = false;
	};

	console.log(validity)
	checkNum = 0;
	numbers = []
};

generate.addEventListener('click', () => {
	while (validity == false) {
		randomNum()
	};
	if (validity == true) {

	};
	validity = false;
});


/*
while(validity == false){
  randomNum()
}




let ccNum = Math.ceil(Math.random() * (99999999999999999 - 1000000000000000) + 1000000000000000)

*/