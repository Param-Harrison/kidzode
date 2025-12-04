qa = {"question": "2 + 2?", "answer": "4"}

print(qa["question"])
# Simulate user input
user_answer = "4" 

if user_answer == qa["answer"]:
    print("Correct! ✅")
else:
    print("Wrong! ❌")
