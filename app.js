function WelcomeFunc({ name, children }) {
  return <div>
    <h1>Bonjour {name}</h1>
    <p>
      {children}
    </p>

  </div>
}

class Welcome extends React.Component {
  render() {
    return <div>
      <h1>Bonjour {this.props.name}</h1>
      <p>
        {this.props.children}
      </p>
    </div>
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = { date: new Date() }
    this.timer = null
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000)
  }
  // componentDidUpdate() { }
  componentWillUnmount() {
    window.clearInterval(this.timer)
  }
  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return <div>
      Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
    </div>

  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { n: props.start, m: props.step }
    this.timer = null
  }

  componentDidMount() {
    this.timer = window.setInterval(this.increment.bind(this), 1000)
  }
  // componentDidUpdate() { }
  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  increment() {
    this.setState(function (state, props) {
      return { n: state.n + state.m }
    })
  }

  render() {
    return <div>
      Value: {this.state.n}
    </div>
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1
}

class ManuelIncrement extends React.Component {
  constructor(props) {
    super(props)
    this.state = { n: 0, m: props.step }
  }

  manualIncrement(e) {
    console.log(e)
    e.preventDefault()

    this.setState(function (state, props) {
      return { n: state.n + 1 }
    })
  }

  render() {
    return <div>
      Manual Increment: {this.state.n} <button onClick={this.manualIncrement.bind(this)}>Increment</button>
    </div>
  }
}

function Home() {
  return <div>
    <Welcome name="John">Bonjour la maison de Jean</Welcome>
    <Welcome name="Bob" />
    <Clock />
    <ManuelIncrement />
    <Incrementer start={10} />
    <Incrementer start={100} step={10} />
  </div>
}

ReactDOM.render(<Home />, document.querySelector('#app'))
