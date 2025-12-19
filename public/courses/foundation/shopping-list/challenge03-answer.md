### One way to solve it:

```python
supplies = ["Pen", "Paper", "Tape"]
print("School Supply Search...")

find = input("What do you need? ")

if find in supplies:
    print("✅ Yes, we have that in the bag!")
else:
    print("❌ No, we need to buy that.")
```
