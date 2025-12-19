# Did We Test Everything?

**Code Coverage** means "Did we test every line of code?"

```python
def check_age(age):
    if age < 18:
        return "Kid"
    else:
        return "Adult"

def test_coverage():
    # Covers line 2-3
    assert check_age(10) == "Kid"
    
    # MISSING TEST for "Adult"! 
    # Line 5 is not covered! WARNING! ⚠️
    
    print("Tests ran (but incomplete coverage!)")

test_coverage()
```

If we delete line 5, the test still passes. That's bad!
We need a test for `age >= 18` too.

## Try This!
Add a test for `check_age(20)` to get 100% coverage!
