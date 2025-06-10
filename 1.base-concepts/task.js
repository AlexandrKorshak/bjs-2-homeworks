function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	const monthlyPercent = percent / 100 / 12;


	const loanBody = amount - contribution;


	if (loanBody <= 0) {
		return 0;
	}


	const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));


	const totalAmount = monthlyPayment * countMonths;


	const roundedTotal = parseFloat(totalAmount.toFixed(2));

	return roundedTotal;
}