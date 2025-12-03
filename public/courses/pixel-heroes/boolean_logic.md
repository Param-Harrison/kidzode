# Combine Conditions

Want to check multiple things at once? Use `and`, `or`, and `not`! Press Run to see how they work.

```python
# AND - both must be true
age = 10
has_ticket = True

if age >= 8 and has_ticket:
    print("You can ride the roller coaster!")
else:
    print("Sorry, you need to be 8+ AND have a ticket")

# OR - at least one must be true
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("No school today!")
else:
    print("Time for school!")

# NOT - opposite
is_raining = False

if not is_raining:
    print("Let's play outside!")
else:
    print("Let's play inside!")
```

**The rules:** `and` means BOTH must be true. `or` means AT LEAST ONE must be true. `not` means the OPPOSITE (true becomes false, false becomes true).

Try making a game entrance checker - check age AND ticket, or maybe VIP status!
