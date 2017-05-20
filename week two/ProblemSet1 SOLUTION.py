# - ProblemSet1.py *- coding: utf-8 -*-
"""
Each problem will be a function to write. 

Remember that you can execute just the code between the #%% signs by clicking
somewhere in that space and then using Ctrl-Enter (Cmd-Return on a Mac). An
alternative is to use the second toolbar green triangle or Menu>Run>Run cell.

On loops especially, you can make an error that causes the program to run
forever. If you don't get immediate response, then this is probably happening.
In that case, try Ctrl-C. If that doesn't stop it, click your IPython console
away and open a new one from the Consoles menu. Look over your code and see 
why the termination condition can't be met and fix it. Then run again.

You can submit your work in two ways. One is simply to upload this file. This
is the easiest way to go provided that you haven't corrupted it.  To make sure
that it isn't corrupted, run the whole file by clicking the left green triangle
above.  If it is corrupted, you can fix it or submit just your function as 
described next.
To submit only a single function, copy the material between the two #%% into
a text file using this Spyder editor (Choose menu File>New File... to get a 
new file and then copy your function from between the #%%'s. Don't use a word 
processor, but you can use a text editor such as Notepad in Windows or TextEdit 
on the Mac. Save your new file as problemx.py (where x is the problem number). 
Upload this file to Coursera.  Note that the grading program is going to run 
the function with the name specified, so don't change the function name (it 
doesn't matter what you name the file itself).

Note: each of the functions below is made runnable by adding the statement
pass.  This is a do-nothing statement.  You should replace it with your code,
but its present doesn't affect how your code runs. 
"""

""" 
Problem 1_1:
Write a function problem1_1() that prints "Problem Set 1". 

Tip: Be careful that your program outputs this exact phrase with no additional 
characters.  It will be graded automatically and must be precise.  Here is the
run of my solved problem 1_1:

problem1_1()
Problem Set 1

Note the problem1_1() is what I typed to run the problem and "Problem Set 1" is
what it printed out.  There will typically be a sample run such as this either 
before or after the statement of each problem. This helps clarify what you
are expected to do and shows how the auto-grader expects it to look.

"""
#%%
def problem1_1():
    print ("Problem Set 1")

    
#%%

"""
Problem 1_2:
Write a function problem1_2(x,y) that prints the sum and product of the
numbers x and y on separate lines, the sum printing first.
"""

def problem1_2(x,y):
    addition = x + y
    product = x * y
    print ('the sum of',x, 'and', y, 'is:', addition)
    print ('the product of',x, 'and', y, 'is:', product)
#%% 
problem1_2(3,5)
#%% 
"""
Problem 1_3:  
Write a function problem1_3(n) that adds up the numbers 1 through n and
prints out the result. You should use either a 'while' loop or a 'for' loop.
Be sure that you check your answer on several numbers n.  Be careful that your
loop steps through all the numbers from 1 through and including n.

Tip: As this involves a loop you could make an error that causes it to run 
forever. Usually Control-C will stop it. See suggestions at the beginning of 
this document.  With loops take care that your first and last iterations are
what you expect. A print statement can be inserted in the loop to monitor it, 
but be sure this isn't in the submitted function.
"""
#%%
def problem1_3(n):
    su =0
    for i in range(n+1):
        su += i
    print (su)
        
problem1_3(6)
        #%%
problem1_3(6)
21
#%%
"""
Problem 1_4:
Write a function 'problem1_4(miles)' to convert miles to feet. There are
5280 feet in each mile. Make the print out a statement as follows:
"There are 10560 feet in 2 miles."  Except for the numbers this statement 
should be exactly as written.

Tip: Watch the spacing before and after your numbers.  Make sure that it is 
just one space or the auto-grader may not give you credit.
"""
#%%
def problem1_4(miles):
    new_feet = (5280 * miles)/1
    print ("There are", new_feet, "in",miles, "miles")           

    #%%
"""
Test run. Note that the grader program will use different numbers:
"""
problem1_4(5)
#There are 26400 feet in 5 miles.
#%%
"""
Problem 1_5:
Write a function 'problem1_5(age)'. This function should use if-elif-else
statement to print out "Have a glass of milk." for anyone under 7; "Have
a coke." for anyone under 21, and "Have a martini." for anyone 21 or older.

Tip: Be careful about the ages 7 (a seven year old is not under 7) and 21.
Also be careful to make the phrases exactly as shown for the auto-grader.
"""
#%%
def problem1_5(age):
    if age > 21:
        print('Have amartini')
    elif age > 7 and age < 21:
        print ("Have a coke")
    else:
        print("Have a glass of milk")
    
#%%

problem1_5(5)
#Have a glass of milk.

problem1_5(10)
#Have a coke.

problem1_5(25)
#Have a martini.

#%%

"""
Problem 1_6:
Write a function 'problem1_6()' that prints the odd numbers from 1 through 100.
Make all of these numbers appear on the same line (actually, when the line
fills up it will wrap around, but ignore that.). In order to do this, your
print statement should have end=" " in it. For example, print(name,end=" ") 
will keep the next print statement from starting a new line. Be sure there is a
space between these quotes or your numbers will run together. Use a single 
space as that is what the grading program expects. Use a 'for' loop 
and a range() function. 

Things to be careful of that might go wrong: You print too many numbers, you
put too much or too little space between them, you print each number on its 
own line, you print even numbers or all numbers, your first number isn't 1 or
your last number isn't 99.  Always check first and last outputs when you write
a loop.
"""
#%%
def problem1_6():
    for i in range(0,100):
        if i%2 != 0:
            print(i,end=" ")

        
#give = [1, 3, 5, 7, 9, 11, 13 ,15, 17, 19 ,21, 23, 25, 27, 29, 31, 33, 35 ,37, 39, 41, 43, 45, 47, 49, 51, 53, 55,end=" " 
#57, 59, 61, 63, 65, 67 ,69 ,71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]    
#%% 

#"Test run (I've inserted a newline here to cause wrapping in the editor):"

problem1_6()
 lists[1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55  
57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99]
 
#%%     
"""
Problem 1_7:
Write a function problem1_7() that computes the area of a trapezoid. Here is the
formula: A = (1/2)(b1+b2)h. In the formula b1 is the length of one of the 
bases, b2 the other. The height is h and the area is A. Basically, this 
takes the average of the two bases times the height. For a rectangle b1 = b2, 
so this reduces to b1*h. This means that you can do a pretty good test of the 
correctness of your function using a rectangle (that way you can compute the 
answer in your head). Use input statements to ask for the bases and the height.
Convert these input strings to real numbers using float(). Print the output
nicely EXACTLY like mine below.

Tip: Be careful that your output on the test case below is exactly as shown
so that the auto-grader judges your output correctly.  The auto-grader does
not look at your input statements, so you don't have to use my input prompts
if you don't want to. However, the auto-grader will enter the three inputs in
the order shown. See the other test run below.

problem1_7()

Enter the length of one of the bases: 3

Enter the length of the other base: 4

Enter the height: 8
The area of a trapezoid with bases 3.0 and 4.0 and height 8.0 is 28.0

"""  
#%%
def problem1_7():
    print ("Please specify between trapezoid and rectangle")
    choice = input("choice : ",  )
    if choice=="trapezoid":    
        base1 = input("Please type in the value of the first base b1:" )
        b1 = int(base1)
        
        base2 = input("Please type in the value of the second base b2:" )
        b2 = int(base2)

        height = input ("Please type in the value of the height h:" ) 
        h=int(height)
        area_trapezoid = 1/2*(b1 + b2)* h
        print ("the area of a trapezoid with bases",b1 ,"and",b2, "and height of", h, "is",area_trapezoid )
    
    elif choice=="rectangle":
        base = input("Please type in the value of base b:" )
        b = int(base)
        
        height1 = input ("Please type in the value of the height h:" )
        h=int(height1)
        area_rectangle = 1/2*b*h
        print ("the area of a rectangle with bases ",b, "and height of ", h, "is " ,area_rectangle )

#%%
Another test run. In grading, expect different input numbers to be used.

"run this on word to be able to imput your values"  problem1_7()


 
    
