def even_or_odd(num) :
    """
    description : Check whether a number is even or odd
    param : enter a integer value 
    result : returns the result if the number provided is true or false
    """
    
    if num % 2 == 0 :
        return f'{num} is even number'
    else: 
        return f'{num} is odd number'
    
if __name__ == "__main__" :
    number = int(input("Enter the number: "))
    print(even_or_odd(number))