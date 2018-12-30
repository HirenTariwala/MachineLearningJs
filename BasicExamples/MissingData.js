const tf = require('@tensorflow/tfjs');

let age = [44,27,30,38,40,35,48,50,37];

let salary = [72000,48000,54000,61000,58000,52000,79000,83000,67000];

let meanOfage = tf.tensor1d(age).mean();

let meanOfsalery = tf.tensor1d(salary).mean();

meanOfage.print();

meanOfsalery.print();

let data = tf.tensor2d([["Fr",44.0,72000.00], ["Sp",27.0,48000.00],["Gr",30.0,54000.00],["Sp",38.0,61000.00],["Gr",40.0,NaN],["Fr",35.0,58000.00],["Sp",NaN,52000.00],["Fr",48,79000.00],["Gr",50.0,83000.00],
["Fr",37.0,67000.00]]);

data.print();