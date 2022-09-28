declare module 'custom-types' {
  type Sick = {
    sickCd: string;
    sickNm: string;
  };

  type SuggestionListProps = {
    searchResult: Sick[];
  };
}
