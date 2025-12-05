index = {
    "code": {1},
    "cook": {2},
    "apple": {3}
}

def search_partial(prefix):
    matches = set()
    for word in index:
        if word.startswith(prefix):
            matches.update(index[word])
    return matches

print(f"Starts with 'co': {search_partial('co')}")
