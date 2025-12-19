# Fake It Till You Make It (Mocking)

Sometimes we need data that is hard to get (like from the internet).
We use **Fake Data** (Mocks).

```python
# Real function (simulated slow internet)
def get_weather_from_web():
    return "Sunny" # Imagine this takes 5 seconds!

# Test with fake data
def test_weather_display():
    # Fake the data
    fake_weather = "Rainy" 
    
    # Test our logic with fake data
    message = f"It is {fake_weather} today."
    
    assert message == "It is Rainy today."
    print("Mock test passed! 🎭")

test_weather_display()
```

We tested our logic without waiting for the internet!

## Try This!
Change `fake_weather` to "Snowy"!
