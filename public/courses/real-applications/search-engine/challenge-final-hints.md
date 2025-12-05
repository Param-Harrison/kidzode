# Hints

## 🟢 Hint 1 (Indexing)
Store `self.documents[doc_id] = text` so you can retrieve the snippet later!
Then build the standard word index.

## 🟡 Hint 2 (Snippet)
Use `text.find(query)` to find position.
Slice `text[start:end]`.

## 🔴 Hint 3 (Highlight)
Use `.replace(query, "**"+query+"**")` on the snippet.
