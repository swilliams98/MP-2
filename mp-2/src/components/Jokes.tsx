import styled from "styled-components";
import type {Joke} from "../interfaces/Jokes.ts";

const AllCharsDiv = styled.div `
    display:flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #9CA3DB ;
`;

const SingleCharDiv = styled.div<{ type: string }>`
    display:flex;
    flex-direction: column;
    justify-content: center;
    overflow: visible;
    width: fit-content;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.type === "twopart"? '#F7DBA7': '#A4C2A5' )};
    color: ${(props)=>(props.type === "twopart"? '#C57B57': '#4A4A48' )};
    border: 3px ${(props)=>(props.type === "twopart"? '#C57B57': '#566246' )} solid;
    font: italic small-caps bold calc(2px + 1vw) Arial, fantasy;
    text-align: center;
`;

export default function Jokes(props: {data: Joke[]}){
    return(
        <AllCharsDiv>
            {
                props.data?.map((joke:Joke)=>
                    <SingleCharDiv type = {joke.type} >
                        <h1>{joke.category} {joke.category ==="Pun" ? "": " Joke"}</h1>
                        {joke.type === "twopart" ? <div><p>{joke.setup}</p> <p>{joke.delivery}</p></div> : <p>{joke.joke}</p>}
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}