# Hints

## 🟢 Hint 1
Start result with the first word's set.

## 🟡 Hint 2
Loop through the rest.
If `AND`: `res = res & next_set`
If `OR`: `res = res | next_set`

## 🔴 Hint 3
Handle missing words! `index.get(word, set())`
