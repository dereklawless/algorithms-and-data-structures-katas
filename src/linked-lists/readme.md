# Linked lists
A [Linked list](https://en.wikipedia.org/wiki/Linked_list) is a linear collection of data elements. 

Linked lists differ from arrays in that they can utilise non-contiguous blocks of memory, with each data element ('node') pointing to the next in the list. 

With a __Singly linked list__ each node points to the next node in the list.

With a __Doubly linked list__ each node points to the previous and next node in the list.

### Performance characteristics
#### Time complexity
|Type |Insertion |Removal |Retrieval
|- |- |- |-
|Singly linked list |O(1) |O(n) |O(n)
|Doubly linked list |O(1) |O(1) |O(n)