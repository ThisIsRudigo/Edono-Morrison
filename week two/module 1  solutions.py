# -*- coding: utf-8 -*-
"""
Created on Fri May 12 13:20:35 2017

@author: Elder David Edono
"""
#%%
'''exercise 1'''
def areatriangle(b,h):
    area = 0.5 *b*h
    print ('area of a triangle with base',b,'and height',h, 'is' ,area)
#%%
areatriangle(3,5)
areatriangle(2,20)
#%%
'''exercise 2'''
def celsius_to_fahrenheit(temp):
    newTemp = (9/5)* temp + 32
    print ('The Celsius temperature',temp,'is equivalent to', newTemp, 'degrees Fahrenheit')
#%%
celsius_to_fahrenheit(100)
celsius_to_fahrenheit(0)
celsius_to_fahrenheit(50.)
#%%
'''exercise 3'''
def name():   
    """ Input first and last name, combine to one string and print 
        Also, input the city and state and print."""
    fname = input("Enter your first name: ")
    lname = input("Enter your last name: ")
    fullname = fname + " " + lname
    
    city = input('Enter your city name: ')
    state = input('Enter your State name: ')
    location = city + ',' + state

    print("Your name is:", fullname)
    print("You live in: ", location) 
#%%
'''exercise 4'''
def absolutevalue(num):
    if num > 0:
        new_num = num
        print ("the absolute value of",num , "is",new_num)
    elif num < 0:
        new_num = num * -1
        print ("the absolute value of",num , "is", new_num)
    elif num == 0:
        new_num = num
        print ("the absolute value of" ,num , "is",new_num)
    else:
        print ("hey i said input number")
#%%
absolutevalue(5)
absolutevalue(-5)
absolutevalue(4-4)
#%%
'''exercise 5'''
def inches_to_feet2():
    inches = input('please in put your values:')
    if inches:
        d_inches=int(inches)
        feet = d_inches//12
        new_inches = d_inches % 12
        print (inches, "inches is", feet,"feet and", new_inches, "inches")
#%%
'''exercise 3'''
def count_down():
    ct = 10
    while ct >0:
        print (ct,end= " ")
        ct = ct - 1
    print()
    print ("BLASTOFF !")
    #%%
def countdown1():
    ct=10
    for ct in range(10,0,-1):
        print (ct,end=" ")
    print()
    print("BLASTOFF!")
    #%%
def favorite():
    my_toy = input("What is my favorite toy? ")
    print("Your favorite toy is", my_toy)