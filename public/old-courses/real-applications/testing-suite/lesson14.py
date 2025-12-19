class PerfectSuite:
    def setup(self):
        self.data = [1, 2, 3]

    def test_length(self):
        self.setup()
        assert len(self.data) == 3

    def test_sum(self):
        self.setup()
        assert sum(self.data) == 6
    
    def run(self):
        self.test_length()
        self.test_sum()
        print("Suite Complete! 🌟")

s = PerfectSuite()
s.run()
