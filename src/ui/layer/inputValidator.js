import events from "../../events";

export default function inputValidator(inputs) {
    for(let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let data = input.value;
        if(data === '') {
            events.emit('displayInputError', input);
        }
    }
}