import Jokes from "./components/Jokes.tsx";
import styled from "styled-components";
import { useState, useEffect } from 'react'
import type {Joke} from "./interfaces/Jokes.ts";
const ParentDiv = styled.div `
    width: 80vw;
    margin:auto;
    border: 5px #677DB7 solid;
`;


export default function App() {
    const [data, setData] = useState<Joke[]>([]);

    useEffect (()=>{
        async function fetchData(): Promise<void>{
            const rawData = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10");
            const {jokes} : {jokes: Joke[]} = await rawData.json();
            setData(jokes);
        }
        fetchData()
            .then(()=> console.log("Data fetched successfully"))
            .catch((e)=> console.log( "An error occurred: " + e));
    },[]);
  return (
    <ParentDiv>
        <Jokes data = {data}/>
    </ParentDiv>
  )
}
