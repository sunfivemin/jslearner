import { createGlobalTheme, style } from '@vanilla-extract/css';

// 글로벌 토큰 정의
export const vars = createGlobalTheme(':root', {
  color: {
    main: '#3f51b5', // 인디고 (기본 메인 컬러)
    mainDarker: '#303f9f', // 더 짙은 인디고
    mainFaded: '#9fa8da', // 흐릿한 인디고
    mainFadedBright: '#c5cae9cc', // 밝고 투명한 인디고

    list: 'rgb(235, 236, 240)', // 리스트 배경
    task: 'rgb(255, 255, 255)', // 태스크 카드 배경
    taskHover: 'rgb(245, 245, 245)', // 호버 시 카드

    brightText: 'rgb(255, 255, 255)', // 흰색 텍스트
    darkText: 'rgb(33, 33, 66)', // 짙은 텍스트
    secondaryDarkText: 'rgb(100, 115, 143)', // 보조 텍스트
    secondaryDarkTextHover: 'rgb(210, 215, 225)', // 호버용 보조 텍스트

    selectedTab: 'rgb(121, 134, 203)', // 선택된 탭
    updateButton: 'rgb(63, 81, 181)', // 인디고 버튼
    deleteButton: 'rgb(198, 40, 40)', // 붉은 삭제 버튼
  },
  fontSizing: {
    T1: '32px',
    T2: '24px',
    T3: '18px',
    T4: '14px',
    P1: '12px',
  },
  spacing: {
    small: '5px',
    medium: '10px',
    big1: '20px',
    big2: '15px',
    listSpacing: '30px',
  },
  font: {
    body: 'Pretendard',
  },
  shadow: {
    basic: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
  },
  minWidth: {
    list: '250px',
  },
});

// 레이아웃 스타일 정의
export const appContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'var(--color-list)',
  fontFamily: 'var(--font-body)',
  color: 'var(--color-darkText)',
  fontSize: 'var(--font-sizing-T4)',
  overflow: 'hidden',
  '@media': {
    '(max-width: 600px)': {
      fontSize: 'var(--font-sizing-P1)',
      padding: '0 10px',
      overflowY: 'auto',
      overflowX: 'hidden',
      height: '100%',
      width: '100%',
      boxSizing: 'border-box',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
});

export const board = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  padding: 'var(--spacing-big1)',
  boxSizing: 'border-box',
  '@media': {
    '(max-width: 600px)': {
      padding: 'var(--spacing-big2)',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflowY: 'auto',
      overflowX: 'hidden',
      fontSize: 'var(--font-sizing-P1)',
    },
  },
});

export const buttons = style({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.6rem 1.2rem',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: 500,
  cursor: 'pointer',
  color: 'white',
  backgroundColor: 'var(--color-updateButton)',
  transition: 'background-color 0.2s ease, transform 0.1s ease',
  selectors: {
    '&:hover': {
      backgroundColor: 'var(--color-mainDarker)',
    },
    '&:disabled': {
      backgroundColor: 'var(--color-taskHover)',
      color: 'var(--color-secondaryDarkText)',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
});
