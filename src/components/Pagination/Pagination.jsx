import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import './style.scss';

export default function Pagination({ items, setPageItems, itemsPerPage, activePage }){
    const history = useHistory();
    const [itemOffset, setItemOffset] = useState(0);

    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
        history.push(`/forum/${++event.selected}`);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setPageItems(items.slice(itemOffset, endOffset));
    }, [itemOffset, itemsPerPage, setPageItems, items]);
    return(
        <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            initialPage={activePage ? (--activePage) : (0)}
            renderOnZeroPageCount={null}
        />
    );
}