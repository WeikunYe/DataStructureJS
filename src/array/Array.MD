# Array
1. What is a static array?
    Fixed length and indexable from range [0, n-1].
2. When and where is a static array used?
    - Storing and accessing sequential data
    - Temporarily storing objects
    - Used by IO routines as buffers
    - Lookip tables and inverse lookup tables
    - Can be used to return multiple values from a function
    - Used in dynamic programming to cache answers to subproblems
3. Complexity

|           | Static Array | Dynamic Array |
|-----------|--------------|---------------|
| Access    | O(1)         | O(1)          |
| Search    | O(n)         | O(n)          |
| Insertion | N/A          | O(n)          |
| Appending | N/A          | O(1)          |
| Deletion  | N/A          | O(n)          |

