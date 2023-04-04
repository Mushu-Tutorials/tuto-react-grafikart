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

function Home () {
  return <div>
    <Welcome name="John">Bonjour la maison de Jean</Welcome>
    <Welcome name="Bob" />
  </div>
}

ReactDOM.render(<Home />, document.querySelector('#app'))