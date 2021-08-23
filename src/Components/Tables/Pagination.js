import React, { Fragment } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import './Pagination.css';

const Pagination = ({ currentPage, setPage, totalPages }) => {
    const [accessiblePages, setAccessiblePages] = React.useState([1]);

    React.useEffect(() => {
        if(currentPage === totalPages) {
            setAccessiblePages([currentPage - 2, currentPage - 1, currentPage]);
        }
        else if (currentPage === 1) {
            setAccessiblePages([currentPage, currentPage + 1, currentPage + 2]);
        }
        else {
            setAccessiblePages([currentPage - 1, currentPage, currentPage + 1]);
        }

    }, [currentPage, totalPages]);

    function changePage({ target }) {
        const value = parseInt(target.innerText);
        setPage(value);
    }
    
    function goToNextPage() {
        setPage(currentPage + 1);
    }

    function goToPreviousPage() {
        setPage(currentPage - 1);
    }

    return (
        <div className="pagination">
            <div className="page-box previous" onClick={goToPreviousPage}>
                <FaArrowLeft />
            </div>

            {(currentPage > 2) &&
                <Fragment>
                    <div className="page-box" onClick={changePage}>
                        <span>1</span>
                    </div>
                    ...
                </Fragment>
            }

            {accessiblePages.map(page => (
                <div
                    className={`page-box ${currentPage === page ? 'active' : ''}`}
                    key={page}
                    onClick={changePage}
                >
                    <span>{page}</span>
                </div>
            ))}

            {(currentPage < totalPages && currentPage < totalPages - 1) &&
                <Fragment>
                    ...
                    <div className="page-box" onClick={changePage}>
                        <span>{totalPages}</span>
                    </div>
                </Fragment>
            }
            
            <div className="page-box next" onClick={goToNextPage}>
                <FaArrowRight />
            </div>
        </div>
    );
}

export default Pagination;
