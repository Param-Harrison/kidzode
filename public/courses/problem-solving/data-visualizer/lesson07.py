votes = ["Red", "Blue", "Red", "Green", "Red"]
counts = {}

# Count them
for v in votes:
    if v in counts:
        counts[v] += 1
    else:
        counts[v] = 1

# Find max count
winner = max(counts, key=counts.get)
print(f"Winner: {winner}")
