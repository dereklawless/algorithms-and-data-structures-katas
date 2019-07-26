import { SieveOfEratosthenes } from "../sieve-of-eratosthenes";

describe("SieveOfEratosthenes", () => {
	it("is exported", () => {
		expect(SieveOfEratosthenes).toBeDefined();
	});

	describe("findPrimes()", () => {
		it("returns all prime numbers in a given bound set", () => {
			const knownPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

			expect(SieveOfEratosthenes.findPrimes(50)).toEqual(knownPrimes);
		});
	});
});