function FindPrimeNumber (n) {
    // how many prime numbers found
    let count = 0 ;
    let i = 2 ;
    while (count != n)
    {
        let IsPrime = IsPrime(i) ;
        if (IsPrime)
        {
            count ++;
        }
        i ++;
    }

}

function IsPrime (n) {
    for (let i=n/2; i>=2; i--)
    {
        if (n%i===0)
        {
            return false;
        }
    }
    return true;
}