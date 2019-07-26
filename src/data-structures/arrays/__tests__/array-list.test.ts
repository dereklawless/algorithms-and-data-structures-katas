import { ArrayList } from "../array-list";

describe("SinglyLinkedList", () => {
	let list: ArrayList<number>;

	afterEach(() => {
		list = undefined;
	});

	beforeEach(() => {
		list = new ArrayList<number>(10);
	});

	it("is exported", () => {
		expect(ArrayList).toBeDefined();
	});

	describe("add()", () => {
		it("adds an element to the array", () => {
			expect(list.length).toBe(0);
			list.add(1);
			expect(list.length).toBe(1);
		});

		it("grows the array capacity when necessary", () => {
			const repeatAdd = (times = 1) => {
				for (let i = 0; i < times; i++) {
					list.add(i);
				}
			};

			expect(list.getCapacity()).toBe(10);
			repeatAdd(10);
			expect(list.getCapacity()).toBe(10);
			repeatAdd(1);
			expect(list.getCapacity()).toBe(20);
		});
	});
});