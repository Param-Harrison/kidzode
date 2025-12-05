def bad_math():
    return 1 / 0

try:
    bad_math()
    print("Test Failed! Should have crashed! ❌")
except ZeroDivisionError:
    print("Test Passed! It crashed correctly! ✅")
