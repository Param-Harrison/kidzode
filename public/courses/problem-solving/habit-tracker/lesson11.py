history = [True, True, False, True, True, True]

best_streak = 0
current_streak = 0

for day in history:
    if day:
        current_streak = current_streak + 1
    else:
        # Check if this was a new record
        if current_streak > best_streak:
            best_streak = current_streak
        current_streak = 0 # Reset

# Check one last time at the end
if current_streak > best_streak:
    best_streak = current_streak

print(f"Best Streak: {best_streak}")
