import { binarySearch, binarySearchRecursive } from "../binary-search";

describe("binarySearch()", () => {
	const values = [...Array(100).keys()];

	it("is exported", () => {
		expect(binarySearch).toBeDefined();
	});

	it("returns the expected results for the matched values", () => {
		expect(binarySearch(values, 0)).toEqual({
			position: 0,
		});
		expect(binarySearch(values, 24)).toEqual({
			position: 24,
		});
		expect(binarySearch(values, 49)).toEqual({
			position: 49,
		});
		expect(binarySearch(values, 74)).toEqual({
			position: 74,
		});
		expect(binarySearch(values, 99)).toEqual({
			position: 99,
		});
	});

	it("returns the expected result if there's no match", () => {
		expect(binarySearch(values, 100)).toEqual({
			position: -1,
		});
	});
});

describe("binarySearchRecursive()", () => {
	const values = [...Array(100).keys()];

	it("returns the expected results for the matched values", () => {
		expect(binarySearchRecursive(values, 0)).toEqual({
			position: 0,
		});
		expect(binarySearchRecursive(values, 24)).toEqual({
			position: 24,
		});
		expect(binarySearchRecursive(values, 49)).toEqual({
			position: 49,
		});
		expect(binarySearchRecursive(values, 74)).toEqual({
			position: 74,
		});
		expect(binarySearchRecursive(values, 99)).toEqual({
			position: 99,
		});
	});

	it("returns the expected result if there's no match", () => {
		expect(binarySearchRecursive(values, 100)).toEqual({
			position: -1,
		});
	});
});