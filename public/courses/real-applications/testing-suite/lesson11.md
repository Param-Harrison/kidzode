# Getting Ready (Setup)

Tests often need the same data (like a user).
Instead of creating it in every test, we use a `setup` method.

```python
class UserTests:
    def setup(self):
        # Create a fresh user before EACH test
        self.user = {"name": "Alice", "score": 0}

    def test_score(self):
        self.setup() # Run setup manually (frameworks do this automatically)
        assert self.user["score"] == 0

    def test_name(self):
        self.setup()
        assert self.user["name"] == "Alice"

t = UserTests()
t.test_score()
t.test_name()
print("Tests Passed!")
```

This ensures every test starts fresh! 🧼

## Try This!
Change `self.user` name to "Bob" in setup and see tests fail!
