import {Component} from 'react'
import User from './components/User'
import './App.css'

class App extends Component {
  state = {id: '', name: '', dob: '', designation: '', employData: []}

  emptyFields = () => {
    this.setState({id: '', name: '', dob: '', designation: ''})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {id, name, dob, designation} = this.state
    const user = {
      id,
      name,
      dob,
      designation,
    }
    this.setState(
      prevState => ({employData: [...prevState.employData, user]}),
      this.emptyFields,
    )
  }

  getID = event => {
    this.setState({id: event.target.value})
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  getDOB = event => {
    this.setState({dob: event.target.value})
  }

  getDesignation = event => {
    this.setState({designation: event.target.value})
  }

  render() {
    const {id, name, dob, designation, employData} = this.state
    return (
      <div className="container">
        <h1>Add an Employee</h1>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="employ-id">
            Employee Id :
            <input
              type="text"
              id="employ-id"
              className="form"
              onChange={this.getID}
              value={id}
            />
          </label>
          <br />
          <label htmlFor="employ-name">
            Employee Name :
            <input
              type="text"
              id="employ-name"
              className="form"
              onChange={this.getName}
              value={name}
            />
          </label>
          <br />
          <label htmlFor="dob">
            Date Of Birth :
            <input
              type="date"
              id="dob"
              className="form"
              onChange={this.getDOB}
              value={dob}
            />
          </label>
          <br />
          <label htmlFor="designation">
            Designation :
            <input
              type="text"
              id="designation"
              className="form"
              onChange={this.getDesignation}
              value={designation}
            />
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
        {employData.length !== 0 && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>EmployId</th>
                  <th>EmployName</th>
                  <th>DateOfBirth</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {employData.map(eachItem => (
                  <User userDetails={eachItem} key={eachItem.id} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }
}

export default App
