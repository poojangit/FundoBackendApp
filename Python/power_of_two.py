def power_of_two(num):
    """
    description : This program takes a command-line argument N and prints a table of the
    powers of 2 that are less than or equal to 2^N.
    params : The Power Value N. Only works if 0 <= N < 31 since 2^31 overflows an int
    result : Print the year is a Leap Year or not.
    """
    
    if(0<=num<31):
        for i in range (num+1):
            print(f'2**{i} = {2**i}')
    else:
        print("enter value between 0 & 31")
    
   
    
if __name__ == '__main__':
    power = int(input("Enter the power value: "))
    power_of_two(power)