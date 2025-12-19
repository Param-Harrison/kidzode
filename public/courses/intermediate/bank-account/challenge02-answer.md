### One way to solve it:

```python
my_balance = 100
friend_balance = 0

def transfer(amount):
    global my_balance, friend_balance
    my_balance -= amount
    friend_balance += amount
    print(f"Sent ${amount}!")

print("--- MONEY MOVER ---")
print(f"Me: ${my_balance} | Friend: ${friend_balance}")

transfer(20)

print(f"Me: ${my_balance} | Friend: ${friend_balance}")
```
