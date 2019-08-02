import { quickSort } from "../quick-sort";

const unsortedValues = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
const sortedValues = Array.from(unsortedValues);
sortedValues.sort((a, b) => a - b);

describe("quickSort()", () => {
	it("is exported", () => {
		expect(quickSort).toBeDefined();
	});

	it("sorts an array of numbers in the expected order", () => {
		expect(quickSort(unsortedValues)).toEqual(sortedValues);
	});
});