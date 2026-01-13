# Answer ✅
```python
message = input("Feeling? ").lower()
happy = message.count("happy") + message.count("good")
sad = message.count("sad") + message.count("bad")
score = happy - sad
if score > 0: print("😊")
elif score < 0: print("😢")
else: print("😐")
```
