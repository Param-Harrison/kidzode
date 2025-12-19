habit = "Read"
history = [True, False, True, True]

total = len(history)
done = sum(history)
rate = (done / total) * 100

print(f"Habit: {habit}")
print(f"Total Days: {total}")
print(f"Completed: {done}")
print(f"Success Rate: {rate}%")
