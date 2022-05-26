import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import { PaginationBtn, PaginationContainer } from "./Pagination.styles"
import { Text } from "./Text.styles"

const Pagination = ({ page, totalPages, onBeforeClick, onNextClick, setPage }) => {
  return (
    <>
      <PaginationContainer>
        <PaginationBtn onClick={onBeforeClick}><MdNavigateBefore color="blue" size="2rem" /></PaginationBtn>
        <Text variant="subtitle">{page} of {totalPages}</Text>
        <PaginationBtn onClick={onNextClick}><MdNavigateNext color="blue" size="2rem" /></PaginationBtn>
      </PaginationContainer>
    </>
  )
}

export default Pagination
