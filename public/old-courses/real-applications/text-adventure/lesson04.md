# The Map 🗺️

Rooms need exits.
We add an `exits` dictionary to our data.

```python
rooms = {
    "hall": {
        "desc": "Grand Hall",
        "exits": {"north": "kitchen"}
    },
    "kitchen": {
        "desc": "Kitchen",
        "exits": {"south": "hall"}
    }
}
```

Now "north" involves looking up `exits["north"]` -> `"kitchen"`.

## Try This!
Connect "kitchen" to "garden" via "east".
