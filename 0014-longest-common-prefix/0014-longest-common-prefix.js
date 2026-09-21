/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let arr="";
    let first=strs[0];
    for(let i=0; i<first.length; i++)
    {
        let ch=first[i];
        for(let j=1; j<strs.length; j++)
        {
            if(ch!=strs[j][i])
            {
                return arr;
            }
                
        }
        arr=arr+ch;
    }
    return arr;
};