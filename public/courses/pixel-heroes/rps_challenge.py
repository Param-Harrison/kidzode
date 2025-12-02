import random

print("=== BEST OF 5 CHAMPIONSHIP ===")
print()

# Initialize scores
player_score = 0
computer_score = 0
ties = 0

# Play 5 rounds
for round_num in range(1, 6):
    print(f"--- ROUND {round_num} ---")
    
    # Player makes a choice
    player_choice = input("Choose rock, paper, or scissors: ")
    
    # Computer makes a random choice
    choices = ["rock", "paper", "scissors"]
    computer_choice = random.choice(choices)
    
    print(f"You chose: {player_choice}")
    print(f"Computer chose: {computer_choice}")
    
    # Determine the winner and update score
    if player_choice == computer_choice:
        print("TIE!")
        ties = ties + 1
    elif player_choice == "rock" and computer_choice == "scissors":
        print("YOU WIN THIS ROUND!")
        player_score = player_score + 1
    elif player_choice == "paper" and computer_choice == "rock":
        print("YOU WIN THIS ROUND!")
        player_score = player_score + 1
    elif player_choice == "scissors" and computer_choice == "paper":
        print("YOU WIN THIS ROUND!")
        player_score = player_score + 1
    else:
        print("COMPUTER WINS THIS ROUND!")
        computer_score = computer_score + 1
    
    print(f"Score - You: {player_score}, Computer: {computer_score}")
    print()

# Declare the champion
print("=== FINAL RESULTS ===")
print(f"You: {player_score} wins")
print(f"Computer: {computer_score} wins")
print(f"Ties: {ties}")
print()

if player_score > computer_score:
    print("YOU ARE THE CHAMPION!")
elif computer_score > player_score:
    print("COMPUTER IS THE CHAMPION!")
else:
    print("IT'S A TIE! PLAY AGAIN!")
