import { insertionSort } from "../insertion-sort";

const unsortedValues = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
const sortedValues = Array.from(unsortedValues);
sortedValues.sort((a, b) => a - b);

describe("insertionSort()", () => {
	it("is exported", () => {
		expect(insertionSort).toBeDefined();
	});

	it("sorts an array of numbers in the expected order", () => {
		expect(insertionSort(unsortedValues)).toEqual(sortedValues);
	});
});