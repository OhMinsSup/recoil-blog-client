import React from 'react';
import styled from 'styled-components';
import qs, { ParsedQs } from 'qs';
import Button from '../common/Button';

interface PaginationProps {
  page: number;
  lastPage: number;
  username?: string;
  tag?: string | ParsedQs | string[] | ParsedQs[];
}
const Pagination: React.FC<PaginationProps> = ({
  page,
  lastPage,
  username,
  tag,
}) => {
  return (
    <PaginationBlock>
      <Button
        disabled={page === 1}
        to={
          page === 1 ? undefined : buildLink({ username, tag, page: page - 1 })
        }
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ username, tag, page: page + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;

const buildLink = ({
  username,
  tag,
  page,
}: {
  username?: string;
  tag?: string | ParsedQs | string[] | ParsedQs[];
  page: number;
}) => {
  const query = qs.stringify({ page, ...(tag ? { tag: String(tag) } : {}) });
  return username ? `/@${username}?${query}` : `/?${query}`;
};

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div``;
