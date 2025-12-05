class ScoredTester:
    def run_test(self, name, check):
        if check:
            print(f"{name}: PASS ✅")
        else:
            print(f"{name}: FAIL ❌")

t = ScoredTester()

t.run_test("Math Check", 2 + 2 == 4)
t.run_test("Bug Check", 2 + 2 == 5)
