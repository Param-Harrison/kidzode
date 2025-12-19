# Better than Caesar

Caesar shift is always the same (e.g. +1).
**Vigenere** changes the shift for every letter!
It uses a keyword (e.g., "KEY").

- Letter 1 shifts by 'K'
- Letter 2 shifts by 'E'
- Letter 3 shifts by 'Y'
- Letter 4 shifts by 'K' (repeats)

```python
# Concept Code (Simplified)
# 'A' (0) + 'A' (0) = 'A'
# 'A' (0) + 'B' (1) = 'B'
```

It's like having 26 different Caesar ciphers running at once! 🤯

## Try This!
(We will build this in the next lesson's code).
Just think: If key is "ABC", the shifts are +0, +1, +2.
