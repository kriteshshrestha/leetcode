/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    for(let i=0; i<s.length; i++)
    {
        let ch=s[i];
        if(ch=='('||ch=='['||ch=='{'){
            stack.push(ch);
        }
        else{
            let last=stack.pop();
            if(ch==')'&&last!='(' || ch==']'&&last!='[' || ch=='}'&&last!='{'){
                return false;
            }
        }
    }
    if(stack.length==0)
    {
            return true;
    }
    else
    return false;
};