# Solution

```python
quiz = [
    {"q": "1+1", "a": "2"},
    {"q": "2+2", "a": "4"},
    {"q": "3+3", "a": "6"},
    {"q": "4+4", "a": "8"},
    {"q": "5+5", "a": "10"}
]
answers = ["2", "4", "6", "99", "10"] # One wrong!

for i in range(5):
    if answers[i] == quiz[i]["a"]:
        print("Correct!")
    else:
        print("Wrong!")
```

Output:
```
Correct!
Correct!
Correct!
Wrong!
Correct!
```

You made a full quiz! 📝
