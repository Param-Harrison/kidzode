# Mini-Challenge 2: Logic Search 🧠

Build a search function that supports `AND` and `OR`.

**Input:**
- Query: `["apple", "banana"]`
- Mode: `"AND"` or `"OR"`

**Your Goal:**
1. If Mode is `AND`, return intersection `&`.
2. If Mode is `OR`, return union `|`.
3. Test with:
   - Apple: {1, 2}
   - Banana: {2, 3}

`search(["apple", "banana"], "AND")` -> `{2}`
`search(["apple", "banana"], "OR")` -> `{1, 2, 3}`

Go implement logic!
