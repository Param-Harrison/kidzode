index = {
    "hello": {1, 2},
    "world": {2, 3},
    "python": {1}
}

def search_and(query):
    words = query.lower().split()
    
    # Start with the first word's results
    # We use .get(w, set()) to return empty set if word missing
    results = index.get(words[0], set())
    
    # Intersect with the rest
    for w in words[1:]:
        results = results & index.get(w, set())
        
    return results

print(search_and("hello world"))
