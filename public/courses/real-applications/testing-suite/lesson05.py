def check_grade(score):
    if score >= 50:
        return "Pass"
    return "Fail"

def test_grading():
    assert check_grade(80) == "Pass"
    assert check_grade(20) == "Fail"
    assert check_grade(50) == "Pass"
    print("Testing complete! 🎓")

test_grading()
