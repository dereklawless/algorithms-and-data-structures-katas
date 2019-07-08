import { linearSearch } from "../linear-search";

describe("linearSearch()", () => {
	const values = [...Array(100).keys()];

	it("returns the index of the matched value", () => {
		const index = Math.floor(Math.random() * 100);
		expect(linearSearch(values, index)).toBe(index);
	});

	it("returns -1 if there's no match", () => {
		expect(linearSearch(values, 101)).toBe(-1);
	});
});