# Bad JSON! 🛑

If JSON data is broken, Python will crash!
We can catch errors with `try/except`.

```python
import json

bad_json = '{"name": "Bond", "agent": 007}' # Bad! 007 is invalid number format

try:
    data = json.loads(bad_json)
except json.JSONDecodeError:
    print("Oops! Bad JSON data!")
```

**Why is it bad?** JSON numbers cannot have leading zeros (like 007).

You'll see:
```
Oops! Bad JSON data!
```

Safety first! ⛑️

## Try This!
Fix the JSON string to be valid! (Use `"007"` string or just `7`)
