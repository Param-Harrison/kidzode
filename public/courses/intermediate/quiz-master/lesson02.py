def ask(q_text, correct_ans):
    user_ans = input(q_text + " ")
    if user_ans.lower() == correct_ans.lower():
        print("✅ Correct!")
        return True
    else:
        print(f"❌ Wrong! The answer was {correct_ans}")
        return False

# Use the function
result = ask("Is Python a snake?", "yes")
print(f"Win status: {result}")

# TRY THIS: Use the ask function for a math question!
