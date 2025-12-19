current = 3
best = 5

if current == best:
    print("New Record! 🎉")
elif current > best:
    print("Unstoppable! 🚀")
else:
    left = best - current
    print(f"{left} days to beat your record!")
