import React, { useState } from 'react'
import './App.css'

const fakeData = [
  {
    id: 1,
    firstName: "Samim",
    lastName: "Mohammed",
    email: "samim@gmail.com",
  },
  {
    id: 2,
    firstName: "Kawsar",
    lastName: "Ahmed",
    email: "kawsar@gmail.com",
  },
  {
    id: 3,
    firstName: "Mustakim",
    lastName: "Al Mobin",
    email: "mustakim@gmail.com",
  },
  {
    id: 4,
    firstName: "Gias",
    lastName: "Uddin Vuiya",
    email: "gias@gmail.com",
  },
  {
    id: 5,
    firstName: "Ruhi",
    lastName: "Jannat",
    email: "ruhi@gmail.com",
  },
];

const App = () => {
  const [teams, setTeams] = useState(fakeData);

  return (
    <table className="table">
      <caption>List of members</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((member, index) => {
          const { id, firstName, lastName, email } = member;
          return (
            <tr key={id} className={(id % 2) !== 0 ? "stripped" : ""}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default App