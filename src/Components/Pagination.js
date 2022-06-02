import React, {useEffect, useState} from 'react'

const Pagination = ({totalPage, currentPage, click}) => {

    const [page, setPage] = useState([]);

  useEffect(() => {
    let list = [];
    let firstItem;
    let lastItem;
    let addLast = ["...", totalPage ];
    let addFirst = [1, "..."];

    if (totalPage > 7) {
      if (currentPage > totalPage - 4) {
        lastItem = totalPage;
        firstItem = currentPage - 2;
      } else if (currentPage < 5) {
        lastItem = currentPage + 2;
        firstItem = 1;
      } else if (currentPage > 4) {
        lastItem = currentPage + 2;
        firstItem = currentPage - 2;
      }

      while (firstItem <= lastItem) {
        list.push(firstItem);
        firstItem++;
      }

      if (currentPage < totalPage - 3) {
        list = [...list, ...addLast];
      }

      if (currentPage > 4) {
        list = [...addFirst, ...list];
      }
    } else {
      for (let i = 1; i <= totalPage; i++) {
        list.push(i);
      }
    }

    setPage([...list]);
  }, [totalPage, currentPage]);

  return (
    <>
      {currentPage > 1 && (
        <span onClick={() => click({ type: "prev" })}>{"<"}</span>
      )}
      {page.map((item, index) => (
        <span
          key={index}
          onClick={() => click({ type: "add", number: item })}
          className={currentPage === item ? "active" : ""}
        >
          {item}
        </span>
      ))}
      {currentPage < totalPage && (
        <span onClick={() => click({ type: "next" })}>{">"}</span>
      )}
    </>
  )
}

export default Pagination