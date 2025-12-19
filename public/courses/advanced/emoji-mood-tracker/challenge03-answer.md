### One way to solve it:

```python
print("--- AI MOOD READER ---")
diary = input("Tell me about your day: ")

happy = diary.count(":)")
sad = diary.count(":(")

print("\n--- ANALYSIS ---")
if happy > sad:
    print("Result: POSITIVE ✅")
elif sad > happy:
    print("Result: NEGATIVE ❌")
else:
    print("Result: NEUTRAL 😐")
```
