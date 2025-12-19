# The Perfect Test Suite

A perfect test suite has:
1. **Organization** (Classes)
2. **Setup** (Fresh data)
3. **Coverage** (Tests all paths)

```python
class PerfectSuite:
    def setup(self):
        self.data = [1, 2, 3]

    def test_length(self):
        self.setup()
        assert len(self.data) == 3

    def test_sum(self):
        self.setup()
        assert sum(self.data) == 6
    
    def run(self):
        self.test_length()
        self.test_sum()
        print("Suite Complete! 🌟")

s = PerfectSuite()
s.run()
```

This is how pros do it!

## Try This!
Add `test_max()` to assert the max is 3!
