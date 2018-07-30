import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const FormWrapper = styled.div`
    line-height: 3vh;
    .carousel-inner {
        height: 300px;
    }
`

export default class CharacterForm extends Component {

    state = {
        index: 0,
        direction: null
    };

handleSelect = (selectedIndex, e) => {
    this.setState({
        index: selectedIndex,
        direction: e.direction
    });
}
render() {

    const { index, direction } = this.state;

    return (
        <div>
            <form onSubmit={this.props.submit}>
                <div>
                    <label htmlFor="name">Call me...</label>
                    <input type="text" name="name" value={this.props.character.name} placeholder="my name is" onChange={this.props.formChange} />
                </div>
                <div id="occupation">
                    <label htmlFor="occupation">I am a...</label>
                    <input type="radio" name="occupation" value="Princess" onChange={this.props.formChange} checked={this.props.character.occupation === 'Princess'} />Princess
                    <input type="radio" name="occupation" value="Wizard" onChange={this.props.formChange} checked={this.props.character.occupation === 'Wizard'} />Wizard
                    <input type="radio" name="occupation" value="Dinosaur" onChange={this.props.formChange} checked={this.props.character.occupation === 'Dinosaur'} />Dinosaur
                </div>
                <div>
                    <label htmlFor="head_element">Head:</label>
                    <input type="radio" name="head_element" value="1" onChange={this.props.formChange} checked={this.props.character.head_element == 1} /> 1
                    <input type="radio" name="head_element" value="2" onChange={this.props.formChange} checked={this.props.character.head_element == 2} /> 2
                    <input type="radio" name="head_element" value="3" onChange={this.props.formChange} checked={this.props.character.head_element == 3} /> 3
                </div>
                <div>
                    <label htmlFor="body_element">Body:</label>
                    <input type="radio" name="body_element" value="1" onChange={this.props.formChange} checked={this.props.character.body_element == 1} /> 1
                    <input type="radio" name="body_element" value="2" onChange={this.props.formChange} checked={this.props.character.body_element == 2} /> 2
                    <input type="radio" name="body_element" value="3" onChange={this.props.formChange} checked={this.props.character.body_element == 3} /> 3
                </div>
                <div>
                    <label htmlFor="leg_element">Legs:</label>
                    <input type="radio" name="leg_element" value="1" onChange={this.props.formChange} checked={this.props.character.leg_element == 1} /> 1
                    <input type="radio" name="leg_element" value="2" onChange={this.props.formChange} checked={this.props.character.leg_element == 2} /> 2
                    <input type="radio" name="leg_element" value="3" onChange={this.props.formChange} checked={this.props.character.leg_element == 3} /> 3
                </div>
                <div>
                    <label htmlFor="color_scheme">Color</label>
                    <input type="radio" name="color_scheme" value="1" onChange={this.props.formChange} checked={this.props.character.color_scheme == 1} /> 1
                    <input type="radio" name="color_scheme" value="2" onChange={this.props.formChange} checked={this.props.character.color_scheme == 2} /> 2
                    <input type="radio" name="color_scheme" value="3" onChange={this.props.formChange} checked={this.props.character.color_scheme == 3} /> 3
                </div>
                <button type="submit">Let's Go!</button>
            </form>
            <FormWrapper>
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                >
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/carousel.png" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/carousel.png" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/carousel.png" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </FormWrapper>
        </div>
    )
}
}
