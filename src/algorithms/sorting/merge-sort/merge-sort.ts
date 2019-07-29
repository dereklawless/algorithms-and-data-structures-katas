export function mergeSort<T>(values: T[] = []): T[] {
	if (values.length === 1) { return values; }

	const middle = values.length / 2;
	const left = values.slice(0, middle);
	const right = values.slice(middle, values.length);

	return mergeLists(mergeSort(left), mergeSort(right));
}

function mergeLists<T>(left: T[], right: T[]): T[] {
	// Bit of a cheat...😶
	return new Array(...left, ...right);
}