class ProTester:
    def test_one(self):
        assert True
        print("One passed")

    def test_two(self):
        assert True
        print("Two passed")

    def run_all(self):
        self.test_one()
        self.test_two()
        print("All Done! 🏁")

tester = ProTester()
tester.run_all()
