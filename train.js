// console.log('jack ma maslahatlari')
// const list = [
// 	'yaxshi talaba boling',
// 	'togri boshliq tanlang koproq hato qiling',
// 	'uzizngizni ishlaringizni boshlang',
// 	'siz kuchli bolgan narsalarni qiling',
// 	'yoshlarga investitsiya qiling',
// 	'endi dam olin foydasi yoq',
// ]
// //callback functionlar
// async function maslahatBering(a, callback) {
// 	if (typeof a !== 'number') callback('insert a number', null)
// 	else if (a <= 20) callback(null, list[0])
// 	else if (a > 20 && a <= 30) callback(null, list[1])
// 	else if (a > 30 && a <= 40) callback(null, list[2])
// 	else if (a > 40 && a <= 50) callback(null, list[3])
// 	else if (a > 50 && a <= 60) callback(null, list[4])
// 	else {
// 		setInterval(function () {
// 			callback(null, list[5])
// 		}, 1000)
// 	}
// }

// console.log('passed here 0')
// maslahatBering(70, (err, data) => {
// 	if (err) console.log('ERROR', err)
// 	else {
// 		console.log(data)
// 	}
// })
// console.log('passed here 1')
//async function defin qismida ishladdik
// async function maslahatBering(a) {
// 	if (typeof a !== 'number') throw new Error('insert a number')
// 	else if (a <= 20) return list[0]
// 	else if (a > 20 && a <= 30) return list[1]
// 	else if (a > 30 && a <= 40) return list[2]
// 	else if (a > 40 && a <= 50) return list[3]
// 	else if (a > 50 && a <= 60) return list[4]
// 	else {
// 		return new promiseImpl((resolve, reject) => {
// 			setTimeout(() => {    //setInterval
// 				resolve(list[5])
// 			}, 5000)
// 		})
// 		//	setTimeout(function () {
// 		//	return list[5];
// 		//	}, 5000);
// 	}
// }
// console.log('passed here 0')
// maslahatBering(25, (err, data) => {
// 	if (err) console.log('ERROR', err)
// 	else {
// 		console.log('javob:', data)
// 	}
// })
// call via then catch
// console.log('passed here 0')
// maslahatBering(25)
// 	.then(data => {
// 		console.log('javob:', data)
// 	})
// 	.catch(err => {
// 		console.log('ERROR:', err)
// 	})
// console.log('passed here 1')
//call asyn/await
// async function run() {
// 	let javob = await maslahatBering(20)
// 	console.log(javob)
// 	javob = await maslahatBering(31)
// 	console.log(javob)
// 	javob = await maslahatBering(41)
// 	console.log(javob)
// }
// run()

// A-TASK:

function countLetter(letter, word) {
	let count = 0
	for (let i = 0; i < word.length; i++) {
		if (word[i] === letter) {
			count++
		}
	}
	return count
}

console.log(countLetter('b', 'bee'))
console.log(countLetter('e', 'dean'))
