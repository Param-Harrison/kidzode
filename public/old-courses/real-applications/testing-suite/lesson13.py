def check_age(age):
    if age < 18:
        return "Kid"
    else:
        return "Adult"

def test_coverage():
    # Covers line 2-3
    assert check_age(10) == "Kid"
    
    print("Tests ran (but incomplete coverage!)")

test_coverage()
