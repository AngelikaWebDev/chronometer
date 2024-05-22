import React from "react";
import Stopwatch from "./Stopwatch";

const SecondsCounter = (props) => {
    return (
        <>
        <div className="container-fluid bg-dark d-flex justify-content-center mb-3">
            <i className="fa-regular fa-clock"></i>
            <h1 className="text-light p-3"><Stopwatch/></h1>
        </div>
        </>
    );
}

export default SecondsCounter;
