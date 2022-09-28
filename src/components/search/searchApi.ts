const BASE_URL = 'http://localhost:4000';

export const getAllSicks = () =>
  fetch(`${BASE_URL}/sick`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

export const searchSickNames = (keyword: string) =>
  fetch(`${BASE_URL}/sick?q=${keyword}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
