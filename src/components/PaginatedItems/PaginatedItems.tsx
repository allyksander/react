import { useState } from "react";
import ReactPaginate from "react-paginate";
import { IPaginatedItems } from "./types";
import "./PaginatedItems.scss";

export const PaginatedItems = <T,>({
  itemsPerPage = 10,
  data,
  List,
}: IPaginatedItems<T>) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) =>
    setItemOffset((event.selected * itemsPerPage) % data.length);

  return (
    <>
      <List data={currentItems} />
      {data.length !== currentItems.length && (
        <ReactPaginate
          initialPage={pageCount - 1}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
          pageClassName="pagination__item"
          previousClassName="pagination__item pagination__item--prev"
          nextClassName="pagination__item pagination__item--next"
          activeClassName="pagination__item--active"
          disabledClassName="pagination__item--disabled"
          pageLinkClassName="pagination__link"
          previousLinkClassName="pagination__link"
          nextLinkClassName="pagination__link"
          activeLinkClassName="pagination__link--active"
          disabledLinkClassName="pagination__link--disabled"
          breakClassName="pagination__item"
          breakLinkClassName="pagination__link"
        />
      )}
    </>
  );
};
