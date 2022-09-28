const GREY_SCALE = {
  grey100: '#FDFDFD',
  grey200: '#F4F4F4',
  grey300: '#EDEDED',
  grey400: '#DEDEDE',
  grey500: '#CDCDCD',
  grey600: '#B2B2B2',
  grey700: '#888888',
  grey800: '#4A4A4A',
  grey900: '#353535',
  white: '#FFFFFF',
  black: '#212121',
} as const;

const PRIMARY = {
  primary100: '#E9FFC7',
  primary200: '#DDF6B8',
  primary300: '#D0EDA9',
  primary400: '#C4E499',
  primary450: '#B8DB8A',
  primary500: '#ABD27B',
  primary600: '#9FC96C',
  primary700: '#86B74D',
} as const;

// * Validation, 상태와 결괏값에 따른 색상을 정의합니다.
const VALIDATION = {
  error100: '#FFE6E6',
  error500: '#FF6955',
} as const;

export const colors = {
  ...GREY_SCALE,
  ...PRIMARY,
  ...VALIDATION,
};

export type ColorKey = keyof typeof colors;
