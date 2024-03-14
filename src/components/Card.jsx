import React from "react";
import "./user.scss";
import img from '@/../../public/OIP.jpeg'
const Card = ({ name, subject, designation }) => {




  return (
    <div className="user">
      <div className="edit"></div>
      <div className="user_container">
        <div className="card">
        <div className="img">
              <img
                src="https://th.bing.com/th/id/OIP.ozD5X0SVxbGAhVmqy27jrAHaE8?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
          <div className="name">
            <h3>{name}</h3>
            <p>{designation}</p>
          </div>
          <div className="course">
            {subject.map((data) => (
              <button>{data}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
{
  /* {arr.map((c, i) => (
          <div className="card" key={i}>
            <div className="img">
              <img
                src="https://th.bing.com/th/id/OIP.ozD5X0SVxbGAhVmqy27jrAHaE8?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div className="name">
              <h3>Amandeep Singh</h3>
              <p>HOD</p>
            </div>
            <div className="course">
              <button>Python</button>
              <button>java</button>
              <button>DSA</button>
              <button>C</button>
              <button>Cpp</button>
            </div>
          </div>
        ))} */
}

function convertBase64(file) {
  return new Promise((resolve, reject) => {
    const filereader = new FileReader();
    filereader.readAsDataURL(file)
  });
}
