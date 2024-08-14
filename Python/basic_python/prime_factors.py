def prime_factors(n) :
    i = 2
    while i*i <= n: 
        if n%i == 0:
            print(i)
            n //=i
        else : 
            i += 1
    if n > 1: 
        print(n)
        
if __name__ == '__main__':
    number = int(input("Enter a number to get its prime factors: "))
    print(prime_factors(number))