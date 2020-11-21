import { Queue } from "../queue";

describe("Queue", () => {
	let queue: Queue<number>;

	afterEach(() => {
		queue = undefined;
	});

	beforeEach(() => {
		queue = new Queue();
	});

	describe("dequeue()", () => {
		it("dequeueing the queue removes the least recently added element", () => {
			seedQueue(queue);

			expect(queue.dequeue()).toBe(0);
			expect(queue.dequeue()).toBe(1);
		});

		it("dequeuing the queue reduces its length by 1", () => {
			seedQueue(queue);
			expect(queue.length()).toBe(10);

			queue.dequeue();
			expect(queue.length()).toBe(9);
			queue.dequeue();
			expect(queue.length()).toBe(8);
		});
	});

	describe("enqueue()", () => {
		it("enqueueing N elements onto the queue increases the queue length by N", () => {
			for (let i = 0; i < 10; i++) {
				queue.enqueue(i);
				expect(queue.length()).toBe(i + 1);
			}
		});
	});

	describe("isEmpty()", () => {
		it("with elements, returns a value indicating the queue is not empty", () => {
			seedQueue(queue);
			expect(queue.isEmpty()).toBe(false);
		});

		it("without elements, returns a value indicating the queue is empty", () => {
			expect(queue.isEmpty()).toBe(true);
		});
	});

	describe("length", () => {
		it("with N enqueued elements, returns the correct length", () => {
			seedQueue(queue);
			expect(queue.length()).toBe(10);
		});

		it("with a dequeued element, returns the correct length", () => {
			seedQueue(queue);
			queue.dequeue();
			expect(queue.length()).toBe(9);
		});
	});

	describe("peek", () => {

	});
});

function seedQueue(queue: Queue<number>): void {
	for (let i = 0; i < 10; i++) {
		queue.enqueue(i);
	}
}