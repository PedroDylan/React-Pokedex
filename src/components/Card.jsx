import React from 'react'

export default function Card({img,TypeName,name,theName,Search,id,TypeID,height,weight,theID}) {
    return (<>
        
            <div className='inputs'>
                <input type='text' onChange={TypeName} placeholder='Name' value={name} />
                <input type='number' onChange={TypeID} placeholder='Id' value={theID} />
                <button onClick={Search}>Search</button>
            </div>
        

        
            <div className='card'>
                <img src={img} />
                <h2>{theName}</h2>
                <div className='info'>
                    <p>Height:{height}</p>
                    <p>Weight:{weight}</p>
                    <p>Id:{id}</p>
                </div>
            </div>
        

    </>
    )
}
