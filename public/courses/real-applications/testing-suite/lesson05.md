# More Tests = Better Sleep

One test isn't enough. We need to test many scenarios.
We call these **Test Cases**.

```python
def check_grade(score):
    if score >= 50:
        return "Pass"
    return "Fail"

def test_grading():
    # Case 1: High score
    assert check_grade(80) == "Pass"
    
    # Case 2: Low score
    assert check_grade(20) == "Fail"
    
    # Case 3: Edge Case (Exactly 50)
    assert check_grade(50) == "Pass"
    
    print("Testing complete! 🎓")

test_grading()
```

The "Edge Case" (50) is usually where bugs hide! 🕷️

## Try This!
Change `score >= 50` to `score > 50` (a bug) and see the test fail!
