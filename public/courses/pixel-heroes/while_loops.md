# Keep Playing with While Loops

Make programs that keep running until you want to stop!

## The Difference

**For Loop**: Repeats a set number of times
```python
for i in range(5):  # Exactly 5 times
    print("Hello")
```

**While Loop**: Repeats until something changes
```python
playing = True
while playing:  # Until playing becomes False
    print("Hello")
    playing = False  # Stop
```

## Example

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

## Remember
- `while condition:` repeats while True
- Change the condition or use `break` to stop
- Great for "play again" features!

## Try This
Make a menu system with `while True` and `break`!

## If Stuck
- Always have a way to stop the loop
- Use `break` to exit immediately

You did it! ⭐
