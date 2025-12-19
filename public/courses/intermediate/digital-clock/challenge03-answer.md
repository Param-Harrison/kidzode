### One way to solve it:

```python
import time

print("--- STOPWATCH ---")
input("Press ENTER to START...")
start = time.time()

input("Press ENTER to STOP...")
end = time.time()

duration = end - start
# round() helps make it look nicer!
print(f"Time: {round(duration, 2)} seconds")
```
