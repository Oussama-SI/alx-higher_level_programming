#!/usr/bin/python3
def uppercase(s):
    for char in s:
        if ord('a') <= ord(char) <= ord('z'):
            u_char = chr(ord(char) - ord('a') + ord('A'))
            print("{}".format(u_char), end='')
        else:
            print("{}".format(char), end='')
)
