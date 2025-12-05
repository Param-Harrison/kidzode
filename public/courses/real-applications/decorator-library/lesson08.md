# Practical: Timing Code

Why use decorators? To measure speed!
Let's see how fast a function runs.

```python
import time

def timer(func):
    def wrapper():
        start = time.time()
        func()
        end = time.time()
        print(f"Time taken: {end - start} seconds")
    return wrapper

@timer
def slow_task():
    time.sleep(1) # Sleep for 1 second
    print("Task done!")

slow_task()
```

You'll see:
```
Task done!
Time taken: 1.00... seconds
```

We added a timer without touching `slow_task` code! ⏱️

## Try This!
Decorate a function that does nothing (`pass`)! How fast is it?
