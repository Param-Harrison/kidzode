# True or False - Boolean Logic!

Amazing, Game Designer! You've built adventure stories!
But sometimes you need to check MULTIPLE things at once!
Can you combine conditions like "if it's sunny AND warm"?

## 🎯 Today's Mission
Learn to combine conditions with `and`, `or`, and `not`!

## 📚 Before You Start
You know how to use `if/elif/else` statements.

## Let's Do It!

```python
print("=== BOOLEAN LOGIC ===")
print()

# AND - both must be true
age = 10
has_ticket = True

if age >= 8 and has_ticket:
    print("You can ride the roller coaster!")
else:
    print("Sorry, you need to be 8+ AND have a ticket")

print()

# OR - at least one must be true
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("No school today!")
else:
    print("Time for school!")

print()

# NOT - opposite
is_raining = False

if not is_raining:
    print("Let's play outside!")
else:
    print("Let's play inside!")
```

## ✨ Magic Moment
You can check multiple conditions in one `if` statement!

## 💡 Important Things to Remember
- `and` means BOTH must be true
- `or` means AT LEAST ONE must be true
- `not` means the OPPOSITE
- `True` and `False` are special Python words!

## 🔮 Try to Predict!
```python
hungry = True
has_food = False
if hungry and has_food:
    print("Eat!")
```
Will it print? Answer: NO! (has_food is False)

## 🎨 Try This Next!
```python
# Game entrance checker
age = 12
has_parent = False

if age >= 13 or has_parent:
    print("Welcome to the game!")
else:
    print("You need to be 13+ or have a parent")
```

## 🤔 Common Mistakes
**Mistake**: Using "&&" or "||" (from other languages)
```python
if age > 10 && has_ticket:  # ❌ Wrong!
```
**Fix**: Use `and` and `or` (words, not symbols!)

**Mistake**: Forgetting parentheses for complex logic
```python
if age > 10 and has_ticket or is_vip  # Confusing!
```
**Better**: `if (age > 10 and has_ticket) or is_vip`

## 📝 Self-Check Quiz
1. What does `and` require?
2. What does `or` require?
3. What does `not True` equal?

<details>
<summary>Click for Answers</summary>

1. BOTH conditions must be true
2. AT LEAST ONE condition must be true
3. `False` (opposite of True)
</details>

## 🚀 Level Up Challenge!
Make a movie rating checker:
```python
age = int(input("Your age: "))
has_adult = input("With an adult? (yes/no): ")

if age >= 13 or has_adult == "yes":
    print("You can watch PG-13 movies!")
else:
    print("Stick to G and PG movies!")
```

## 🌟 Show Your Parents!
"Look! I can check multiple conditions at once with boolean logic!"

You just unlocked the **Logic Master** superpower! ⭐
