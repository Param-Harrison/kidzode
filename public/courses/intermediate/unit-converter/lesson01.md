# The Conversion Logic 📐

## Your Mission
Engineers need precision! Today we're building a unit converter that transforms measurements with perfect accuracy.

## Converting Values
All conversions follow the same pattern: **multiply or divide by a number**

```python
# Kilometers to miles: multiply by 0.621
miles = kilometers * 0.621

# Miles to kilometers: multiply by 1.609
kilometers = miles * 1.609
```

## Using Functions
We can wrap each conversion in a reusable function:

```python
def km_to_miles(km):
    return km * 0.621
```

The `return` keyword sends the answer back!

## Try It!
1. Run the code
2. See the conversions work
3. Try different numbers!

## What You Learned
✅ Conversions are just multiplication or division
✅ Functions can `return` answers
✅ One function per conversion keeps things organized!
