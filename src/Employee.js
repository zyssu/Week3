import React from "react";
function Employee({ name, surname, functiom, experience, image }) {

    return (
        <div style={styles.container}>
            <img src={image} style={styles.image} alt="" />
            <h1 style={styles.name}> {name} {surname} </h1>
            <p style={styles.functiom}> <b>Function:</b> {functiom} </p>
            <p style={styles.experience}> <b>Experience: </b> {experience} </p>
        </div>
    )
}
const styles = {
    container: {
        background:"#99ffcc",
        width: "300px",
        borderRadius: "10px"
        
    },
    image: {
        width: "280px",
        marginLeft: '10px',
        marginTop: '10px',
        borderRadius: "10px"
    },
    functiom: {
        margin: "30px"
    },
    experience: {
        margin: "30px"
    },
    name: {
        textAlign: "center"
    }


}
export default Employee