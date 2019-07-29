import { mergeSort } from "../merge-sort";

const unsortedValues = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
const sortedValues = unsortedValues.sort((a, b) => a - b);

describe("mergeSort()", () => {
	it("is exported", () => {
		expect(mergeSort).toBeDefined();
	});

	it("sorts an array of numbers in the expected order", () => {
		expect(mergeSort(unsortedValues)).toEqual(sortedValues);
	});
});