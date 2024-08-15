// imc 


function bmi(weight, height) {
    return {
        weight: weight,
        height: height,

        calculate_bmi: function() {
            let bmi = (this.weight / (this.height * this.height)).toFixed(1);

            switch (true) {
                case (bmi < 16.9):
                    return 'Underweight';
                case (bmi >= 17 && bmi <= 18.4):
                    return 'Mildly underweight';
                case (bmi >= 18.5 && bmi <= 24.9):
                    return 'Normal weight';
                case (bmi >= 25 && bmi <= 29.9):
                    return 'Overweight';
                case (bmi >= 30 && bmi <= 34.9):
                    return 'Obesity class I';
                case (bmi >= 35 && bmi <= 39.9):
                    return 'Obesity class II';
                default:
                    return 'Obesity class III';
            }
        }, 

        message: function(){ 
            return 'this is a way to work with objects - OOP'
        },
    };
}

let result = bmi(80,1.80).calculate_bmi();
let text = bmi(80, 1.80).message()
console.log(result)
console.log(text)
