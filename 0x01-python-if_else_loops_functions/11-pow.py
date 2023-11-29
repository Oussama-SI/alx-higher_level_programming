#!/usr/bin/python3
def pow(a, b):
    if b == 0:
        return 1

    result = a

    if b < 0:
        for j in range(1, -b):
            result *= a
        b = 1 / result
        return b
    else:
        for i in range(1, b):
            result *= a
        return result
