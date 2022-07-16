import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Tabs, Button, Modal } from 'antd';
import Loader from '../Component/Loader';
import Error from '../Component/Error';
import Updateroom from '../Component/Updateroom';

const { TabPane } = Tabs;

function Adminscreen() {

  const userdetail = JSON.parse(localStorage.getItem('currentuser'))

  useEffect(() => {
    if (!userdetail) {
      window.location.href = '/login'
    }


  }, [])

  return (
    <div>
      <div className='ml-3 mr-3 shadow'>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Bookings" key="1">
            <Allbookings />
          </TabPane>
          <TabPane tab="Rooms" key="2">
            <Allrooms />

          </TabPane>
          <TabPane tab="Add Room" key="3">
            <Addrooms />

          </TabPane>
          <TabPane tab="Users" key="4">
            <Allusers />

          </TabPane>

        </Tabs>

      </div></div>
  )
}

export default Adminscreen

export function Allbookings() {
  const [books, setbooks] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const thebookings = await (await axios.get("api/booking/allbookings")).data
        //console.log(thebookings)
        setbooks(thebookings)
        setloading(false)
      } catch (error) {
        setloading(false)
        seterror(true)

      }



    }
    fetchData()


  }, [])



  return (
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered table-dark shadow'>
          <thead className='shadow'>
            <tr><th>Booking Id</th>
              <th>User ID</th>
              <th>Room</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th></tr>

          </thead>
          <tbody>
            {books.length && (books.map(book => {
              return (
                <tr>
                  <td>{book._id}</td>
                  <td>{book.userid}</td>
                  <td>{book.room}</td>
                  <td>{book.fromdate}</td>
                  <td>{book.todate}</td>
                  <td>{book.status}</td>
                </tr>
              )
            }))}
          </tbody>

        </table>


      </div>
    </div >
  )
}

export function Allrooms() {
  const [rums, setrums] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)
  const [show, setShow] = useState(false)
  const [roomname, setroomname] = useState()
  const [roomid, setroomid] = useState()
  const [roomphonenumber, setroomphonenumber] = useState()
  const [roomdet, setroomdet] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const therooms = await (await axios.get("/api/rooms/getallrooms")).data
        //console.log(therooms)
        setrums(therooms)
        setloading(false)
      } catch (error) {
        setloading(false)
        seterror(true)
      }
    }
    fetchData()


  }, [])

  async function showids(id) {
    //const [roomdet, setroomdet] = useState([])

    console.log(id)


  }
  const showModal = async (id) => {

    try {
      setIsModalVisible(true);
      const roomdetails = await (await axios.post("/api/rooms/getroomsbyid", { roomid: id })).data
      console.log("roomdetails" + JSON.stringify(roomdetails))
      setroomdet(roomdetails)

    } catch (error) {

      seterror(true)
    }


  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered table-dark shadow'>
          <thead className='shadow'>
            <tr><th>Room Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Rent per Day</th>
              <th>Max count</th>
              <th>Phone Number</th>
              <th>Operation</th>
            </tr>

          </thead>
          <tbody>
            {rums.length && (rums.map(rum => {
              return (
                <tr>
                  <td>{rum._id}</td>
                  <td>{rum.name}</td>
                  <td>{rum.type}</td>
                  <td>{rum.rentperday}</td>
                  <td>{rum.maxcount}</td>
                  <td>{rum.phonenumber}</td>
                  <td><button class="bt" onClick={() => { showModal(rum._id) }}>Update</button></td>

                  <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    
                    <input type="text" className="form-control mt-2" value={roomdet._id} readonly />
                    <input type="text" className="form-control mt-2" value={roomdet.name} onChange={(e) => { setroomname(e.target.value) }} />
                    <input type="text" className="form-control mt-2" value={roomdet.phonenumber} onChange={(e) => { setroomphonenumber(e.target.value) }} />

                  </Modal>

                </tr>




              )

            }))}
          </tbody>

        </table>


      </div>


    </div >
  )
}

export function Addrooms() {

  return (
    <div>
      <h1>addrooms</h1>

    </div>
  )
}
export function Allusers() {
  const [users, setusers] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const theusers = await (await axios.get("api/users/allusers")).data
        console.log(theusers)
        setusers(theusers)
        setloading(false)
      } catch (error) {
        setloading(false)
        seterror(true)

      }



    }
    fetchData()


  }, [])


  return (
    <div className='row'>
      <div className='col-md-12 '>
        <table className='table table-bordered table-dark shadow '>
          <thead className='shadow'>
            <tr><th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
            </tr>

          </thead>
          <tbody>
            {users.length && (users.map(user => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ? "Yes" : "No"}</td>
                </tr>
              )
            }))}
          </tbody>

        </table>


      </div>
    </div >
  )

}