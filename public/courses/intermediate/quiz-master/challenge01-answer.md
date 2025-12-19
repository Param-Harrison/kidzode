### One way to solve it:

```python
quiz = [
    {
        "q": "What is the biggest planet?",
        "options": ["A) Earth", "B) Jupiter", "C) Mars"],
        "a": "B"
    },
    {
        "q": "Which is the smallest?",
        "options": ["A) Pluto", "B) Mercury", "C) Moon"],
        "a": "B"
    }
]

score = 0
wrong = 0

for item in quiz:
    print("\n" + item["q"])
    for opt in item["options"]:
        print(opt)
    
    ans = input("Your choice: ").upper()
    
    if ans == item["a"]:
        print("🌟 SHINING STAR! 🌟")
        score += 1
    else:
        print("☄️ IMPACT! Wrong answer.")
        wrong += 1

print(f"\nQUIZ OVER!")
print(f"Correct: {score}")
print(f"Wrong:   {wrong}")
```
