# Retry Logic

Real apps fail (internet issues).
We can make a decorator that **Retries** automatically!

```python
import random

def retry(func):
    def wrapper():
        # Try up to 3 times
        for i in range(3):
            try:
                return func()
            except ValueError:
                print(f"Failed! Retrying... ({i+1}/3)")
        
        print("Gave up!")
    return wrapper

@retry
def risky_task():
    if random.randint(1, 100) > 20: # 80% chance to fail
        raise ValueError("Bad luck!")
    print("Success! 🎉")

risky_task()
```

It tries again and again until it works (or runs out of tries)! 🔄

## Try This!
Make it retry 5 times!
