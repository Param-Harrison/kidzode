history = [False, True, True, True] # Today is last

streak = 0
# Reverse the list to start from today
for day in reversed(history):
    if day:
        streak = streak + 1
    else:
        break # Stop counting if we hit a False

print(f"Current Streak: {streak} days")
