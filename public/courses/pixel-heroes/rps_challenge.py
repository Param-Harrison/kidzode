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
    
    # YOUR TURN! Determine the winner and update score
    # HINT: Use if/elif/else to check who wins
    # HINT: If tie: ties = ties + 1
    # HINT: If player wins: player_score = player_score + 1
    # HINT: Otherwise: computer_score = computer_score + 1
    # HINT: Winning rules:
    #   - rock beats scissors
    #   - paper beats rock
    #   - scissors beats paper
    # Your code here:
    
    print(f"Score - You: {player_score}, Computer: {computer_score}")
    print()

# Declare the champion
print("=== FINAL RESULTS ===")
print(f"You: {player_score} wins")
print(f"Computer: {computer_score} wins")
print(f"Ties: {ties}")
print()

# YOUR TURN! Print who won
# HINT: Use if/elif/else to compare scores
# HINT: If player_score > computer_score: print("YOU ARE THE CHAMPION!")
# HINT: Else if computer_score > player_score: print("COMPUTER IS THE CHAMPION!")
# HINT: Else: print("IT'S A TIE! PLAY AGAIN!")
# Your code here:
