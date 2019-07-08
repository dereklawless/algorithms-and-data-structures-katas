import { linearSearch } from "../linear-search";

describe("linearSearch()", () => {
	const values = "abcdefghijklmnopqrstuvwxyz".split("");

	it(`returns the index of the matched value`, () => {
		values.forEach((val, index) => {
			expect(linearSearch(values, val)).toBe(index);
		});
	});

	it("returns -1 if there's no match", () => {
		expect(linearSearch(values, "*")).toBe(-1);
	});
});