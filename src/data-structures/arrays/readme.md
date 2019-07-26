# Arrays
An [array](https://en.wikipedia.org/wiki/Array_data_structure) is a linear collection of data elements occupying a contiguous block of memory.

## Characteristics
Arrays have two key characteristics:
1. They have a fixed size, once created they cannot grow in size
1. They can be randomly accessed, the indexer indicating the _offset_ from the beginning of the allocated block of memory

### Time complexity
|Insertion |Removal |Retrieval
|- |- |-
|O(n) |O(n) |O(1)

### How do dynamic arrays work?
A dynamic array wraps a real array, abstracting the re-allocation of contiguous memory.

When the underyling array reaches capacity, a larger block of memory is allocated and the original array is copied over.