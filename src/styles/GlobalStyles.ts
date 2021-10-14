import { createGlobalStyle } from 'styled-components'
import { Theme } from '@/styles/Theme'

export default createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-family: 'Nunito', sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote {

    &:before,
    &:after {
      content: none;
    }
  }

  q {

    &:before,
    &:after {
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  Link {
    cursor: pointer;
    text-decoration: none;
  }

  a {
    color: inherit;
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    font-size: 72px;
    line-height: 98px;
    font-weight: bold;
    color: ${Theme.Black};
  }

  h2 {
    font-size: 42px;
    line-height: 57px;
    font-weight: bold;
    color: ${Theme.Black};
  }

  p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    color: ${Theme.Black};
  }
`

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

export const media = {
  bigDesktop: customMediaQuery(2560),
  desktop: customMediaQuery(1920),
  smallDesktop: customMediaQuery(1600),
  notebook: customMediaQuery(1440),
  smallNotebook: customMediaQuery(1366),
  tablet: customMediaQuery(1024),
  smallTablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
  smallMobile: customMediaQuery(365),
  miniMobile: customMediaQuery(320),
}
