def numbers():
    yield 1
    yield 2
    yield 3
    yield 4

def only_evens(nums):
    for n in nums:
        if n % 2 == 0:
            yield n

def times_ten(nums):
    for n in nums:
        yield n * 10

chain = times_ten(only_evens(numbers()))

print(list(chain))
