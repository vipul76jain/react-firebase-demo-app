import React, { useState, useEffect } from 'react';
import firebase from '../firebaseConfig'

const StudentCards = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        firebase.firestore().collection('StudentDetails').onSnapshot((data) => {
            const newData = data.docs.map((details) => ({
                id: details.id,
                ...details.data()
            }))
            setData(newData)
        })
    }, [])

    return (

        data.length !== 0 ? (<div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((person) =>
                <div key={person.id} style={{ background: "aqua", margin: 20, padding: 20 }}>
                    <div className="age" style={{ paddingBottom: 10, display: "flex", justifyContent: "space-between" }}>
                        <text style={{ fontSize: 20, fontWeight: "bold" }}>Age - {person.age}</text>
                    </div>
                    <div className="first_name" style={{ paddingBottom: 10, display: "flex", justifyContent: "space-between" }}>
                        <text style={{ fontSize: 20, fontWeight: "bold" }}>First Name - {person.first_name}</text>
                    </div>
                    <div className="last_name" style={{ paddingBottom: 10, display: "flex", justifyContent: "space-between" }}>
                        <text style={{ fontSize: 20, fontWeight: "bold" }}>Last Name - {person.last_name}</text>
                    </div>
                </div>
            )}
        </div>) : (<div style={{ marginTop: 50, fontSize: 24 }}>Loading...</div>)


    )
}

export default StudentCards