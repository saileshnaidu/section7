import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab1 from './Componentss/Lab1'
import Lab2 from './Componentss/Lab2'
import Lab3 from './Componentss/Lab3'
import Lab4 from './Componentss/Lab4'
import Lab5 from './Componentss/Lab5'
import Lab6 from './Componentss/Lab6'
import Lab7 from './Componentss/Lab7'
import Lab8 from './Componentss/Lab8'
import Lab9 from './Componentss/Lab9'
import Lab10 from './Componentss/Lab10'
import Lab10a from './Componentss/Lab10a'
import AdminDboard from './Componentss/AdminDboard'
import UserDboard from './Componentss/UserDboard'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Lab Experiments - Section 7</h1>
      <table border={"2"} width="70%">
        <tr className='tblHeader'>
          <td>S.No</td>
          <td>
            Lab Experiment
          </td>
          <td>
            Description
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <Link to="/lab1">Lab1</Link>
          </td>
          <td>
            Alignment and CSS
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <Link to="/lab2">Lab2</Link>
          </td>
          <td>
            DOM-Tree, media class, flex
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <Link to="/lab3">Lab3</Link>
          </td>
          <td>
            Working with React props, state
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <Link to="/lab4">Lab4</Link>
          </td>
          <td>
            Redux - Page navigation
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <Link to="/lab5">Lab5</Link>
          </td>
          <td>
            Utilizing the predefined responsive design elements with Bootstrap / Material-UI
            for designing <br></br>
            https://mui.com/material-ui/
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <Link to="/lab6">Lab6</Link>
          </td>
          <td>
            Example to access the API and fetch the JSON and display as Table content.
            https://reqres.in/api/users   this URL(API) is used for axios access
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <Link to="/lab7">Lab7</Link>
          </td>
          <td>
            
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <Link to="/lab8123">Lab 8</Link>
          </td>
          <td>
            Spring Boot with Rest API and CRUD Operations
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            <Link to="/lab9">Lab 9</Link>
          </td>
          <td>
            Sec 7 Chat Box
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <Link to="/lab10">Lab 10</Link>
          </td>
          <td>
            Implementing Authentication and Role Based Access
          </td>
        </tr>
        <tr>
          <td>10a</td>
          <td>
            <Link to="/lab10a">Lab 10a</Link>
          </td>
          <td>
            Role based navigation
          </td>

        </tr>
      </table>
    </>
  )
}

export default App
