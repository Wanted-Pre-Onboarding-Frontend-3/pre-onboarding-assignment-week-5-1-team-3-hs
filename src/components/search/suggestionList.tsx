import { SuggestionListProps } from 'custom-types';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

export const SuggestionList: React.FC<SuggestionListProps> = ({ searchResult }) => {
  return (
    <SuggestionListContainer>
      <Suggestions>
        {searchResult.map(({ sickCd, sickNm }) => (
          <SuggestionItem key={sickCd}>
            <AiOutlineSearch />
            {sickNm}
          </SuggestionItem>
        ))}
      </Suggestions>
    </SuggestionListContainer>
  );
};

const SuggestionListContainer = styled.div`
  width: 600px;
  padding: 10px 0;
  border-radius: 10px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f9f9f9;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #007be9;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: none;
  }
`;

const Suggestions = styled.ul`
  width: 100%;
  position: relative;
`;

const SuggestionItem = styled.li`
  padding: 5px 10px;
  &:hover {
    background: #cae9ff;
  }
  & > svg {
    margin-right: 10px;
  }
`;
