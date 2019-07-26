import { SinglyLinkedList } from "../singly-linked-list";

describe("SinglyLinkedList", () => {
	let list: SinglyLinkedList<number>;

	afterEach(() => {
		list = undefined;
	});

	beforeEach(() => {
		list = new SinglyLinkedList<number>();
	});

	it("is exported", () => {
		expect(SinglyLinkedList).toBeDefined();
	});

	describe("add()", () => {
		it("adds a node to the end of the list", () => {
			list.add(1);
			list.add(2);

			expect(list.head.value).toBe(1);
			expect(list.tail.value).toBe(2);
			expect([...list.iterator()]).toEqual([1, 2]);
		});
	});

	describe("addFirst()", () => {
		it("adds a node to the beginning of the list", () => {
			list.add(1);
			list.addFirst(2);

			expect(list.head.value).toBe(2);
			expect(list.tail.value).toBe(1);
			expect([...list.iterator()]).toEqual([2, 1]);
		});
	});

	describe("addLast()", () => {
		it("adds a node to the end of the list", () => {
			list.addLast(1);
			list.addLast(2);

			expect(list.head.value).toBe(1);
			expect(list.tail.value).toBe(2);
			expect([...list.iterator()]).toEqual([1, 2]);
		});
	});

	describe("iterator()", () => {
		it("lists all node values", () => {
			const vals = [...Array(20).keys()];
			vals.forEach((val) => {
				list.add(val);
			});

			expect([...list.iterator()]).toEqual(vals);
		});
	});

	describe("remove()", () => {
		it("removes a node at the specified index", () => {
			list.add(1);
			list.add(2);
			list.add(3);

			expect(list.head.value).toBe(1);
			expect(list.tail.value).toBe(3);
			expect([...list.iterator()]).toEqual([1, 2, 3]);

			list.removeAt(1);

			expect([...list.iterator()]).toEqual([1, 3]);
		});

		it("handles an invalid index", () => {
			list.add(1);
			list.add(2);
			list.add(3);

			list.removeAt(3);
			expect([...list.iterator()]).toEqual([1, 2, 3]);
		});
	});
});