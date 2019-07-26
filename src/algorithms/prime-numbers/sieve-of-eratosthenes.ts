export class SieveOfEratosthenes {
	public static findPrimes(upperBound: number = 2): number[] {
		const sieve = new Array(upperBound + 1).fill(true);

		// 0 and 1 are not prime by definition.
		sieve[0] = false;
		sieve[1] = false;

		for (let i = 2; (i * i) <= upperBound; i++) {
			if (sieve[i] === false) {
				// The number is not a prime, therefore its multiples will also not be primes.
				continue;
			}

			for (let multiplier = 2; (multiplier * i) <= upperBound; multiplier++) {
				// A multiple of a prime is not a prime.
				sieve[multiplier * i] = false;
			}
		}

		const primes: number[] = [];
		for (let i = 2; i < upperBound; i++) {
			if (sieve[i] === true) {
				primes.push(i);
			}
		}

		return primes;
	}
}

export default SieveOfEratosthenes;