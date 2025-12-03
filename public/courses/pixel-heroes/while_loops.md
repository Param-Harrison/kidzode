# Keep Playing with While Loops

Want to make programs that keep running until you say stop? While loops do that!

**The Difference:**

**For Loop** - Repeats a set number of times:
```python
for i in range(5):  # Exactly 5 times
    print("Hello")
```

**While Loop** - Repeats until something changes:
```python
playing = True
while playing:  # Until playing becomes False
    print("Hello")
    playing = False  # Stop
```

**Example - A Game That Keeps Going:**

```python
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
```

**How it works:** `while condition:` keeps repeating while the condition is True. Change it to False or use `break` to stop. Perfect for "play again" features!

Try making a menu system with `while True` and `break` - keep showing options until the user picks "quit"!
