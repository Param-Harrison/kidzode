index = {
    "cat": {1: 10, 2: 1, 3: 50}
}

results = index["cat"]

# Sort the Doc IDs (keys) based on their count (values)
sorted_docs = sorted(results, key=results.get, reverse=True)

print(f"Ranking: {sorted_docs}")
