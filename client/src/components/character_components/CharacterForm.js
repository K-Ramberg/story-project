import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import { PrincessHead, PrincessBody, PrincessLegs, WizardHead, WizardBody, WizardLegs, DinoHead, DinoBody, DinoLegs} from './CharacterStyles' 

const FormWrapper = styled.div`
    line-height: 3vh;
    max-height: 5vh;
    text-align: center;
    .carousel-inner {
        height: 5vh;
    }
    .carousel-control{
        max-height: 5vh;
    }
    .carousel-indicators{
        display: none;
    }
`
const NameWrapper = styled.div`
    margin-left: 5vw;
    input {
        margin-left: 3vw;
        text-align-last: center;
        background-color: rgb(250,250,250);
    }
`

const OccupationWrapper = styled.div`
    margin-left: 5vw;
    input {
        margin-left: 3vw;
        margin-right: 1vw;
    }
`

export default class CharacterForm extends Component {

    state = {
        index: 0,
        direction: null,
        index2: 0,
        direction2: null,
        index3: 0,
        direction3: null,
        index4: 0,
        direction4: null
    };

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    handleSelect2 = (selectedIndex, e) => {
        this.setState({
            index2: selectedIndex,
            direction2: e.direction
        });
    }

    handleSelect3 = (selectedIndex, e) => {
        this.setState({
            index3: selectedIndex,
            direction3: e.direction
        });
    }

    handleSelect4 = (selectedIndex, e) => {
        this.setState({
            index4: selectedIndex,
            direction4: e.direction
        });
        console.log('hi')
    }

    handleOnchange = (event) => {
        
        this.props.formChange(event)
        
    }

    testFunction = () => {
        console.log('yo')
    }

    render() {

        const { index, index2, index3, index4, direction, direction2, direction3, direction4 } = this.state;
        return (
            <div>
                <form onSubmit={this.props.submit}>
                    <NameWrapper>
                        <label htmlFor="name">Call me...</label>
                        <input type="text" name="name" value={this.props.character.name} placeholder="my name is" onChange={this.props.formChange} />
                    </NameWrapper>
                    <OccupationWrapper id="occupation">
                        <label htmlFor="occupation">I am a...</label>
                        <input type="radio" name="occupation" value="Princess" onChange={this.props.formChange} checked={this.props.character.occupation === 'Princess'} />Princess
                        <input type="radio" name="occupation" value="Wizard" onChange={this.props.formChange} checked={this.props.character.occupation === 'Wizard'} />Wizard
                        <input type="radio" name="occupation" value="Dinosaur" onChange={this.props.formChange} checked={this.props.character.occupation === 'Dinosaur'} />Dinosaur
                    </OccupationWrapper>
                    <div>
                    <FormWrapper>
                    <Carousel htmlFor="head_element"
                        activeIndex={index}
                        direction={direction}
                        onSelect={this.handleSelect}
                         >
                        <Carousel.Item >
                            <input type="radio" name="head_element" value="1" onChange={this.handleOnchange} checked={this.props.character.head_element == 1} /> 1 <PrincessHead/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <input type="radio" name="head_element" value="2" onChange={this.handleOnchange} checked={this.props.character.head_element == 2} /> 2 <WizardHead/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <input type="radio" name="head_element" value="3" onChange={this.handleOnchange} checked={this.props.character.head_element == 3} /> 3 <DinoHead/>
                        </Carousel.Item>
                     </Carousel>
                    </FormWrapper>
                    </div>
                    <div>
                    <FormWrapper>
                    <Carousel htmlFor="body_element"
                        activeIndex={index2}
                        direction={direction2}
                        onSelect={this.handleSelect2}
                         >
                        <Carousel.Item onClick={this.testFunction}>
                            <input type="radio" name="body_element" value="1" onChange={this.handleOnchange} checked={this.props.character.body_element == 1} /> 1 <PrincessBody/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <input type="radio" name="body_element" value="2" onChange={this.handleOnchange} checked={this.props.character.body_element == 2} /> 2 <WizardBody/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <input type="radio" name="body_element" value="3" onChange={this.handleOnchange} checked={this.props.character.body_element == 3} /> 3 <DinoBody/>
                    </Carousel.Item>
                    </Carousel>
                </FormWrapper>
                </div>
                    <div>
                    <FormWrapper>
                    <Carousel htmlFor="leg_element"
                        activeIndex={index3}
                        direction={direction3}
                        onSelect={this.handleSelect3}
                         >
                        <Carousel.Item >
                                <input type="radio" name="leg_element" value="1" onChange={this.handleOnchange} checked={this.props.character.leg_element == 1} /> 1 <PrincessLegs/>
                        </Carousel.Item>
                        <Carousel.Item>
                                <input type="radio" name="leg_element" value="2" onChange={this.handleOnchange} checked={this.props.character.leg_element == 2} /> 2 <WizardLegs/>>
                        </Carousel.Item>
                        <Carousel.Item>
                                <input type="radio" name="leg_element" value="3" onChange={this.handleOnchange} checked={this.props.character.leg_element == 3} /> 3 <DinoLegs/>
                    </Carousel.Item>
                    </Carousel>
                </FormWrapper>
                </div>
                    <button type="submit">Let's Go!</button>
                </form>
            </div>
        )
    }
}
