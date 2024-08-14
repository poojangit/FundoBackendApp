def quotient_reminder(num, divisor) :
    
    """
    description : to calculate the quotient and reminder of a given number
    params : 2 params num and divisor 
    result : return the remainder and quotient
    """
    if(divisor == 0):
        return "Error: divisor cannot be 0 please enter valid divisor"
    remainder = num % divisor
    quotient = num //divisor
    return remainder, quotient
    
if __name__ == "__main__" :
    num = int(input("Enter the number: "))
    divisor = int(input("Enter the divisor: "))
    remainder,quotient = quotient_reminder(num, divisor)
    print(f'the number {num} remainder is {remainder} and quotient is {quotient}')