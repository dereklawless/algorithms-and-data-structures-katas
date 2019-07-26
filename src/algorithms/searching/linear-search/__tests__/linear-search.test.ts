import { linearSearch } from "../linear-search";

describe("linearSearch()", () => {
	const values = "abcdefghijklmnopqrstuvwxyz".split("");

	it("is exported", () => {
		expect(linearSearch).toBeDefined();
	});

	it("returns the indexes of the matched values", () => {
		values.forEach((val, index) => {
			expect(linearSearch(values, val)).toBe(index);
		});
	});

	it("returns -1 if there's no match", () => {
		expect(linearSearch(values, "*")).toBe(-1);
	});
});