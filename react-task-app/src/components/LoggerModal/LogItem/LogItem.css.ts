import { style } from '@vanilla-extract/css';
import { vars } from '../../../App.css.ts';

export const logItemWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  justifyContent: 'center',
  padding: vars.spacing.big2,
  width: 'auto',
  overflowY: 'auto',
  overflowX: 'hidden',
  borderBottom: 'solid 1px rgb(191, 197, 217, 0.3)',
  ':hover': {
    backgroundColor: vars.color.mainFadedBright,
    borderRadius: 10,
  },
});

export const message = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T4,
  marginBottom: vars.spacing.small,
});

export const author = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: 10,
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
  fontWeight: 'bold',
  marginBottom: vars.spacing.medium,
});

export const dates = style({
  fontSize: vars.fontSizing.T4,
  fontWeight: 'bold',
  marginBottom: vars.spacing.medium,
});
