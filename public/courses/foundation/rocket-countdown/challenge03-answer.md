### One way to solve it:

```python
import time

goal = int(input("Enter race goal: "))

print("Getting ready...")
time.sleep(1)

for i in range(1, goal + 1):
    print(i)
    time.sleep(0.5)

print("GO! 🏁")
print("🏎️ 💨")
```
