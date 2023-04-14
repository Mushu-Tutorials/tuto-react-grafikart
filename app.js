class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jean',
      nametext: 'Jean a un texte',
      selectname: 'demo2',
      checked: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      nametext: event.target.value,
      selectname: event.target.value,
      checked: event.target.checked
    })
  }

  // state = {  }
  render() {
    return <div>
      {this.state.selectname}
      <label htmlFor="nom">My name</label>
      <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
      <textarea name="nametext" id="nametext" value={this.state.nametext} onChange={this.handleChange}></textarea>
      <select value={this.state.selectname} onChange={this.handleChange}>
        <option value="demo1">Demo 1</option>
        <option value="demo2">Demo 2</option>
        <option value="demo3">Demo 3</option>
      </select>
      <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
      {this.state.checked ? <div>Checkbox cochée</div> : null}
    </div>
  }
}

ReactDOM.render(<Home />, document.querySelector('#app'))
