def square(x):
    return x * x

def test_square():
    assert square(2) == 4, "2 squared should be 4"
    assert square(3) == 9, "3 squared should be 9"
    print("test_square passed! ✅")

test_square()
