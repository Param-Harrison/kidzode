# Password Function

Let's wrap our password generator in a function!

```python
import random
import string

def generate_password():
    chars = string.ascii_letters + string.digits
    password = ""
    for i in range(8):
        password = password + random.choice(chars)
    print(password)

generate_password()
generate_password()
```

Now we can make passwords whenever we want!

**Pro Tip:** Functions keep your code organized!

## Try This!
Call `generate_password()` 5 times!
