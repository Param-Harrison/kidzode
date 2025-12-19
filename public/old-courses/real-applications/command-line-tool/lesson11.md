# The Problem with Manual Parsing

Checking `sys.argv[2]` manually is dangerous.
What if the user messes up?
What if they type `calc.py --loud add 5 5`? Our index logic breaks!

We need a better way. We need a **Parser Class**.
Or... we can use Python's built-in `argparse` library!

(But first, let's understand why manual parsing is hard).

```python
# Fragile code:
# color = sys.argv[sys.argv.index("--color") + 1]
# CRASHES if --color is the last item!
```

## Try This!
Try to break your previous calculator by putting flags in weird places!
