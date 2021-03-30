const brain = require('brain.js');

const net = new brain.NeuralNetwork();
const xor = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
];

function readInputs(stream, data) {
    for (let i = 0; i < data.length; i++) {
        stream.write(data[i]);
    }
    // let it know we've reached the end of the inputs
    stream.endInputs();
}

const trainingStream = new brain.TrainStream({
    neuralNetwork: net,
    /**
     * Write training data to the stream. Called on each training iteration.
     */
    floodCallback: function () {
        readInputs(trainingStream, xor);
    },

    /**
     * Called when the network is done training.
     */
    doneTrainingCallback: function (obj) {
        console.log(
            `trained in ${obj.iterations} iterations with error: ${obj.error}`
        );

        const result01 = net.run([0, 1]);
        const result00 = net.run([0, 0]);
        const result11 = net.run([1, 1]);
        const result10 = net.run([1, 0]);

        console.log('0 XOR 1: ', result01);
        console.log('0 XOR 0: ', result00);
        console.log('1 XOR 1: ', result11);
        console.log('1 XOR 0: ', result10);
    },
});

// kick it off
readInputs(trainingStream, xor);

// feed forward
const net = new brain.NeuralNetwork();
net.fromJSON(json);
net.run(input);

// time step
const net = new brain.LSTMTimeStep();
net.fromJSON(json);
net.run(input);

// recurrent
const net = new brain.LSTM();
net.fromJSON(json);
net.run(input);