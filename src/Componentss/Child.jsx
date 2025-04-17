import { useState } from 'react';

export default function Child({ changeUser, a, b }) {
    const [inputName, setInputName] = useState("");
    const [inputSalary, setInputSalary] = useState("");
    const [inputLocation, setInputLocation] = useState("");

    const changeFun = () => {
        changeUser(inputName, inputSalary, inputLocation);
    };

    return (
        <div>
            <h3>Update User Information</h3>
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
                        <td>
                            <input
                                type="text"
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                                placeholder="Enter Name"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>
                            <input
                                type="number"
                                value={inputSalary}
                                onChange={(e) => setInputSalary(e.target.value)}
                                placeholder="Enter Salary"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>
                            <input
                                type="text"
                                value={inputLocation}
                                onChange={(e) => setInputLocation(e.target.value)}
                                placeholder="Enter Location"
                                minLength="3"
                                maxLength="30"

                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{ textAlign: 'center' }}>
                            <button onClick={changeFun}>Update User</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                Props Received: {b} - {a} = {b - a}
            </p>
        </div>
    );
}