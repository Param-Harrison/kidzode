# ========================================
# 🤔 LESSON 2: Asking Questions
# ========================================

quiz = [
    {"question": "What color is the sky?", "answer": "blue"},
    {"question": "What is 2 + 2?", "answer": "4"}
]

# Function to ask ONE question
def ask_question(q):
    print("")
    print("Question:", q["question"])
    user_answer = input("Your answer: ")
    
    # Make both lowercase for fair comparison
    if user_answer.lower() == q["answer"].lower():
        print("✅ Correct!")
    else:
        print("❌ Wrong! The answer was:", q["answer"])

# Ask the first question
ask_question(quiz[0])

# ----------------------------------------
# 🎮 TRY THIS:
# Call ask_question(quiz[1]) to ask the second question!
# ----------------------------------------
