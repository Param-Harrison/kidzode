# Solution

```python
index = {
    "apple": {1, 2},
    "banana": {2, 3}
}

def search(query_words, mode="OR"):
    # Start with first word
    result = index.get(query_words[0], set())
    
    for word in query_words[1:]:
        word_set = index.get(word, set())
        
        if mode == "AND":
            result = result & word_set
        else:
            result = result | word_set
            
    return result

print("AND:", search(["apple", "banana"], "AND"))
print("OR: ", search(["apple", "banana"], "OR"))
```
