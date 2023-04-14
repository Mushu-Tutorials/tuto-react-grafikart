class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstname: '',
      newsletter: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const type = event.target.type
    const value = type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    })
  }

  // state = {  }
  render() {
    console.log('render')
    return <div>
      <div>
        <label htmlFor="name">My name</label>
        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="firstname">My firstname</label>
        <input type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="newsletter">Newsletter</label>
        <input type="checkbox" name="newsletter" id="newsletter" checked={this.state.newsletter} onChange={this.handleChange} />
      </div>
      {JSON.stringify(this.state)}
    </div>
  }
}

ReactDOM.render(<Home />, document.querySelector('#app'))
