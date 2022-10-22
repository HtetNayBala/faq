import React from 'react';

function Wrapper({children}) {
    return (
        <div className="w-[50%] mx-auto my-5">{children}</div>
    );
}

export default Wrapper;