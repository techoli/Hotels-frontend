import React, { useState, useEffect } from 'react';
import axios from "axios";
import Room from '../Component/Room';
import { useParams, matchPath } from 'react-router-dom'
import Loader from '../Component/Loader';
import Error from '../Component/Error';

function Bookingscreen() {
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [room, setroom] = useState();

    const { roomid } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true)
                const data = (await axios.post("/api/rooms/getroomsbyid", { roomid: roomid })).data;
                setroom(data);
                console.log("data>>>>"+data);
                setloading(false);
            } catch (error) {
                seterror(true);
                setloading(false);

            }
        }
        fetchData();



    }, [])

    return (
        <div className='m-5'>
            {loading ? (<Loader/>) :room ? (<div>
                <div className="row justify-content-center mt-5 shadow ">
                    <div className="col-md-6">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[1]} className="bigimg" />
                        

                    </div>
                    <div className="col-md-6">
                        <div style={{textAlign:'right'}}>
                            <h1>Booking Details</h1>
                            <hr/>
                            <b>
                            <p>Name: </p>
                            <p>From Date: </p>
                            <p>To Date: </p>
                            <p>Maxcount: {room.maxcount} </p>
                            </b>
                        </div>
                        <div style={{textAlign:'right'}}>
                            <h1>Amount</h1>
                            <hr/>
                            <b>
                            <p>Total Days</p>
                            <p>Rent per day: {room.rentperday}</p>
                            <p>Total Days</p>
                            </b>
                        </div>
                        <div style={{float:'right'}}>
                            <button className='btn btn-primary m-2'>Pay now</button>

                        </div>

                    </div>
                </div>
            </div>) :(<Error/>) }
        </div>
    )
}

export default Bookingscreen