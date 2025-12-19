scores = [10, 50, 20]
scores = sorted(scores) # [10, 20, 50]

# Middle index is length // 2
mid = len(scores) // 2 

median = scores[mid]
print(f"Median: {median}")
