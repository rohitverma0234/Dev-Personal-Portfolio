import React from 'react'
import Data from './Data'
import Resume from './Resume'


const Education = () => {

    const Data2 = {
        subhead:"My Experience"
    }

    return (
        <>
        <Resume {...Data} {...Data2}/>
        </>
    )
}



export default Education