index = {
    "cat": [1, 5, 10],
    "dog": [2, 5],
    "bird": [3]
}

query = "cat"
if query in index:
    print(f"Found '{query}' in documents: {index[query]}")
else:
    print("Not found!")
