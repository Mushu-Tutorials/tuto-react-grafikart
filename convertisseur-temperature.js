const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit"
}

function toCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celcius) {
  return (celcius * 9 / 5) + 32
}

function BoilingVerdict({ celcius }) {
  if (celcius > 99) {
    return <div className="alert alert-success">L'eau bout</div>
  }

  return <div className="alert alert-danger">L'eau ne bout pas</div>
}

function tryConvert(temperature, convert) {
  const value = parseFloat(temperature)

  if (Number.isNaN(value)) {
    return ''
  }

  return (Math.round(convert(value) * 100) / 100).toString()
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const { temperature } = this.props
    const name = 'scale' + this.props.scale
    const scaleName = scaleNames[this.props.scale]
    console.log('TemperatureInput')
    return <div className="form-group">
      <label htmlFor={name}>Temperature (en {scaleName})</label>
      <input type="text" value={temperature} onChange={this.handleChange} id={name} name={name} className="form-control" />
    </div>
  }
}

function Button({ type, children }) {
  const className = 'btn btn-' + type
  return <button className={className}>{children}</button>
}

function PrimaryButton({ children }) {
  return <Button type="primary">{children}</Button>
}

function SecondaryButton({ children }) {
  return <Button type="secondary">{children}</Button>
}

function Column2({ left, right }) {
  return <div className="row">
    <div className="col-sm-6">{left}</div>
    <div className="col-sm-6">{right}</div>
  </div>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 20,
      scale: 'c'
    }
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelciusChange(temperature) {
    this.setState({
      temperature,
      scale: 'c'
    })
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature,
      scale: 'f'
    })
  }

  render() {
    const { temperature, scale } = this.state
    const celcius = scale === 'c' ? temperature : tryConvert(temperature, toCelcius)
    const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)
    console.log('Calculator')
    return <div>
      <Column2
        left={
          <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.handleCelciusChange} />
        }
        right={
          <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        } />
      <BoilingVerdict celcius={parseFloat(celcius)} />

      <Button type="danger">Envoyer</Button>
      <PrimaryButton type="primary">Primary</PrimaryButton>
      <SecondaryButton type="primary">Secondary</SecondaryButton>

      {JSON.stringify(this.state)}
    </div>
  }
}

ReactDOM.render(<Calculator />, document.querySelector('#app'))
