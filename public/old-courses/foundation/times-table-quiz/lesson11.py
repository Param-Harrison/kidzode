questions = ["2 x 2", "3 x 3", "4 x 4"]
correct_answers = [4, 9, 16]
my_answers = [4, 0, 16] # Middle one is wrong!

for i in range(3):
    if my_answers[i] == correct_answers[i]:
        print(f"Q{i+1}: Correct! ✅")
    else:
        print(f"Q{i+1}: Wrong! ❌")
