def multiplier_maker(n):
    def multiplier(x):
        return x * n
    
    return multiplier

doubler = multiplier_maker(2)
tripler = multiplier_maker(3)

print(doubler(10))
print(tripler(10))
