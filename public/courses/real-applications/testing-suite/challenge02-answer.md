# Solution

```python
class StringTests:
    def test_upper(self):
        assert "hi".upper() == "HI"
        print("Upper Pass")

    def test_lower(self):
        assert "HI".lower() == "hi"
        print("Lower Pass")

    def run(self):
        self.test_upper()
        self.test_lower()
        print("Strings are safe! 🧵")

runner = StringTests()
runner.run()
```

Output:
```
Upper Pass
Lower Pass
Strings are safe! 🧵
```
