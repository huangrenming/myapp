
const WIDTH = 1920
const screenWidth = screen.width
const setView = () => {
  document.documentElement.style.fontSize = (100 * screenWidth / WIDTH) + 'px'
}
window.addEventListener('resize', () => {
  setView()
})
setView()
