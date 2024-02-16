import { LoadMoreBtnStyled } from "./LoadMore.styled";

const LoadMore = ({ onLoadMore }) => {
  return <LoadMoreBtnStyled onClick={onLoadMore}>Load more</LoadMoreBtnStyled>;
};

export default LoadMore;
