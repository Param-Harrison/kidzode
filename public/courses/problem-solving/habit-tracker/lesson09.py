history = [True, True, False, True, True, False, True]

total_days = len(history)
completed_days = sum(history) # True counts as 1!

print(f"Days: {total_days}")
print(f"Completed: {completed_days}")
