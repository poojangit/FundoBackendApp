def leap_year(year) :
    
    """
    Description: finding the year is leap year or not
    Params:
      Year, ensure it is a 4 digit number.
    Returns: Print the year is a Leap Year or not.
    """
    
    if year >= 1500:
        if(year%400 == 0):
            print(f"The year {year} is a leap year")
        elif(year%4 == 0) and (year%100!=0):
            print(f"The year {year} is a leap year")
        else:
            print(f"The year {year} is not a leap year")
    else : 
        print(f"Invalid year {year} please enter the year 1500 or after that")
    
    
if __name__ == '__main__' :
    year = int(input("Enter a year: "))
    leap_year(year)