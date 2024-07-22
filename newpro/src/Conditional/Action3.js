import React, { useState } from 'react';

const Action3 = () => {
    // State for the condition and form data
    const [isConditionTrue, setIsConditionTrue] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Form input change handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        // You can add more logic here, like sending the data to a server.
    };

    let conditionMessage;
    if (isConditionTrue) {
        conditionMessage = 'Condition is true!';
    } else {
        conditionMessage = 'Condition is false!';
    }

    let additionalMessage;
    if (formData.email === '' || formData.password === '') {
        additionalMessage = 'Please fill in all fields.';
    } else {
        additionalMessage = 'All fields are filled.';
    }

    return (
        <div>
            <h1>{conditionMessage}</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                />
                <br />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                />
                <br />
                <button type="submit">Submit</button>
                <p>{additionalMessage}</p>
            </form>
        </div>
    );
};

export default Action3;
