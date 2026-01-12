# ========================================
# 📝 CHALLENGE 3: Quiz with Pass/Fail
# ========================================

quiz = [
    {"question": "2 + 2?", "answer": "4"},
    {"question": "Color of sky?", "answer": "blue"},
    {"question": "Days in week?", "answer": "7"},
    {"question": "3 * 3?", "answer": "9"},
    {"question": "Capital of Japan?", "answer": "tokyo"}
]

score = 0

for q in quiz:
    print("")
    print(q["question"])
    answer = input("Answer: ")
    if answer.lower() == q["answer"].lower():
        score = score + 1

print("")
print("Score:", score, "/", len(quiz))

# Check pass or fail
if score >= 3:
    print("PASSED! 🎉")
else:
    print("Try again! 📚")
