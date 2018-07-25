import React, { Component } from 'react'

export default class CharacterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submit}>
                <div>
                    <label htmlFor="name">Call me...</label>
                    <input type="text" name="name" value={this.props.character.name} placeholder="my name is" onChange={this.props.formChange} />
                </div>
                <div id="occupation">
                    <label htmlFor="occupation">I am a...</label>
                    <input type="radio" name="occupation" value="Princess" onChange={this.props.formChange} />Princess
                    <input type="radio" name="occupation" value="Wizard" onChange={this.props.formChange} />Wizard
                    <input type="radio" name="occupation" value="Dinosaur" onChange={this.props.formChange}/>Dinosaur
                </div>
                <div>
                    <label htmlFor="head_element">Head:</label>
                    <input type="radio" name="head_element" value="1" onChange={this.props.formChange} /> 1
                    <input type="radio" name="head_element" value="2" onChange={this.props.formChange} /> 2
                    <input type="radio" name="head_element" value="3" onChange={this.props.formChange} /> 3
                </div>
                <div>
                    <label htmlFor="body_element">Body:</label>
                    <input type="radio" name="body_element" value="1" onChange={this.props.formChange} /> 1
                    <input type="radio" name="body_element" value="2" onChange={this.props.formChange} /> 2
                    <input type="radio" name="body_element" value="3" onChange={this.props.formChange} /> 3
                </div>
                <div>
                    <label htmlFor="leg_element">Legs:</label>
                    <input type="radio" name="leg_element" value="1" onChange={this.props.formChange} /> 1
                    <input type="radio" name="leg_element" value="2" onChange={this.props.formChange} /> 2
                    <input type="radio" name="leg_element" value="3" onChange={this.props.formChange} /> 3
                </div>
                <div>
                    <label htmlFor="color_scheme">Color</label>
                    <input type="radio" name="color_scheme" value="1" onChange={this.props.formChange} /> 1
                    <input type="radio" name="color_scheme" value="2" onChange={this.props.formChange} /> 2
                    <input type="radio" name="color_scheme" value="3" onChange={this.props.formChange} /> 3
                </div>
                <button type="submit">Let's Go!</button>
            </form>
        )
    }
}
