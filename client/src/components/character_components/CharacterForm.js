import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import { PrincessHead, PrincessBody, PrincessLegs, WizardHead, WizardBody, WizardLegs, DinoHead, DinoBody, DinoLegs} from './CharacterStyles' 

const FormWrapper = styled.div`
    margin-bottom: 3vh;
`

const FormInternalWrapper = styled.div`
    .carousel-inner {
        height: 50px;
    }
    .carousel-control{
        max-height: 50px;
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
    margin: 5vh 0;
    margin-left: 5vw;
    label {
        margin-right: 4vw;
    }
    .selected {
        background-color: rgb(100,230,97);
    }
`
const FormSelector = styled.button`
    width: 100%;
`

export default class CharacterForm extends Component {

    state = {
        character: {},
        index: 0,
        direction: null,
        index2: 0,
        direction2: null,
        index3: 0,
        direction3: null,
        index4: 0,
        direction4: null
    };

    componentDidMount = async () => {
        const character = await this.props.passCharacter()
        this.setState({
            index: character.head_element-1,
            index2: character.body_element-1,
            index3: character.leg_element-1
        })
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
        const newStateIndex = selectedIndex + 1
        this.props.handleHeadIndex(newStateIndex)
    }

    handleSelect2 = (selectedIndex, e) => {
        this.setState({
            index2: selectedIndex,
            direction2: e.direction
        });
        const newStateIndex = selectedIndex + 1
        this.props.handleBodyIndex(newStateIndex)
    }

    handleSelect3 = (selectedIndex, e) => {
        this.setState({
            index3: selectedIndex,
            direction3: e.direction
        });
        const newStateIndex = selectedIndex + 1
        this.props.handleLegIndex(newStateIndex)
    }

    // handleSelect4 = (selectedIndex, e) => {
    //     this.setState({
    //         index4: selectedIndex,
    //         direction4: e.direction
    //     });
    //     console.log('hi')
    // }

    handleOnchange = (event) => {
        this.props.formChange(event)
    }

    handleOccupationSelection = (occupation) => {
        if(occupation === this.props.character.occupation){
            return 'selected'
        }
    }

    handleLegSelection =(value) => {
        if(value === this.props.character.leg_element){
            return true
        }
    }

    testFunction = (e) => {
        e.preventDefault()
        console.log(e.target.name)
    }

    render() {
        const { index, index2, index3, index4, direction, direction2, direction3, direction4 } = this.state;
        return (
            <FormWrapper>
                <form onSubmit={this.props.submit}>
                    <NameWrapper>
                        <label htmlFor="name">Call me...</label>
                        <input type="text" name="name" value={this.props.character.name} placeholder="my name is" onChange={this.props.formChange} />
                    </NameWrapper>
                    <OccupationWrapper id="occupation">
                        <label htmlFor="occupation">I am a...</label>
                        <button className={this.handleOccupationSelection('Princess')} name="occupation" value="Princess" onClick={this.props.formChange}>Princess</button>
                        <button className={this.handleOccupationSelection('Wizard')} name="occupation" value="Wizard" onClick={this.props.formChange}>Wizard</button>
                        <button className={this.handleOccupationSelection('Dinosaur')} name="occupation" value="Dinosaur" onClick={this.props.formChange}>Dinosaur</button>
                    </OccupationWrapper>
                    <div>
                    <FormInternalWrapper>
                    <Carousel htmlFor="head_element"
                        activeIndex={index}
                        direction={direction}
                        onSelect={this.handleSelect}
                         >
                        <Carousel.Item >
                            <PrincessHead/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <WizardHead/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <DinoHead/>
                        </Carousel.Item>
                     </Carousel>
                    </FormInternalWrapper>
                    </div>
                    <div>
                    <FormInternalWrapper>
                    <Carousel htmlFor="body_element"
                        activeIndex={index2}
                        direction={direction2}
                        onSelect={this.handleSelect2}
                         >
                        <Carousel.Item>
                            <PrincessBody/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <WizardBody/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <DinoBody/>
                    </Carousel.Item>
                    </Carousel>
                </FormInternalWrapper>
                </div>
                <div>
                    <FormInternalWrapper>
                    <Carousel htmlFor="leg_element"
                        activeIndex={index3}
                        direction={direction3}
                        onSelect={this.handleSelect3}
                         >
                        <Carousel.Item>                               
                                <PrincessLegs/>
                        </Carousel.Item>
                        <Carousel.Item>                            
                                <WizardLegs/>
                        </Carousel.Item>
                        <Carousel.Item>
                                <DinoLegs/>
                        </Carousel.Item>
                    </Carousel>
                    </FormInternalWrapper>
                </div>
                    <button type="submit">Let's Go!</button>
                </form>
            </FormWrapper>
        )
    }
}
