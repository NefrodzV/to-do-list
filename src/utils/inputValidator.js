import events from "../events";

// Will validate and array of inputs
export default function inputValidator(inputs) {
    for(let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let data = input.value.trim();

        if(data.length === 0) {
            events.emit('displayInputError', input);
        }
    }
}