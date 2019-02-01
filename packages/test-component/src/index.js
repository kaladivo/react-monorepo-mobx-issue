import React, {Fragment} from 'react'
import {action, decorate, computed, observable} from 'mobx'
import {observer} from 'mobx-react'

class Store {
	_number = 0

	increment = () => {
		this._number++
	}

	get number() {
		return String(this._number)
	}
}

// All of those are defined
console.log('TEST', {action, decorate, computed, observable, observer})

decorate(Store, {
	_number: observable,
	increment: action,
	number: computed,
})

class TestComponent extends React.Component {
	static defaultProps = {
		clickableComponent: 'button',
		numberElement: 'div',
	}

	store = new Store()

	render() {
		const {clickableComponent: ClickableComponent, numberElement: NumberElement} = this.props
		const {number, increment} = this.store

		return <Fragment>
			<ClickableComponent onClick={increment}>Incremenet</ClickableComponent>
			<NumberElement>{number}</NumberElement>
		</Fragment>
	}
}

export default observer(TestComponent)
