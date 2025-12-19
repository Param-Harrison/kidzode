quiz_data = [
    {"q": "Capitol of France?", "a": "Paris"},
    {"q": "Capitol of Spain?", "a": "Madrid"},
    {"q": "Capitol of Italy?", "a": "Rome"}
]

score = 0

print("--- EUROPE CAPITOLS QUIZ ---")

for item in quiz_data:
    user_ans = input(item["q"] + " ")
    if user_ans.lower() == item["a"].lower():
        print("✅ Correct!")
        score += 1
    else:
        print("❌ Oops!")

print(f"\nFINAL SCORE: {score}/{len(quiz_data)}")
