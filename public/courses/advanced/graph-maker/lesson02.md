# The Weekly Report 📅

## Quick Reminder
You learned the "Rubber Stamp" trick to draw bars. Now, let's build a full report!

## Your Mission
The CEO of "Kidzode Coffee" needs a chart showing how many cups were sold every day this week. We have a list of numbers, and we need to turn them into a row of bars.

## Drawing the Rows
We combine everything we've learned: **Lists**, **Loops**, and **String Multiplication**.

```python
sales = [5, 8, 12, 4, 10]
days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

for i in range(len(sales)):
    day_name = days[i]
    count = sales[i]
    bar = "█" * count
    print(day_name, "|", bar)
```

## Try It!
1. Look at the `sales` and `days` lists.
2. Click **Run** to see the weekly chart.
3. **Challenge:** Change Wednesday's value to `20`. Look at that spike! 📈

## What You Learned
✅ A **Chart** is just a loop that prints a new bar for every item in a list.
✅ Using `range(len(list))` lets you pull data from two lists at the same time.
✅ Adding labels (like "Mon |") makes your data much easier to read.

## Achievement Unlocked! 🏆
**Chart Champion**: You successfully visualized a whole week of data! 📊
