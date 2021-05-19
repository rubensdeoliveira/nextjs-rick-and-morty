import { PaginationItem } from './PaginationItem'
import { Container, IconButton, PageContainer, Dots } from './styles'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 20,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : []

  function handleNextPage() {
    onPageChange(currentPage + 1)
  }

  function handlePreviousPage() {
    onPageChange(currentPage - 1)
  }

  return (
    <Container>
      <IconButton
        type="button"
        onClick={handlePreviousPage}
        disable={currentPage === 1}
        disabled={currentPage === 1}
      >
        <AiOutlineLeft size={20} />
      </IconButton>

      {currentPage > 1 + siblingsCount && (
        <PageContainer>
          <PaginationItem onPageChange={onPageChange} number={1} />
          {currentPage > 2 + siblingsCount && <Dots>...</Dots>}
        </PageContainer>
      )}

      {previousPages.length > 0 &&
        previousPages.map(page => {
          return (
            <PageContainer key={page}>
              <PaginationItem onPageChange={onPageChange} number={page} />
            </PageContainer>
          )
        })}

      <PaginationItem
        onPageChange={onPageChange}
        number={currentPage}
        isCurrent
      />

      {nextPages.length > 0 &&
        nextPages.map(page => {
          return (
            <PageContainer key={page}>
              <PaginationItem onPageChange={onPageChange} number={page} />
            </PageContainer>
          )
        })}

      {currentPage + siblingsCount < lastPage && (
        <PageContainer>
          {currentPage + 1 + siblingsCount < lastPage && <Dots>...</Dots>}
          <PaginationItem onPageChange={onPageChange} number={lastPage} />
        </PageContainer>
      )}

      <IconButton
        type="button"
        onClick={handleNextPage}
        disable={currentPage === lastPage}
        disabled={currentPage === lastPage}
      >
        <AiOutlineRight size={20} />
      </IconButton>
    </Container>
  )
}
