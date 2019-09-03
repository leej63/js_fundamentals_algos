function bracesValid(str){
    var pairs = {
        ')' : '(',
        ']' : '{',
        '}' : '{',
    };
    var stack = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
            stack.push(braces[i]);
        }
        else if(stack[stack.length-1] === pairs[braces[i]]){
            stack.pop();
        }
        else{
            console.log("False")
            return false;
        }
    }
    console.log("True")
    return stack.length === 0;
}

console.log(bracesValid("[[[]]]())")); //false
