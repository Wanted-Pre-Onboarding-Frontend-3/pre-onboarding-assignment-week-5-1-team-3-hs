import { Sick } from 'custom-types';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

import { searchAPI } from '@/api/searchApi';
import useDebounce from '@/utils/useDebounce';

import { EMPTY_SUGGESTION } from './search.constants';
import { SuggestionList } from './suggestionList';

export const Search = () => {
  const [searchResult, setSearchResult] = useState<Sick[]>(EMPTY_SUGGESTION);
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce<string>(query, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value.trim());
  };

  useEffect(() => {
    if (debouncedQuery !== '') {
      (async () => {
        const resp = await searchAPI.searchSickNames(debouncedQuery);
        setSearchResult(resp);
        // console.log(resp);
      })();
    }
  }, [debouncedQuery]);

  return (
    <Container>
      <SearchContainer>
        <Title>국내 모든 임상시험 검색하고</Title>
        <Title>온라인으로 참여하기</Title>
        <SearchFormWrapper>
          <SearchInput type="search" placeholder="질환명을 입력해 주세요." value={query} onChange={handleInputChange} />
          <SearchButton>
            <AiOutlineSearch />
          </SearchButton>
        </SearchFormWrapper>
        <SuggestionList searchResult={searchResult} />
      </SearchContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 700px;
  height: 700px;
  padding: 30px 0;
  background: #cae9ff;
`;

const SearchFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  margin: 20px 0;
  padding: 10px 20px;
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: medium;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: 0;
  font-weight: 500;
  background-color: #007be9;
  color: #ffffff;
  cursor: pointer;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;
