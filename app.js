// Create class

// Create function
function BoilingVerdict({ celcius }) {
  if (celcius > 99) {
    return <div className="alert alert-success">L'eau bout</div>
  }

  return <div className="alert alert-info">L'eau ne bout pas</div>
}

ReactDOM.render(<BoilingVerdict celcius={110} />, document.querySelector('#app'))
