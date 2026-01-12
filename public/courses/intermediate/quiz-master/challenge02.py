# ========================================
# 🎲 CHALLENGE 2: Random Quiz
# ========================================

import random

quiz = [
    {"question": "2 + 2?", "answer": "4"},
    {"question": "Capital of UK?", "answer": "london"},
    {"question": "Days in a week?", "answer": "7"}
]

# Shuffle the questions!
random.shuffle(quiz)

score = 0

for q in quiz:
    print("")
    print(q["question"])
    answer = input("Answer: ")
    if answer.lower() == q["answer"].lower():
        score = score + 1

print("Score:", score, "/", len(quiz))
