import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onShowHideFirstName = () => {
    const {firstName} = this.state
    if (firstName === false) {
      this.setState(() => ({firstName: true}))
    } else {
      this.setState(() => ({firstName: false}))
    }
  }

  onShowHideLastName = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState(() => ({lastName: false}))
    } else {
      this.setState(() => ({lastName: true}))
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="carts-container">
          <div className="firstLastName-container">
            <button
              onClick={this.onShowHideFirstName}
              className="button"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstName && (
              <div className="name-container">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="firstLastName-container">
            <button
              onClick={this.onShowHideLastName}
              className="button"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {lastName && (
              <div className="name-container">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
