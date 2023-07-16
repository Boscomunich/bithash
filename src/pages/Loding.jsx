import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const Loding = (props) => {
    return (
        <div style={{marginTop:'45vh'}}>
    <ScaleLoader
        color={'rgb(6, 6, 72)'}
        loading={props.loading}
        size={150}
      />
        </div>
    );
};

export default Loding;