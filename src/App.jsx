import './App.css';
import { useState } from 'react';
import logo from '../src/assets/5.jpg'

function App() {
    const [user, setUser] = useState([]);
    const getUsers = async() => {
      const users = await fetch("https://reqres.in/api/users?page=1")
      const response = await users.json();
      setUser(response.data);
    };

  return (
    <div className='page'>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>Branding</h2>
        </div>
        <div className="btn">
          <button  onClick={getUsers}>
            Get Users
          </button>
        </div>
        
      </div>
      <hr />
      <div className="container">        
        <div className="cart">
          {user.map(({id,first_name,last_name,avatar,email}) => (
            <div className="row">
              <div className="image">
                <img src={avatar} alt="profilePhoto" />
              </div>
              <div className="name">
                <h3>{id} </h3>
                <h3> {first_name} {last_name}</h3>
              </div>
              <div className="mail">
                {email}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="footer">
        footer
      </div>
    </div>
  );
}

export default App;
