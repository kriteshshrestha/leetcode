/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num=x,rem,sum=0;
    if(x<0)
        return false;

    while(num!=0)
    {
        rem=num%10;
        sum=sum*10+rem;
        num=Math.floor(num/10);
    }
    if(sum==x)
        return true;

    else
        return false;
};