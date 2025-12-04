score = 3
total = 3

print("--- GAME OVER ---")
print(f"Score: {score}/{total}")

if score == total:
    print("PERFECT! 🏆")
elif score > 0:
    print("Good job! 👍")
else:
    print("Better luck next time! 🍀")
