import { bubbleSort, bubbleSortOptimal } from "../bubble-sort";

const unsortedValues = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
const sortedValues = Array.from(unsortedValues);
sortedValues.sort((a, b) => a - b);

describe("bubbleSort()", () => {
	it("is exported", () => {
		expect(bubbleSort).toBeDefined();
	});

	it("sorts an array of numbers in the expected order", () => {
		expect(bubbleSort(unsortedValues)).toEqual(sortedValues);
	});
});

describe("bubbleSortOptimal()", () => {
	it("is exported", () => {
		expect(bubbleSortOptimal).toBeDefined();
	});

	it("sorts an array of numbers in the expected order", () => {
		expect(bubbleSortOptimal(unsortedValues)).toEqual(sortedValues);
	});
});