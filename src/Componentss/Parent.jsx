import { useState } from 'react';
import Child from './Child.jsx';

export default function Parent() {
    const [name, setName] = useState("Sailesh");
    const [salary, setSalary] = useState(99998);
    const [location, setLocation] = useState("vijayawada");

    const changeUser = (n, s, l) => {
        setName(n);
        setSalary(s);
        setLocation(l);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: 'blue', 
                color:'white', 
            }}
        >
            <h3>User Information</h3>
            <table
                border="3"
                style={{
                    borderCollapse: 'collapse',
                    width: '50%',
                    marginBottom: '20px',
                    textAlign: 'left',
                }}
            >
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>
                            <i className="fa fa-rupee"></i> {salary}
                        </td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{location}</td>
                    </tr>
                </tbody>
            </table>

            <Child changeUser={changeUser} a={10} b={20} />
        </div>
    );
}