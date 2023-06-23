import { Character } from '../components/Character'
import { useState } from 'react'
import { Pagination } from '../components/Pagination';

function Home({ characters, maxPage }: any) {
// State variable to store page number
  const [currentPage, setCurrentPage] = useState(1);
// State variable to store characteer details of a particular page
  const [pageCharacters, setPageCharacters] = useState(characters);
  const [maxPages, setMaxPages] = useState(maxPage);
  const startPage = Math.max(1, currentPage - 1)
  const endPage = Math.min(currentPage + 2, maxPages)
  const pages = [...Array(endPage - startPage + 1)].map((_, index) => startPage + index)

// Function to handle page change
  async function handlePageChange(page: number) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    setCurrentPage(page);
    setPageCharacters(data.results);
  }

// Function to load next page on click of Next button
  const handleNextPage = async () => {
    console.log('Next Page Clicked')
    const nextPage = currentPage + 1;
    await handlePageChange(nextPage);
  };

// Function to load specific page on click of page number
  async function handleSpecificPage(pageNumber: number) {
    console.log('Page Clicked', pageNumber)
    await handlePageChange(pageNumber);
  };

// Function to load previous page on click of Prev button
  const handlePrevPage = async () => {
    console.log('Previous Page Clicked')
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      await handlePageChange(prevPage);
    }
  };


  return (
    <>
      <div className="text-4xl text-center mt-16"> Rick and Morty Characters </div>
      <main className="flex min-h-screen flex-auto flex-wrap gap-4 items-center justify-between p-20">
        {
          pageCharacters ? (pageCharacters.map((item: any) => {
            return (
              Character(item)
            )
          })) : (<p> Loading Data ... </p>)
        }

        {Pagination(handlePrevPage, currentPage, pages, handleSpecificPage, handleNextPage)}
      </main>
    </>
  )


}

export async function getServerSideProps() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
  const data = await response.json();
  return {
    props: {
      characters: data.results,
      maxPage: data.info.pages,
    }
  }
}

export default Home;
