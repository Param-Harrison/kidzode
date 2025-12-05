import sys

small = [1, 2, 3]
print(f"Size of small list: {sys.getsizeof(small)} bytes")

medium = [i for i in range(1000)]
print(f"Size of mean list: {sys.getsizeof(medium)} bytes")
