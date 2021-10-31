let num = [];

const makeString = () => {
    let str = "";
    for(let i = 0; i < num.length; i++){
        str += num[i];
    }

    document.getElementById("answer").innerHTML = str;
}

const displayNum = (char) => {
    num.push(char);
    makeString();
}

const delOnce = () => {
    num.pop();
    makeString();
    
    if(num.length === 0){
        document.getElementById("answer").innerHTML = 0;
    }
}

const delAll = () => {
    num.splice(0, num.length);

    document.getElementById("answer").innerHTML = 0;
    document.getElementById("history").innerHTML = 0;
}

const ans = () => {
    let total = "";

    for(let i = 0; i<num.length; i++){
        total += num[i];
    }

    let answer = eval(total);

    document.getElementById("answer").innerHTML = answer;

    num.splice(0, num.length);

    num.push(answer);
    document.getElementById("history").innerHTML = answer;
}