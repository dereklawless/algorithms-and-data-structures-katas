# Quick sort
A [quick sort](https://en.wikipedia.org/wiki/Quick_sort) is an efficient sorting algorithm that uses a recursive divide-and-conquer algorithm.

1. An item in the list (called the _pivot_) is picked
1. Smaller values are moved before the pivot (_left_), and greater items after (_right_). This is called the _partition_ operation.
1. Recursively apply the above steps to the _left_ and _right_ lists.

Using a random index or a _median of three_ approach for the pivot ensures worst case behaviour on already sorted arrays is avoided.

## Characteristics
### Complexity
🔔 Complexity is considered in terms of worst case.

#### Time complexity
| |Notes
|- |-
|Θ(n log n) |

#### Space complexity
|  |Notes
|- |-
|Θ(n log n) |The in-place version of quick sort
|Θ(n)       |In this naive implementation three temporary lists are created and concatenated recursively
