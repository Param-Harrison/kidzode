# Combine Strings with +

Let's glue strings together!

Use `+` to join strings!

```python
first_name = "Jack"
last_name = "Smith"
full_name = first_name + last_name
print(full_name)
```

You'll see:
```
JackSmith
```

Oops! No space! Let's fix it:

```python
full_name = first_name + " " + last_name
print(full_name)
```

Now you get:
```
Jack Smith
```

Strings glued together! The `+` joins them!

**How it works:**
- `first_name + " "` = "Jack "
- `"Jack " + last_name` = "Jack Smith"

## Try This!
Add more: `"Hello " + first_name + "!"`
