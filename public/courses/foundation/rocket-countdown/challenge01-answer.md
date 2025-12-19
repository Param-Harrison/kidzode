### One way to solve it:

```python
import time

seconds = int(input("How many seconds until launch? "))

print("Countdown initiated...")

for i in range(seconds, 0, -1):
    print(i, "...")
    time.sleep(1)

print("🚀 LIFT OFF! 🚀")
```
