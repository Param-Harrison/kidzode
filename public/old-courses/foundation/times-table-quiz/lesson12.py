questions = ["2 x 2", "3 x 3", "4 x 4"]
correct_answers = [4, 9, 16]
my_answers = [4, 9, 16]

score = 0

for i in range(3):
    if my_answers[i] == correct_answers[i]:
        print("Correct!")
        score = score + 1
    else:
        print("Wrong!")

print(f"Final Score: {score}/3")
