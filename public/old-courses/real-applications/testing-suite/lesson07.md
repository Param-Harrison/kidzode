# Automatic Runner

Calling `tester.test_...` manually is annoying.
Let's make a method to run ALL tests automatically!
We call this a **Test Runner**.

```python
class ProTester:
    def test_one(self):
        assert True
        print("One passed")

    def test_two(self):
        assert True
        print("Two passed")

    # The Runner Method
    def run_all(self):
        self.test_one()
        self.test_two()
        print("All Done! 🏁")

tester = ProTester()
tester.run_all()
```

One command to rule them all! 💍

## Try This!
Add `test_three` and update `run_all` to call it!
