import { binarySearch } from "../binary-search";

describe("binarySearch()", () => {
	const values = [...Array(100).keys()];

	it("is exported", () => {
		expect(binarySearch).toBeDefined();
	});

	it("returns the expected results for the matched values", () => {
		expect(binarySearch(values, 0)).toEqual({
			iterations: 6,
			position: 0,
		});
		expect(binarySearch(values, 24)).toEqual({
			iterations: 2,
			position: 24,
		});
		expect(binarySearch(values, 49)).toEqual({
			iterations: 1,
			position: 49,
		});
		expect(binarySearch(values, 74)).toEqual({
			iterations: 2,
			position: 74,
		});
		expect(binarySearch(values, 99)).toEqual({
			iterations: 7,
			position: 99,
		});
	});

	it("returns the expected result if there's no match", () => {
		expect(binarySearch(values, 100)).toEqual({
			iterations: 7,
			position: -1,
		});
	});
});