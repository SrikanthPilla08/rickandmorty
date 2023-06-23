export function Pagination(handlePrevPage: () => Promise<void>, currentPage: number, pages: number[], handleSpecificPage: (pageNumber: number) => Promise<void>, handleNextPage: () => Promise<void>) {
  return <nav className="mr-auto ml-auto mt-8">
    <ul className="inline-flex">
      <li><button className="h-10 px-5 text-indigo-600 bg-white transition-colors duration-150 border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100" onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button></li>
      {pages.map((pageNumber) => {
        return (
          <li><button className={`h-10 px-5 transition-colors duration-150 border border-r-0 border-indigo-600 focus:shadow-outline ${pageNumber === currentPage ? "text-white bg-indigo-600" : "text-indigo-600 bg-white"}`} onClick={() => handleSpecificPage(pageNumber)}>{pageNumber}</button></li>
        );
      }
      )}
      <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100" onClick={handleNextPage}>Next</button></li>
    </ul>
  </nav>;
}
