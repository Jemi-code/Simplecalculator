class Mode {
      constructor(_label, _color, _buBaColor) {
        this.label = _label;
        this.color =  _color;
        this.buBaColor = _buBaColor;
      }
      inputMode(){
        document.getElementById("label")
        .innerHTML = this.label + " Mode";

        document.getElementById("body")
        .style.background = this.color;
      }
}

let pinkMode = new Mode("Pink", "linear-gradient(45deg, midnightblue, pink, purple)");
let blueMode = new Mode("Blue", "linear-gradient(45deg, indigo, navy, darkslategray)");
let grayMode = new Mode("Gray", "linear-gradient(45deg, darkslategray, slategray, gray)");
let darkMode = new Mode("Black", "linear-gradient(45deg, black, #1F1F1F , darkslategray)");
let lightblueMode = new Mode("LightBlue", "linear-gradient(45deg, white, linen, silver)");

function actionMode(nameOfMode){
    nameOfMode.inputMode();
    document.getElementById("label")
    .innerHTML = nameOfMode.this.label;
}
