/* eslint-disable react/prop-types */

function Die(props){

    const styles = { 
        backgroundColor: props.isHeld ? "#59e391" : "#ffffff"
    }

    return (
        <div className="die" style={styles} onClick={props.holdDice}>
            <p>{props.value}</p>
        </div>
    )
}

export default Die