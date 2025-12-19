# Hints

## 🟢 Hint 1
Define functions inside the class (remember `self`!):
`def test_upper(self):`

## 🟡 Hint 2
Use assert: `assert "hi".upper() == "HI"`

## 🔴 Hint 3
The run method:
```python
def run(self):
    self.test_upper()
    self.test_lower()
```
Then `StringTests().run()`
