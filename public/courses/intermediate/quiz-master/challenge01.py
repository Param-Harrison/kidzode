# ========================================
# 🏆 CHALLENGE 1: Super Quiz
# ========================================

quiz = [
    {"question": "What is 2 + 2?", "answer": "4"},
    {"question": "Capital of France?", "answer": "paris"},
    {"question": "What color is grass?", "answer": "green"},
    {"question": "How many days in a week?", "answer": "7"},
    {"question": "What animal says 'meow'?", "answer": "cat"}
]

score = 0

for q in quiz:
    print("")
    print(q["question"])
    answer = input("Your answer: ")
    
    if answer.lower() == q["answer"].lower():
        print("✅ Correct!")
        score = score + 1
    else:
        print("❌ Wrong! Answer:", q["answer"])

print("")
print("Final Score:", score, "/", len(quiz))
