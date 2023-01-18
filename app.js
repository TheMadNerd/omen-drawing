class App extends React.Component {
	state = {
		options: ['Omen 1', 'Omen 2', 'Omen 3'],
		option: null,
		value: '',
	}

	omenRandomizer = () => {
		const index = Math.floor(Math.random() * this.state.options.length)
		this.setState({
			option: this.state.options[index],
		})
	}

	handleInputChange = e => {
		this.setState({
			value: e.target.value,
		})
	}

	omenAdd = () => {
		if (this.state.value === "") return alert('wpisz coś!')
		const options = [...this.state.options]
		options.push(this.state.value)
		this.setState({
			options,
		})
        alert(`Wróżba dodana. Aktualne wróżby: ${options}`)
	}

	render() {
		return (
			<>
				<button onClick={this.omenRandomizer}>Pokaż Wróżbę</button>
				<br />
				<input type="text" value={this.state.value} onChange={this.handleInputChange}></input>
				<button onClick={this.omenAdd}>Dodaj wróżbę</button>
				{this.state.option ? <h1>{this.state.option}</h1> : null}
			</>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'))
