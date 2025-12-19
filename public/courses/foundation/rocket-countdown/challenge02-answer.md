### One way to solve it:

```python
import time

seconds = int(input("How many seconds until the alarm? "))

print("\n--- STANDBY ---")
for i in range(seconds, 0, -1):
    print(i, "...")
    time.sleep(1)

print("\nTIME IS UP!")
print("WAKE UP" + "!" * 50)
```
