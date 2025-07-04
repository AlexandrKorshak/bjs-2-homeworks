function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: undefined,
			max: undefined,
			avg: undefined
		};
	}

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	const avg = parseFloat((sum / arr.length).toFixed(2));

	return {
		min,
		max,
		avg
	};
}

function summElementsWorker(...elements) {
	if (elements.length === 0) return 0;
	return elements.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...elements) {
	if (elements.length === 0) return 0;
	const max = Math.max(...elements);
	const min = Math.min(...elements);
	return max - min;
}

function differenceEvenOddWorker(...elements) {
	if (elements.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (const element of elements) {
		if (element % 2 === 0) {
			sumEvenElement += element;
		} else {
			sumOddElement += element;
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...elements) {
	if (elements.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (const element of elements) {
		if (element % 2 === 0) {
			sumEvenElement += element;
			countEvenElement++;
		}
	}

	return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	if (arrOfArr.length === 0) return 0;

	let maxWorkerResult = -Infinity;

	for (const elements of arrOfArr) {
		const currentResult = func(...elements);
		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}

	return maxWorkerResult;
}

