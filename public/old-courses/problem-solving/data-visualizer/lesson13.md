# Growth Indicator

Did we do better than last time?
Use arrows! ⬆️ ⬇️

```python
yesterday = 100
today = 120

if today > yesterday:
    print(f"Sales: {today} (⬆️ +{today - yesterday})")
elif today < yesterday:
    print(f"Sales: {today} (⬇️ -{yesterday - today})")
else:
    print(f"Sales: {today} (➡️ 0)")
```

You'll see:
```
Sales: 120 (⬆️ +20)
```

Stock markets use this all the time!

## Try This!
Check if your score improved from last game!
