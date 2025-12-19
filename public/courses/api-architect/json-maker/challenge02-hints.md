# Hints for Config File

## 🟢 Hint 1
The video key needs `{}` inside it:
```python
"video": {"fps": 60}
```

## 🟡 Hint 2
To get FPS, go two levels deep:
```python
val = config["video"]["fps"]
```

## 🟠 Hint 3
Don't forget the quotes around the keys!
