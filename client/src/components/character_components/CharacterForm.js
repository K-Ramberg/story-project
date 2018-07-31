import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

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

const PrincessHead = styled.div`
    height: 5vh;
    width: 10vw;
    display: flex;
    margin-left: 70%;
    justify-content: flex-end;
    border-radius: 50%;
    background-color: pink;
    margin-top: -3vh;
`

const PrincessBody = styled.div`
    height: 5vh;
    width: 10vw;
    display: flex;
    margin-left: 70%;
    justify-content: flex-end;
    background-color: pink;
    border-radius: 20% 20% 0 0;
    margin-top: -3vh;
`

const PrincessLegs = styled.div`
    height: 5vh;
    width: 12vw;
    display: flex;
    margin-left: 69%;
    justify-content: flex-end;
    background-color: pink;
    border-radius: 20% 20% 0 0;
    margin-top: -3vh;
`

const WizardHead = styled.div`
    height: 5vh;
    width: 10vw;
    display: flex;
    margin-left: 70%;
    justify-content: flex-end;
    border-radius: 50% 50% 0 0;
    border-left: 10px solid black;
    border-right: 10px solid black;
    background-color: gray;
    margin-top: -3vh;
`

const WizardBody = styled.div`
    height: 5vh;
    width: 10vw;
    display: flex;
    margin-left: 70%;
    justify-content: flex-end;
    background-color: gray;
    border-radius: 20% 20% 0 0;
    margin-top: -3vh;
`

const WizardLegs = styled.div`
    height: 5vh;
    width: 12vw;
    display: flex;
    margin-left: 69%;
    justify-content: flex-end;
    background-color: gray;
    border-radius: 20% 20% 0 0;
    margin-top: -3vh;
`

const DinoHead = styled.div`
    height: 5vh;
    width: 10vw;
    display: flex;
    margin-left: 70%;
    justify-content: flex-end;
    border-radius: 0% 50% 50% 0;
    border-bottom: 10px solid rgb(0, 100, 0);
    background-color: green;
    margin-top: -3vh;
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

    render() {

        const { index, index2, index3, index4, direction, direction2, direction3, direction4 } = this.state;
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
                        <Carousel.Item >
                            <input type="radio" name="body_element" value="1" onChange={this.handleOnchange} checked={this.props.character.body_element == 1} /> 1 <PrincessBody/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <input type="radio" name="body_element" value="2" onChange={this.handleOnchange} checked={this.props.character.body_element == 2} /> 2
                        </Carousel.Item>
                        <Carousel.Item>
                            <input type="radio" name="body_element" value="3" onChange={this.handleOnchange} checked={this.props.character.body_element == 3} /> 3
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
                                <input type="radio" name="leg_element" value="2" onChange={this.handleOnchange} checked={this.props.character.leg_element == 2} /> 2
                        </Carousel.Item>
                        <Carousel.Item>
                                <input type="radio" name="leg_element" value="3" onChange={this.handleOnchange} checked={this.props.character.leg_element == 3} /> 3
                    </Carousel.Item>
                    </Carousel>
                </FormWrapper>
                </div>
                    <div>
                    <FormWrapper>
                    <Carousel htmlFor="color_scheme"
                        activeIndex={index4}
                        direction={direction4}
                        onSelect={this.handleSelect4}
                         >
                        <Carousel.Item >
                                <input type="radio" name="color_scheme" value="1" onChange={this.handleOnchange} checked={this.props.character.color_scheme == 1} /> 1
                        </Carousel.Item>
                        <Carousel.Item>
                                <input type="radio" name="color_scheme" value="2" onChange={this.handleOnchange} checked={this.props.character.color_scheme == 2} /> 2
                        </Carousel.Item>
                        <Carousel.Item>
                                <input type="radio" name="color_scheme" value="3" onChange={this.handleOnchange} checked={this.props.character.color_scheme == 3} /> 3
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
