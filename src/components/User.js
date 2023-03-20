import React,{useState, useEffect} from "react";
import Nav from "./Nav";
import axios from 'axios';

const User = () => {

const [users, setUsers] = useState([]);
const [loading,setLoading] = useState(false);


const handleUser =  () => {
  axios.get("https://randomuser.me/api/?results=5000")
  .then((res)=>{
    console.log(res);
    setUsers(res.data.results);
  }).catch((err)=>{
    console.log(err);
    setLoading(true);
  }).finally(()=>{
    setLoading(false);
  })

}

useEffect(()=>{
  handleUser();
},[])

  return (
    <>
      <Nav />
      <div>
        <h1>User Details</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div>
        <input type="radio" name="a"/><label>All</label>
        <input type="radio" name="a"/><label>Male</label>
        <input type="radio" name="a"/><label>female</label>
        </div>
        
        <div>
          <table >
            <thead>
            <tr className="table-heading t-header">
              <th>IMAGE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>GENDER</th>
            </tr>
            </thead>
            <tbody className="table-heading t-body">
              {loading ? (<h1>Loading....</h1>) : (
                <div>
{users.map((item,index) => {
  return(
    <div key={index} className="table-heading t-body">
     <img src={item.picture.medium} alt="#" />
   <p>{item.email}</p>
   <p>{item.name.first}</p>
   <p>{item.gender}</p>
      </div>

  )
})}
                </div>
              )}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
