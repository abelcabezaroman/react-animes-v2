import { useState } from "react";

export default function Pagination({onChangePage}) {
  const [actualPage, setActualPage] = useState(1);

  const changePage = (newPage) => {
    setActualPage(newPage);
    onChangePage(newPage * 12)
  }

  return (
    <div>
      <button className="me-2 b-btn" onClick={() => changePage(actualPage - 1)}>{"<"}</button>
      {actualPage}
      <button className="ms-2 b-btn" onClick={() => changePage(actualPage + 1)}>{">"}</button>
    </div>
  );
}
