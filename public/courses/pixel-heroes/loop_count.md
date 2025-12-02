# Count with Python!

Great job, Loop Beginner! You can repeat actions!
But loops can do MORE than just repeat!
Can you make Python COUNT for you?

## 🎯 Today's Mission
Learn to use loops for counting and number patterns!

## 📚 Before You Start
You know that `for i in range(5):` repeats 5 times.

## Let's Do It!
1. Read the code - see the counting!
2. Press the green **Run** button
3. Watch Python count!

```python
print("=== COUNTING WITH LOOPS ===")
print()

# Count from 1 to 10
print("Counting up:")
for number in range(1, 11):
    print(number)

print()

# Count from 10 down to 1
print("Counting down:")
for number in range(10, 0, -1):
    print(number)

print()
print("BLAST OFF!")
```

## ✨ Magic Moment
Python can count up AND down automatically!

## 💡 Important Things to Remember
- `range(1, 11)` means start at 1, stop before 11 (so 1-10)
- `range(10, 0, -1)` means start at 10, stop before 0, count backwards
- The variable name (`number`) can be anything you want!
- We can USE the number inside the loop!

## 🔮 Try to Predict!
What will `range(5, 10)` print?
Answer: 5, 6, 7, 8, 9 (stops before 10!)

## 🎨 Try This Next!
- Count from 0 to 20
- Count backwards from 100 to 90
- Count by 2s: `range(0, 11, 2)` prints 0, 2, 4, 6, 8, 10

## 🤔 Common Mistakes
**Mistake 1**: Expecting range(1, 10) to include 10
```python
for i in range(1, 10):  # Stops at 9, not 10!
    print(i)
```
**Fix**: Use `range(1, 11)` to get 1-10!

**Mistake 2**: Forgetting the -1 for countdown
```python
for i in range(10, 0):  # ❌ Won't count!
    print(i)
```
**Fix**: Add `-1`: `range(10, 0, -1)`

## 📝 Self-Check Quiz
1. What does `range(5, 10)` print?
2. How do you count backwards?
3. Does `range(1, 5)` include 5?

<details>
<summary>Click for Answers</summary>

1. 5, 6, 7, 8, 9
2. Use negative step: `range(10, 0, -1)`
3. No! It stops before 5 (prints 1, 2, 3, 4)
</details>

## 🚀 Level Up Challenge!
Print all even numbers from 0 to 20!
Hint: Use `range(0, 21, 2)`

## 🌟 Show Your Parents!
"Look! I can make Python count any way I want - forwards, backwards, by 2s!"

You just unlocked the **Number Master** superpower! ⭐

**Next**: You're ready for turtle graphics!
