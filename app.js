let n = 0

function numberFormat(n) {
  return n.toString().padStart(2, '0')
}
function render() {
  const title = <h1>
    Bonjour tout le monde <span>{n % 2 ? numberFormat(n) : null}</span>
  </h1>
  ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
  n++
  render()
}, 1000)
