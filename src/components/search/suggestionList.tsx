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
  padding: 10px;
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;

const Suggestions = styled.ul`
  width: 100%;
  padding: 10px;
  position: relative;
`;

const SuggestionItem = styled.li`
  padding: 5px 0;
  & > svg {
    margin-right: 10px;
  }
`;
