// Create class
class Field extends React.Component {
  render() {
    const { name, value, onChange, children } = this.props
    return <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
    </div>
  }
}

// Create function
function Checkbox({ name, value, onChange, children }) {
  return <div className="form-check">
    <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input" />
    <label htmlFor={name} className="form-check-label">{children}</label>
  </div>
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstname: '',
      newsletter: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const type = event.target.type
    const value = type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = JSON.stringify(this.state)
    this.setState({
      name: '',
      firstname: '',
      newsletter: false
    })
  }

  render() {
    console.log('render')
    return <form className="container" onSubmit={this.handleSubmit}>
      <Field name="name" value={this.state.name} onChange={this.handleChange}>Nom</Field>
      <Field name="firstname" value={this.state.firstname} onChange={this.handleChange}>Prénom</Field>
      <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'inscrire a la newsletter</Checkbox>

      <div>
        <button className="btn btn-primary">Envoyer</button>
      </div>
      {JSON.stringify(this.state)}
    </form>
  }
}

ReactDOM.render(<Home />, document.querySelector('#app'))
