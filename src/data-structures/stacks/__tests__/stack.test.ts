import { Stack } from "../stack";

describe("Stack", () => {
	let stack: Stack<number>;

	afterEach(() => {
		stack = undefined;
	});

	beforeEach(() => {
		stack = new Stack();
	});

	describe("isEmpty()", () => {
		it("with elements, returns a value indicating the stack is not empty", () => {
			seedStack(stack);
			expect(stack.isEmpty()).toBe(false);
		});

		it("without elements, returns a value indicating the stack is empty", () => {
			expect(stack.isEmpty()).toBe(true);
		});
	});

	describe("peek()", () => {
		it("returns the most recently added element without removing it from the stack" , () => {
			seedStack(stack);

			expect(stack.length()).toBe(10);
			expect(stack.peek()).toBe(9);
			expect(stack.length()).toBe(10);
		});
	});

	describe("pop()", () => {
		it("popping the stack removes the most recently added element", () => {
			seedStack(stack);

			expect(stack.pop()).toBe(9);
			expect(stack.pop()).toBe(8);
		});

		it("popping the stack reduces its length by 1", () => {
			seedStack(stack);
			expect(stack.length()).toBe(10);

			stack.pop();
			expect(stack.length()).toBe(9);
			stack.pop();
			expect(stack.length()).toBe(8);
		});
	});

	describe("push()", () => {
		it("pushing N elements onto the stack increases the stack length by N", () => {
			for (let i = 0; i < 10; i++) {
				stack.push(i);
				expect(stack.length()).toBe(i + 1);
			}
		});
	});
});

function seedStack(stack: Stack<number>): void {
	for (let i = 0; i < 10; i++) {
		stack.push(i);
	}
}