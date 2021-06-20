import React from 'react'
import CatBtn from './components/cat'
import DogBtn from './components/dog'
import './components/styles.css'
export default class App extends React.Component {
	constructor() {
		super()
		this.state = {

		}

	}
	render() {
		return (
			<div>
				<h1>Vote</h1>
				<CatBtn />
				<DogBtn />
			</div>
		)
	}
}

