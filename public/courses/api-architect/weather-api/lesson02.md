# Accessing Deep Data ⛏️

How do we get Tuesday's temperature?
We need to combine Dictionary and List access.

### The Logic
`weather["forecast"]` is a List.
`[1]` is the second item (Tuesday).
`["temp"]` is the value inside that item.

```python
temp = weather["forecast"][1]["temp"]
```

### Your Goal
1. Create the weather data.
2. Get the first day from the list (Index 0).
3. Get the "day" from that item.
4. Print: "First day is [day]".

### Achievement
⛏️ **Data Miner**: You dug deep into the JSON tree!
