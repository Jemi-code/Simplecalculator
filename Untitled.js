let num = [];

function addToArray(item) {
    num.push(item);
    let total = "";

     for(let i = 0; i<num.length; i++){
         total += num[i];
     }

     document.getElementById("screen")
     .innerHTML = total;
}

function reset(){
    // num.splice(0, num.length);

    while(num.length > 0){
        num.pop();
    }

    document.getElementById("screen")
    .innerHTML = "";

    document.getElementById("answer")
    .innerHTML = "";
}

function solve(){
    let total = "";
    for(let i=0; i<num.length; i++){
        total += num[i];
    }

    let answer = eval(total);

    document.getElementById("answer")
    .innerHTML = answer;

    while(num.length > 0){
        num.pop();
    }

    num.push(answer.toString());
}

function removeOnce(){
    num.pop();

     let total = "";

     for(let i = 0; i<num.length; i++){
         total += num[i];
     }

     document.getElementById("screen")
     .innerHTML = total;
}
