import React, { Component } from 'react'

export default class Formulario extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      price: '',
      photo: '',
      description: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <form onSubmit={this.handleSubmit} >
          <div>
            <div>
              <label htmlFor="name">Name:</label>
            </div>
            <input type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            <div>
              <label htmlFor="price">Price:</label>
            </div>
            <input type="number" name="price" onChange={this.handleChange} />
          </div>
          <div>
            <div>
              <label htmlFor="photo">Photo:</label>
            </div>
            <input type="text" name="photo" onChange={this.handleChange} />
          </div>
          <div>
            <div>
              <label htmlFor="description">Description:</label>
            </div>
            <input type="text" name="description" onChange={this.handleChange} />
          </div>
          <div>
            <div>
              <label htmlFor="category">Category:</label>
            </div>
            <select defaultValue='' name="category" onChange={this.handleChange} required>
              <option value='' disabled selected>Elige una categoría</option>
              <option value="category-1">Category-1</option>
              <option value="category-2">Category-2</option>
              <option value="category-3">Category-3</option>
            </select>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
