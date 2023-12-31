import getSystemDate from "./getSystemDate"

export default function Transform() {
  function replaceElement(oldElement, elementType, type, value, callback) {
    const newElement = document.createElement(elementType)
    newElement.type = type
    newElement.value = value
    newElement.placeholder = "Enter new field value and press enter"
    if (type === "date") {
      newElement.style.marginInlineStart = "auto"
      newElement.min = getSystemDate()
    }
    if (value === undefined) {
      newElement.value = ""
    }
    newElement.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        if (newElement.value.trim().isEmpty() === 0) {
          newElement.classList.add("error")
          return
        }

        event.preventDefault()
        callback(newElement.value)
        event.target.blur()
      }
    })

    newElement.addEventListener("focusout", () => {
      undoTransform(newElement, oldElement)
    })

    oldElement.replaceWith(newElement)
    newElement.focus()
  }

  function undoTransform(newElement, oldElement) {
    newElement.replaceWith(oldElement)
  }

  return {
    replaceElement,
  }
}
