index = {"cat": [1, 2], "dog": [2, 3]}

def search(query):
    query = query.lower()
    return index.get(query, [])

print(f"Results: {search('Cat')}")
