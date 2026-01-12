# ========================================
# 📊 LESSON 3: The Scoreboard
# ========================================

quiz = [
    {"question": "What color is the sky?", "answer": "blue"},
    {"question": "What is 2 + 2?", "answer": "4"},
    {"question": "Capital of France?", "answer": "paris"}
]

# Keep track of the score
score = 0

print("🎯 QUIZ TIME! 🎯")

# Ask each question
for q in quiz:
    print("")
    print("Question:", q["question"])
    user_answer = input("Your answer: ")
    
    if user_answer.lower() == q["answer"].lower():
        print("✅ Correct!")
        score = score + 1
    else:
        print("❌ Wrong! The answer was:", q["answer"])

# Show final score
print("")
print("="*20)
print("Final Score:", score, "/", len(quiz))

# ----------------------------------------
# 🎮 TRY THIS:
# Add more questions to make the quiz longer!
# ----------------------------------------
