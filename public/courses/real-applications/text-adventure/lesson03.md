# Places as Data

We shouldn't write `if room == "hall"`.
We should store rooms in a **Dictionary**.

```python
rooms = {
    "hall": {
        "description": "You are in a grand hall."
    },
    "kitchen": {
        "description": "It smells like bread."
    }
}

current_room = "hall"

# Access data dynamically!
print(rooms[current_room]["description"])
```

Now we can add 100 rooms without changing the code! 🤯

## Try This!
Add a "garden" room with a description.
