const fonts = {
  title: {
    fontSize: '22px',
  },
  body: {
    fontSize: '16px',
  },
  headline: {
    fontSize: '22px',
  },
  subhead: {
    fontSize: '15px',
  },
  caption: {
    fontSize: '12px',
  },
};

const PALETTE = {
  black: '#000000',
  white: '#ffffff',
  yellow: '#f6ffa6',
  mint: '#81eccc',
  blue: '#007AFF',
  red: '#FF3B30',
  gray100: '#F7F8FB',
  gray200: '#F0F1F6',
  gray300: '#E8E9F2',
  gray400: '#E1E2ED',
  gray500: '#D9DBE9',
  gray600: '#AEAFBA',
  gray700: '#82838C',
  gray800: '#57585D',
  gray900: '#2B2C2F',
};

const lightColors = {
  neutral: {
    text: {
      default: `${PALETTE.gray800}`,
      weak: `${PALETTE.gray600}`,
      strong: `${PALETTE.gray900}`,
    },
    bc: {
      default: `${PALETTE.white}`,
      weak: `${PALETTE.gray400}`,
      strong: `${PALETTE.gray100}`,
    },
    bd: { default: `${PALETTE.gray300}`, active: `${PALETTE.gray800}` },
  },
  primary: {
    text: { default: `${PALETTE.white}`, weak: `${PALETTE.mint}` },
    bc: { default: `${PALETTE.mint}`, weak: `${PALETTE.white}` },
  },
  danger: {
    text: 'red',
    bd: 'red',
  },
  secondary: {
    text: `${PALETTE.gray900}`,
    bc: `${PALETTE.yellow}`,
  },
  accent: {
    text: { default: `${PALETTE.white}`, weak: `${PALETTE.blue}` },
    bc: { default: `${PALETTE.blue}`, weak: `${PALETTE.white}` },
    bd: `${PALETTE.blue}`,
  },
};

const darkColors = {
  neutral: {
    text: { default: `${PALETTE.gray600}`, weak: `${PALETTE.gray700}`, strong: `${PALETTE.white}` },
    bc: { default: `${PALETTE.black}`, weak: `${PALETTE.gray900}`, strong: `${PALETTE.gray900}` },
    bd: { default: `${PALETTE.gray800}`, active: `${PALETTE.white}` },
  },
  primary: {
    text: { default: `${PALETTE.white}`, weak: `${PALETTE.mint}` },
    bc: { default: `${PALETTE.mint}`, weak: `${PALETTE.white}` },
  },
  danger: {
    text: 'red',
    bd: 'red',
  },
  secondary: {
    bc: `${PALETTE.yellow}`,
    text: `${PALETTE.gray900}`,
  },
  accent: {
    text: { default: `${PALETTE.white}`, weak: `${PALETTE.blue}` },
    bc: { default: `${PALETTE.blue}`, weak: `${PALETTE.white}` },
    bd: `${PALETTE.blue}`,
  },
};

export { fonts, lightColors, darkColors };
