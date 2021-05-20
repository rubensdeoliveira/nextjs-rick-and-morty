import { Container } from './styles'

interface PaginationProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  onPageChange,
  number,
}: PaginationProps) {
  return (
    <Container
      onClick={() => onPageChange(number)}
      isCurrent={isCurrent}
      data-cy="pagination-item"
    >
      {number}
    </Container>
  )
}
