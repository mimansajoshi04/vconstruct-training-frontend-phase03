

function SetCounter({count, incrementTwice}){

    console.log("render1");

    return (
        <>
            counter: {count} <br></br>
            <button onClick={()=>incrementTwice()}>increment twice</button>
        </>
    );
}

export default SetCounter;
