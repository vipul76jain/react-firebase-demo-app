import React, { useState } from 'react';
import firebase from '../firebaseConfig'

const StudentDetails = () => {
    const [age, setAge] = useState()
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')


    function onSubmit(e) {
        e.preventDefault()
        firebase.firestore().collection('StudentDetails').add({
            first_name,
            last_name,
            age: parseInt(age)
        }).then(() => {
            setAge('')
            setFirst_name('')
            setLast_name('')
        })
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="white" style={{ background: "darkcyan", display: "flex", flexDirection: "column", alignItems: "center", padding: 20 }}>
                <h5 className="grey-text text-darken-3">Student Details</h5>
                <div className="input-field" style={{ margin: 10 }}>
                    <label htmlFor="age">Age - </label>
                    <input type="text" value={age} onChange={e => setAge(e.currentTarget.value)} style={{ marginLeft: 10 }} />
                </div>
                <div className="input-field" style={{ margin: 10 }}>
                    <label htmlFor="first-name">First Name - </label>
                    <input type="text" value={first_name} onChange={e => setFirst_name(e.currentTarget.value)} style={{ marginLeft: 10 }} />
                </div>
                <div className="input-field" style={{ margin: 10 }}>
                    <label htmlFor="last-name">Last Name - </label>
                    <input type="text" value={last_name} onChange={e => setLast_name(e.currentTarget.value)} style={{ marginLeft: 10 }} />
                </div>
                <div className="button">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default StudentDetails;