from datetime import datetime

now = datetime.now()
#date printing
print now
print now.year
print now.month
print now.day

print '%s/ %s/ %s' % (now.day, now.month, now.year)

#time printing
print '%s: %s: %s' %(now.hour, now.minute, now.second)

#printing time and date on same line
print '%s/%s/%s %s:%s:%s' %(now.year, now.day, now.month, now.minute, now.hour, now.second)
