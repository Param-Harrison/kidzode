# Final Challenge: The Cache 🧠

Calculations can be slow.
A **Cache** saves the result so we don't have to calculate it again.

**Your Mission:**
1. Create a dictionary `memory = {}` in your decorator.
2. In `wrapper(n)`:
   - If `n` is in memory, return it (Fast!).
   - If not, run `func(n)`, save it to memory, then return it.
3. Decorate a slow function and run it twice. The second time should be instant!

Go speed it up! 🏎️
