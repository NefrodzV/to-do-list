import events from "../events"

// Will validate and array of inputs
export default function inputValidator(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]
    const data = input.value.trim()

    if (data.isEmpty()) {
      events.emit("displayInputError", input)
    }
  }
}
