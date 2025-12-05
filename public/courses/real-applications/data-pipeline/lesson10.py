nums = range(10)

pipeline = (n * 2 for n in nums if n > 5)

print(list(pipeline))
