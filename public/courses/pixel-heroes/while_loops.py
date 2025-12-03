playing = True

while playing:
    print("=== GUESSING GAME ===")
    secret = 7
    guess = input("Guess a number (1-10): ")
    
    if guess.isdigit():
        if int(guess) == secret:
            print("You got it!")
        else:
            print(f"Nope! It was {secret}")
    
    again = input("Play again? (yes/no): ").strip().lower()
    
    if again != "yes":
        playing = False
        print("Thanks for playing!")

print("Game over!")
