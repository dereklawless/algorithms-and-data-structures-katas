# Stacks
A [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) is  a linear data structure (i.e. its elements form a sequence) where operations are performed at the 'top' of the stack. The order may be FIFO (first in, first out) or LIFO (last in, first out).

The LIFO implementation here uses an array.

## Characteristics
### Time complexity
|Insertion |Removal |Retrieval |Notes
|- |- |- |-
|O(1) |O(1) |O(1) |Retrieval O(1) if popping, otherwise O(n)

### Space complexity
|
|-
|O(n)