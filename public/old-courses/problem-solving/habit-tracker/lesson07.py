# Missed yesterday!
history = [True, True, False] 

streak = 0
for day in reversed(history):
    if day:
        streak = streak + 1
    else:
        break

print(f"Streak: {streak}")
