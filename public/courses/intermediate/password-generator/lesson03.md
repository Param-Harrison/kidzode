# Joining the Pieces 🛠️

## Quick Reminder
You learned to build a password by adding characters one at a time. Now let's learn a faster way!

## Your Mission
Python has a shortcut for joining things together. Let's learn the `.join()` method!

## The Problem with + 
When we use `password = password + char` many times, it's a bit slow. There's a better way!

## The .join() Method
First, we collect all characters into a list. Then we stick them together:

```python
parts = ["a", "b", "c", "d"]
password = "".join(parts)     # Makes: "abcd"
```

The `""` between the quotes is what goes BETWEEN each part. Empty quotes mean "nothing between them."

## What About "-" ?
```python
password = "-".join(parts)    # Makes: "a-b-c-d"
```

See? The dash goes between each letter!

## Try It!
1. Run the code to see the joined password
2. Change the `""` to `"-"` and see what happens
3. Try `"."` for dots between characters!

## What You Learned
✅ `.join()` connects list items into one string
✅ Whatever is in the quotes goes between each item
✅ Empty quotes `""` means no separator
