# The Exact Phrase Problem

"New York" is different from "York New".
Our current bag-of-words index doesn't know order! 😵
We'd need to store **Positions**.

`"new": {1: [0]}` (Doc 1, pos 0)
`"york": {1: [1]}` (Doc 1, pos 1)

If positions are adjacent (`0` and `1`), it's a match!

(This is advanced, but good to know!)

## Try This!
Just think: How would you store positions in the index?
`index[word] = {doc_id: [pos1, pos2]}`
