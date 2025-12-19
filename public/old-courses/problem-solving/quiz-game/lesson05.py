quiz_item = {"question": "2 + 2?", "answer": "4"}

print(quiz_item["question"])
# Simulate user input
user_answer = "4" 

if user_answer == quiz_item["answer"]:
    print("Correct! ✅")
else:
    print("Wrong! ❌")
