import styled from 'styled-components'

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
    border-radius: 50% 50% 20% 20%;
    border-left: 10px solid black;
    border-right: 10px solid black;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    background-color: rgb(50,50,50);
    margin-top: -3vh;
`

const WizardBody = styled.div`
    height: 5vh;
    width: 14vw;
    display: flex;
    margin-left: 68%;
    justify-content: flex-end;
    border-radius: 50% 50% 0 0;
    border-left: 30px solid black;
    border-right: 30px solid black;
    background-color: gray;
    margin-top: -3vh;
`

const WizardLegs = styled.div`
    height: 5vh;
    width: 14vw;
    display: flex;
    margin-left: 68%;
    justify-content: flex-end;
    background-color: gray;
    border-radius: 20% 20% 0 0;
    border-left: 30px solid black;
    border-right: 30px solid black;
    margin-top: -3vh;
`

const DinoHead = styled.div`
    height: 5vh;
    width: 15vw;
    display: flex;
    margin-left: 72%;
    justify-content: flex-end;
    border-radius: 30% 100% 45% 10%;
    background-color: green;
    margin-top: -3vh;
`
const DinoBody = styled.div`
    height: 5vh;
    width: 10vw;
    display: flex;
    margin-left: 70%;
    justify-content: flex-end;
    border-radius: 40% 15% 45% 20%;
    background-color: green;
    margin-top: -3vh;
`

const DinoLegs = styled.div`
    height: 5vh;
    width: 6vw;
    display: flex;
    margin-left: 72%;
    justify-content: flex-end;
    border-radius: 10% 30% 20% 20%;
    border-bottom: 15px solid green;
    border-left: 30px solid green;
    background-color: none;
    margin-top: -3vh;
`

export {PrincessHead,PrincessBody, PrincessLegs, 
        WizardHead, WizardBody, WizardLegs, 
    DinoHead, DinoBody, DinoLegs}