### One way to solve it:

```python
print("--- STORE CHECKOUT ---")
price = int(input("Price per item: $"))
qty = int(input("How many? "))

total = price * qty

print("\n--- RECEIPT ---")
print("You bought", qty, "items.")
print("Total to pay: $", total)
print("Thank you!")
```
