import React from 'react';

const PostPerPage = ({postPerPage, totalPost}) => {

    const posiblesPosts = [];
    for(let i=10; i<=totalPost; i+=10){
        posiblesPosts[i]=i;
    }

    return (
        <>
            <h4 className='text-muted'>Mostrar:</h4 >
            <select className="custom-select mx-4" style={{ width: '10%' }}>
                {
                    posiblesPosts.map(post=>(
                        <option key={post}>{post}</option>
                    ))
                }
            </select>
        </>
    );
};

export default PostPerPage;
