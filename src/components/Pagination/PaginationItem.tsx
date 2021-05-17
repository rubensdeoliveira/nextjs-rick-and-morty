import { Container } from '../../styles/components/Pagination/PaginationItem'

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
  // if (isCurrent) {
  //   return <Container>{number}</Container>
  // }

  return (
    <Container onClick={() => onPageChange(number)} isCurrent={isCurrent}>
      {number}
    </Container>
  )
}
