# Linked-List

1. A linked list is a sequential list of nodes that hold data which point to other nodes also containing data.
2. Where are linked lists used?
    - Used in many List, Queue & Stack implementations.
    - Great for creating circular lists.
    - Can easily model real world objects such as trains.
    - Used in separate chaining, which is present certain Hashtable implementations to deal with hashing collisions.
    - Often used in the implementation of adjacency lists for graphs.
3. Head: the first node in a linked list
4. Tail: the last node in a linked list
5. Pointer: reference to another node
6. Node: an object containing data and pointer(s)
7. Singly and doubly linked lists
8. Pro and cons:

|               | Pros                                        | Cons                                       |
|---------------|---------------------------------------------|--------------------------------------------|
| Singly Linked | Uses less memory<br/>Simpler implementation |Cannot easily access<br /> previous elements|
| Doubly Linked | Can be traversed backwards                  | Takes 2x memory                            |

9. Complexity

|                   | Singly Linked | Doubly Linked |
|-------------------|---------------|---------------|
| Search            | O(n)          | O(n)          |
| Insert at head    | O(1)          | O(1)          |
| Insert at tail    | O(1)          | O(1)          |
| Remove at head    | O(1)          | O(1)          |
| Remove at tail    | O(n)          | O(1)          |
| Remove in middle  | O(n)          | O(n)          |
