# Parsing Commands

`get sword` is easy.
But what about `take the shiny sword`?
We need to clean the input.

```python
cmd = "take the shiny sword"
tokens = cmd.split()

verb = tokens[0] # "take"
# Simplest parser: assume last word is noun
noun = tokens[-1] # "sword"

if verb in ["take", "get", "grab"]:
    take_function(noun)
```

We map multiple words (`take`, `get`) to the same Action!

## Try This!
Handle `look`, `look at`, `examine` all doing the same thing.
