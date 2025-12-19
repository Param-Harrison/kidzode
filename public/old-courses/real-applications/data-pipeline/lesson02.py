import sys

# List
my_list = [i for i in range(10000)]
print(f"List size: {sys.getsizeof(my_list)} bytes")

# Generator
my_gen = (i for i in range(10000))
print(f"Gen size:  {sys.getsizeof(my_gen)} bytes")
