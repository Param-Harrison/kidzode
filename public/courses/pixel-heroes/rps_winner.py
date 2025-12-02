import random

print("=== ROCK-PAPER-SCISSORS GAME ===")
print()

# Player makes a choice
player_choice = input("Choose rock, paper, or scissors: ")

# Computer makes a random choice
choices = ["rock", "paper", "scissors"]
computer_choice = random.choice(choices)

print()
print(f"You chose: {player_choice}")
print(f"Computer chose: {computer_choice}")
print()

# Determine the winner
if player_choice == computer_choice:
    print("It's a TIE!")
elif player_choice == "rock" and computer_choice == "scissors":
    print("YOU WIN! Rock beats scissors!")
elif player_choice == "paper" and computer_choice == "rock":
    print("YOU WIN! Paper beats rock!")
elif player_choice == "scissors" and computer_choice == "paper":
    print("YOU WIN! Scissors beats paper!")
else:
    print("COMPUTER WINS! Better luck next time!")
