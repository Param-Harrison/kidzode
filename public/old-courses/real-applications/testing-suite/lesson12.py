def test_weather_display():
    fake_weather = "Rainy" 
    
    message = f"It is {fake_weather} today."
    
    assert message == "It is Rainy today."
    print("Mock test passed! 🎭")

test_weather_display()
