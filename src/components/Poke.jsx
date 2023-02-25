import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Poke() {

    //Setting the initial controled states that are going to be used
    const [name,setName] = useState("");
    const [img,setImg] = useState("");
    const [info,setInfo] = useState({
        height:0,
        weight:0,
        theId:0
    })
    //Find is the state responsible for passing the name to the search 
    const [Find,setFind] = useState("pikachu");
    const [id,setId] = useState(25);
    const [theName,setTheName] = useState("");

    useEffect(()=>{
        async function getData(){
            //getting the first promisse from api with poke's name
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Find}`)
            let convertResponse = await response.json();
            let imageURL = await convertResponse.sprites.front_default;
            let height = await convertResponse.height;
            let weight = await convertResponse.weight;
            let theId = await convertResponse.id;
            let name = await convertResponse.name;

            console.log(convertResponse);
            
            setInfo({height:height,weight:weight,theId:theId});
            setTheName(name)
            setImg(imageURL);
        }
        getData();
    },[Find,id])

    //function that allows the input change on digitation
    const TypeName = (e)=>{
        setName(e.target.value);
    }

    const TypeID = (e)=>{
        setId(e.target.value);
    }

    //function responsible for actually putting the name on the search
    const Search = ()=>{

        if(name=="" && id!=0){
            setFind(id);
        } else if(name != "" && id==0){
            setFind(name);
        } else if(name!="" && id!=0){
            setFind(name);
        }


        setName("");
        setInfo(0);
    }


    return(
       <Card
       TypeName={TypeName}
       TypeID={TypeID}
       Search={Search}
       theName={theName}
       weight={info.weight}
       height={info.height}
       name={name}
       img={img}
       id={info.theId}
       />
    )
}
