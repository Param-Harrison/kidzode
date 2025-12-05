# Score Keeping

Good testers keep score. How many passed? How many failed?

```python
class ScoredTester:
    def run_test(self, name, check):
        if check:
            print(f"{name}: PASS ✅")
        else:
            print(f"{name}: FAIL ❌")

t = ScoredTester()

t.run_test("Math Check", 2 + 2 == 4)
t.run_test("Bug Check", 2 + 2 == 5)
```

You'll see:
```
Math Check: PASS ✅
Bug Check: FAIL ❌
```

Now we have a report card! 📊

## Try This!
Add a test "Python Check" to check if `len("Hi") == 2`.
