export function smallestPositiveInteger(values: number[]) {
	const workingSet = values
			.filter((a) => a >= 0)
			.sort((a, b) => a - b);

	const maxIterations = workingSet.length;
	let smallestInt = 1;

	for (let i = 0; i < maxIterations; i++) {
			const current = workingSet[i];
			const next = workingSet[i + 1];

			smallestInt = current + 1;
			if (smallestInt < next) {
					smallestInt = current + 1;
					break;
			}
	}

	return smallestInt;
}

export default smallestPositiveInteger;