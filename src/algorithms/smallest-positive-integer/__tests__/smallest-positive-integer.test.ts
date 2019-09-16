import { smallestPositiveInteger } from "../smallest-postive-integer";

const range1 = [1, 2, 3, 5];
const range2 = [-5, -3, -2, -1, 0, 2];
const range3 = [-1];
const range4 = [0, 0, 0];

describe("smallestPositiveInteger()", () => {
	it("is exported", () => {
		expect(smallestPositiveInteger).toBeDefined();
	});

	it("given a range returns the expected result", () => {
		expect(smallestPositiveInteger(range1)).toBe(4);
		expect(smallestPositiveInteger(range2)).toBe(1);
	});

	it("given a range containing no values > 1, returns 1", () => {
		expect(smallestPositiveInteger(range3)).toBe(1);
		expect(smallestPositiveInteger(range4)).toBe(1);
	});
});