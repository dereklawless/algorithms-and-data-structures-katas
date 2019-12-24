export interface IBinarySearchResult {
	position: number;
}

export function binarySearch<T>(values: T[] = [], target: T): IBinarySearchResult {
	let low = 0;
	let high = values.length - 1;

	while (low <= high) {
		const middle = Math.floor((low + high) / 2);
		if (values[middle] === target) {
			return {
				position: middle,
			};
		}
		if (target < values[middle]) {
			high = middle - 1;
		} else {
			low = middle + 1;
		}
	}

	return {
		position: -1,
	};
}

export function binarySearchRecursive<T>(
	values: T[] = [],
	target: T,
	low: number = 0,
	high: number = values.length - 1): IBinarySearchResult {

	if (low <= high) {
		const middle = Math.floor((low + high) / 2);
		if (values[middle] === target) {
			return {
				position: middle,
			};
		} else if (target < values[middle]) {
			return binarySearchRecursive(values, target, low, middle - 1);
		} else {
			return binarySearchRecursive(values, target, middle + 1, high);
		}
	}

	return {
		position: -1,
	};
}