import logoPNG from "../asset/icon-logo.png"
export default function headerFactory() {
  const headerElement = document.createElement("header")

  const logoImg = new Image()
  logoImg.src = logoPNG

  const logoContainer = document.createElement("div")
  logoContainer.classList.add("logo-container")
  logoContainer.appendChild(logoImg)

  const title = document.createElement("h1")
  title.textContent = "Todo List"
  title.classList.add("uppercase")

  headerElement.appendChild(logoContainer)
  headerElement.appendChild(title)

  return headerElement
}
