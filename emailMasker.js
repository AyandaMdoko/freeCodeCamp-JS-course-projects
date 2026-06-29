function maskEmail(email) {
	const atIndex = email.indexOf('@');
	if (atIndex === -1) return email;

	const local = email.slice(0, atIndex);
	const domain = email.slice(atIndex); // includes '@'

	if (local.length <= 2) {
		return local + domain;
	}

	const first = local[0];
	const last = local[local.length - 1];
	const maskedMiddle = '*'.repeat(local.length - 2);

	return first + maskedMiddle + last + domain;
}

// Example usage
const email = "apple.pie@example.com";
console.log(maskEmail(email));

