class TestMath:
    def test_add(self):
        assert 1 + 1 == 2
        print("Addition works!")

    def test_sub(self):
        assert 5 - 3 == 2
        print("Subtraction works!")

tester = TestMath()
tester.test_add()
tester.test_sub()
