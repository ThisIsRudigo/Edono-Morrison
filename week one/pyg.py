pyg = 'ay'

original = raw_input('Enter a word: ')

if len(original) > 0 and original.isalpha():
    print original

    print "THE PYGLATIN TRANSLATION OF YOUR NAME IS: "
    
    word = original.lower()
    
    first = word[0]
    
    new_word = word+first+pyg
    
    new = new_word[1:len(new_word)]

    print new
    
else:
    print 'empty'
