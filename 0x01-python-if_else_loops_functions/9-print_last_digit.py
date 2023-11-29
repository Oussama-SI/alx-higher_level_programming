#!/usr/bin/python3
def print_last_digit(number):
    if number < 0:
        s = number % -10
        print("{}".format(-s), end="")
        return -s
    else:
        s = number % 10
        print("{}".format(s), end="")
        return s
