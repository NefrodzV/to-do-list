import events from "../../events"
import projectDetails from "./projectDetails"

export default function layerFactory() {
  const LAYER_STYLE = "layer"

  const layerElement = document.createElement("div")
  layerElement.classList.add(LAYER_STYLE)

  const toggleVisibility = () => {
    layerElement.toggleAttribute("visible")
  }

  const detailsElement = projectDetails(() => {
    toggleVisibility()
  })

  const disableLayer = () => {
    if (!layerElement.hasAttribute("visible")) return
    layerElement.removeAttribute("visible")
  }
  layerElement.appendChild(detailsElement)

  events.on("updateLayerVisibility", toggleVisibility)

  return {
    layerElement,
    disableLayer,
  }
}
