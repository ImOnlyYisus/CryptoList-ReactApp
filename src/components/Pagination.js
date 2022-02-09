import React from 'react';
import PostPerPage from './PostPerPage';

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage, changePostPerPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='d-flex flex-row justify-content-center align-items-center'>
            <PostPerPage totalPost={totalPosts} postPerPage={changePostPerPage}/>
            <nav>
                <ul className='pagination'>
                    {
                        pageNumbers.map((number, index) => (
                            <li key={index} className={(number) == currentPage ? "active page-item" : "page-item"}>
                                <a onClick={() => paginate(number)} className='page-link'>{number}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
            );
};

            export default Pagination;
