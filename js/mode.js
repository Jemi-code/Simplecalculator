class Mode{
    constructor(_label, _color, _backgroColor, _buttColor){
        this.label = _label;
        this.color = _color;
        this.backgroColor = _backgroColor;
    }

    updateMode(){
        document.getElementById('label').innerHTML = this.label;
        let a = document.querySelectorAll('button');

        for(let i = 0; i < a.length; i++){
            a[i].style.color = this.color;
        }

        document.querySelector("body").style.backgroundColor = this.backgroColor;
    }
}

let simpleMode = new Mode("Simple Mode", "midnightblue", "wheat");
let darkMode = new Mode("Dark Mode", "black", "#1F1F1F");
let lightMode = new Mode("Light Mode", "darkblue", "linen");
let blueMode = new Mode("Blue Mode", "indigo", "navy");
let pinkMode = new Mode("Pink Mode", "papayawhip", "pink");

let a = document.querySelectorAll('button');
console.log(a);

const addMode = (nameOfMode) => {
    nameOfMode.updateMode();
}
