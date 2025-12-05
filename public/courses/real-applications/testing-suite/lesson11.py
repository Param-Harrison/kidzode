class UserTests:
    def setup(self):
        self.user = {"name": "Alice", "score": 0}

    def test_score(self):
        self.setup()
        assert self.user["score"] == 0

    def test_name(self):
        self.setup()
        assert self.user["name"] == "Alice"

t = UserTests()
t.test_score()
t.test_name()
print("Tests Passed!")
