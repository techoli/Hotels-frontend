import React,{useState,useEffect} from 'react';
import axios from "axios";
import Room from '../Component/Room';
import {useParams,matchPath} from 'react-router-dom'

function Bookingscreen({match}) {
    // const [loading, setloading] = useState();
    // const [error, seterror] = useState();
    // const [room, setroom] = useState();
    //console.log({match.params.roomid});
    
  return (
    <div>
    <h1>booking screen</h1>
    <h2> Rooom id = {match.params.roomid}</h2>
    
    </div>
  )
}

export default Bookingscreen