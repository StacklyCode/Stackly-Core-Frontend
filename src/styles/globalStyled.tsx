import { Global, css } from '@emotion/react'
import { FC } from 'react'

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      *:focus {
        outline: none;
      }
      :root {
        font-size: 16px;
      }
      html {
        width: 100%;
      }
      body {
        background-color: #fafafa;
        overflow-x: hidden;
      }

      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figure,
      p,
      pre {
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      ol,
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: none;
        overflow: auto;
      }

      img {
        border-style: none;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      [type='button'],
      [type='reset'],
      [type='submit'],
      button {
        -webkit-appearance: button;
        -webkit-tap-highlight-color: transparent;
      }
      .fade-enter {
        opacity: 0;
      }
      .fade-enter-active {
        opacity: 1;
        transition: opacity 0.5s;
      }
      .fade-exit {
        opacity: 1;
      }
      .fade-exit-active {
        opacity: 0;
        transition: opacity 0.5s;
      }

      /* cyrillic-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
          U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
          U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiI2B.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthiI2B.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZNhiI2B.woff2)
          format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZxhiI2B.woff2)
          format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZBhiI2B.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
          U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZFhiI2B.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
          U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2)
          format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2)
          format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
          U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
          U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2)
          format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2)
          format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
          U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
          U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Roboto Medium'), local('Roboto-Medium'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2)
            format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Roboto Medium'), local('Roboto-Medium'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2)
            format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Roboto Medium'), local('Roboto-Medium'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2)
            format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Roboto Medium'), local('Roboto-Medium'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2)
            format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Roboto Medium'), local('Roboto-Medium'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2)
            format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
          U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Roboto Medium'), local('Roboto-Medium'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2)
            format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
          U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Roboto Medium'), local('Roboto-Medium'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Roboto Bold'), local('Roboto-Bold'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2)
            format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Roboto Bold'), local('Roboto-Bold'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2)
            format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Roboto Bold'), local('Roboto-Bold'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2)
            format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Roboto Bold'), local('Roboto-Bold'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2)
            format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Roboto Bold'), local('Roboto-Bold'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2)
            format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
          U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Roboto Bold'), local('Roboto-Bold'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2)
            format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
          U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Roboto Bold'), local('Roboto-Bold'),
          url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      .circles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
      }

      .circles li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 90, 90, 0.25);
        animation: animate 25s linear infinite;
        bottom: -150px;
        z-index: -1;
      }

      .circles li:nth-of-type(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }

      .circles li:nth-of-type(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }

      .circles li:nth-of-type(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }

      .circles li:nth-of-type(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }

      .circles li:nth-of-type(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }

      .circles li:nth-of-type(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
      }

      .circles li:nth-of-type(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
      }

      .circles li:nth-of-type(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }

      .circles li:nth-of-type(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }

      .circles li:nth-of-type(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
      @keyframes animate {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }

        100% {
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }

      /**
 * Swiper 6.4.11
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 6, 2021
 */

      @font-face {
        font-family: 'swiper-icons';
        src: url('data:application/font-woff;charset=utf-8;base64, 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')
          format('woff');
        font-weight: 400;
        font-style: normal;
      }
      :root {
        --swiper-theme-color: #007aff;
      }
      .swiper-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        /* Fix of Webkit flickering */
        z-index: 1;
      }
      .swiper-container-vertical > .swiper-wrapper {
        flex-direction: column;
      }
      .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
      }
      .swiper-container-android .swiper-slide,
      .swiper-wrapper {
        transform: translate3d(0px, 0, 0);
      }
      .swiper-container-multirow > .swiper-wrapper {
        flex-wrap: wrap;
      }
      .swiper-container-multirow-column > .swiper-wrapper {
        flex-wrap: wrap;
        flex-direction: column;
      }
      .swiper-container-free-mode > .swiper-wrapper {
        transition-timing-function: ease-out;
        margin: 0 auto;
      }
      .swiper-container-pointer-events {
        touch-action: pan-y;
      }
      .swiper-container-pointer-events.swiper-container-vertical {
        touch-action: pan-x;
      }
      .swiper-slide {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;
      }
      .swiper-slide-invisible-blank {
        visibility: hidden;
      }
      /* Auto Height */
      .swiper-container-autoheight,
      .swiper-container-autoheight .swiper-slide {
        height: auto;
      }
      .swiper-container-autoheight .swiper-wrapper {
        align-items: flex-start;
        transition-property: transform, height;
      }
      /* 3D Effects */
      .swiper-container-3d {
        perspective: 1200px;
      }
      .swiper-container-3d .swiper-wrapper,
      .swiper-container-3d .swiper-slide,
      .swiper-container-3d .swiper-slide-shadow-left,
      .swiper-container-3d .swiper-slide-shadow-right,
      .swiper-container-3d .swiper-slide-shadow-top,
      .swiper-container-3d .swiper-slide-shadow-bottom,
      .swiper-container-3d .swiper-cube-shadow {
        transform-style: preserve-3d;
      }
      .swiper-container-3d .swiper-slide-shadow-left,
      .swiper-container-3d .swiper-slide-shadow-right,
      .swiper-container-3d .swiper-slide-shadow-top,
      .swiper-container-3d .swiper-slide-shadow-bottom {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
      }
      .swiper-container-3d .swiper-slide-shadow-left {
        background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
      }
      .swiper-container-3d .swiper-slide-shadow-right {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
      }
      .swiper-container-3d .swiper-slide-shadow-top {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
      }
      .swiper-container-3d .swiper-slide-shadow-bottom {
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
      }
      /* CSS Mode */
      .swiper-container-css-mode > .swiper-wrapper {
        overflow: auto;
        scrollbar-width: none;
        /* For Firefox */
        -ms-overflow-style: none;
        /* For Internet Explorer and Edge */
      }
      .swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {
        display: none;
      }
      .swiper-container-css-mode > .swiper-wrapper > .swiper-slide {
        scroll-snap-align: start start;
      }
      .swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {
        scroll-snap-type: x mandatory;
      }
      .swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {
        scroll-snap-type: y mandatory;
      }
      :root {
        --swiper-navigation-size: 44px;
        /*
  --swiper-navigation-color: var(--swiper-theme-color);
  */
      }
      .swiper-button-prev,
      .swiper-button-next {
        position: absolute;
        top: 50%;
        width: calc(var(--swiper-navigation-size) / 44 * 27);
        height: var(--swiper-navigation-size);
        margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
        z-index: 10;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--swiper-navigation-color, var(--swiper-theme-color));
      }
      .swiper-button-prev.swiper-button-disabled,
      .swiper-button-next.swiper-button-disabled {
        opacity: 0.35;
        cursor: auto;
        pointer-events: none;
      }
      .swiper-button-prev:after,
      .swiper-button-next:after {
        font-family: swiper-icons;
        font-size: var(--swiper-navigation-size);
        text-transform: none !important;
        letter-spacing: 0;
        text-transform: none;
        font-variant: initial;
        line-height: 1;
      }
      .swiper-button-prev,
      .swiper-container-rtl .swiper-button-next {
        left: 10px;
        right: auto;
      }
      .swiper-button-prev:after,
      .swiper-container-rtl .swiper-button-next:after {
        content: 'prev';
      }
      .swiper-button-next,
      .swiper-container-rtl .swiper-button-prev {
        right: 10px;
        left: auto;
      }
      .swiper-button-next:after,
      .swiper-container-rtl .swiper-button-prev:after {
        content: 'next';
      }
      .swiper-button-prev.swiper-button-white,
      .swiper-button-next.swiper-button-white {
        --swiper-navigation-color: #ffffff;
      }
      .swiper-button-prev.swiper-button-black,
      .swiper-button-next.swiper-button-black {
        --swiper-navigation-color: #000000;
      }
      .swiper-button-lock {
        display: none;
      }
      :root {
        /*
  --swiper-pagination-color: var(--swiper-theme-color);
  */
      }
      .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: 300ms opacity;
        transform: translate3d(0, 0, 0);
        z-index: 10;
      }
      .swiper-pagination.swiper-pagination-hidden {
        opacity: 0;
      }
      /* Common Styles */
      .swiper-pagination-fraction,
      .swiper-pagination-custom,
      .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 10px;
        left: 0;
        width: 100%;
      }
      /* Bullets */
      .swiper-pagination-bullets-dynamic {
        overflow: hidden;
        font-size: 0;
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
        transform: scale(0.33);
        position: relative;
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
        transform: scale(1);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
        transform: scale(1);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
        transform: scale(0.66);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
        transform: scale(0.33);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
        transform: scale(0.66);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
        transform: scale(0.33);
      }
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 50%;
        background: #000;
        opacity: 0.2;
      }
      button.swiper-pagination-bullet {
        border: none;
        margin: 0;
        padding: 0;
        box-shadow: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .swiper-pagination-clickable .swiper-pagination-bullet {
        cursor: pointer;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
        background: var(--swiper-pagination-color, var(--swiper-theme-color));
      }
      .swiper-container-vertical > .swiper-pagination-bullets {
        right: 10px;
        top: 50%;
        transform: translate3d(0px, -50%, 0);
      }
      .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 6px 0;
        display: block;
      }
      .swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
      }
      .swiper-container-vertical
        > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
        .swiper-pagination-bullet {
        display: inline-block;
        transition: 200ms transform, 200ms top;
      }
      .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 4px;
      }
      .swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
      }
      .swiper-container-horizontal
        > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
        .swiper-pagination-bullet {
        transition: 200ms transform, 200ms left;
      }
      .swiper-container-horizontal.swiper-container-rtl
        > .swiper-pagination-bullets-dynamic
        .swiper-pagination-bullet {
        transition: 200ms transform, 200ms right;
      }
      /* Progress */
      .swiper-pagination-progressbar {
        background: rgba(0, 0, 0, 0.25);
        position: absolute;
      }
      .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        background: var(--swiper-pagination-color, var(--swiper-theme-color));
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: scale(0);
        transform-origin: left top;
      }
      .swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        transform-origin: right top;
      }
      .swiper-container-horizontal > .swiper-pagination-progressbar,
      .swiper-container-vertical
        > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
        width: 100%;
        height: 4px;
        left: 0;
        top: 0;
      }
      .swiper-container-vertical > .swiper-pagination-progressbar,
      .swiper-container-horizontal
        > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
        width: 4px;
        height: 100%;
        left: 0;
        top: 0;
      }
      .swiper-pagination-white {
        --swiper-pagination-color: #ffffff;
      }
      .swiper-pagination-black {
        --swiper-pagination-color: #000000;
      }
      .swiper-pagination-lock {
        display: none;
      }
      /* Scrollbar */
      .swiper-scrollbar {
        border-radius: 10px;
        position: relative;
        -ms-touch-action: none;
        background: rgba(0, 0, 0, 0.1);
      }
      .swiper-container-horizontal > .swiper-scrollbar {
        position: absolute;
        left: 1%;
        bottom: 3px;
        z-index: 50;
        height: 5px;
        width: 98%;
      }
      .swiper-container-vertical > .swiper-scrollbar {
        position: absolute;
        right: 3px;
        top: 1%;
        z-index: 50;
        width: 5px;
        height: 98%;
      }
      .swiper-scrollbar-drag {
        height: 100%;
        width: 100%;
        position: relative;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        left: 0;
        top: 0;
      }
      .swiper-scrollbar-cursor-drag {
        cursor: move;
      }
      .swiper-scrollbar-lock {
        display: none;
      }
      .swiper-zoom-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .swiper-zoom-container > img,
      .swiper-zoom-container > svg,
      .swiper-zoom-container > canvas {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
      .swiper-slide-zoomed {
        cursor: move;
      }
      /* Preloader */
      :root {
        /*
  --swiper-preloader-color: var(--swiper-theme-color);
  */
      }
      .swiper-lazy-preloader {
        width: 42px;
        height: 42px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -21px;
        margin-top: -21px;
        z-index: 10;
        transform-origin: 50%;
        animation: swiper-preloader-spin 1s infinite linear;
        box-sizing: border-box;
        border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
        border-radius: 50%;
        border-top-color: transparent;
      }
      .swiper-lazy-preloader-white {
        --swiper-preloader-color: #fff;
      }
      .swiper-lazy-preloader-black {
        --swiper-preloader-color: #000;
      }
      @keyframes swiper-preloader-spin {
        100% {
          transform: rotate(360deg);
        }
      }
      /* a11y */
      .swiper-container .swiper-notification {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        opacity: 0;
        z-index: -1000;
      }
      .swiper-container-fade.swiper-container-free-mode .swiper-slide {
        transition-timing-function: ease-out;
      }
      .swiper-container-fade .swiper-slide {
        pointer-events: none;
        transition-property: opacity;
      }
      .swiper-container-fade .swiper-slide .swiper-slide {
        pointer-events: none;
      }
      .swiper-container-fade .swiper-slide-active,
      .swiper-container-fade .swiper-slide-active .swiper-slide-active {
        pointer-events: auto;
      }
      .swiper-container-cube {
        overflow: visible;
      }
      .swiper-container-cube .swiper-slide {
        pointer-events: none;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 1;
        visibility: hidden;
        transform-origin: 0 0;
        width: 100%;
        height: 100%;
      }
      .swiper-container-cube .swiper-slide .swiper-slide {
        pointer-events: none;
      }
      .swiper-container-cube.swiper-container-rtl .swiper-slide {
        transform-origin: 100% 0;
      }
      .swiper-container-cube .swiper-slide-active,
      .swiper-container-cube .swiper-slide-active .swiper-slide-active {
        pointer-events: auto;
      }
      .swiper-container-cube .swiper-slide-active,
      .swiper-container-cube .swiper-slide-next,
      .swiper-container-cube .swiper-slide-prev,
      .swiper-container-cube .swiper-slide-next + .swiper-slide {
        pointer-events: auto;
        visibility: visible;
      }
      .swiper-container-cube .swiper-slide-shadow-top,
      .swiper-container-cube .swiper-slide-shadow-bottom,
      .swiper-container-cube .swiper-slide-shadow-left,
      .swiper-container-cube .swiper-slide-shadow-right {
        z-index: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .swiper-container-cube .swiper-cube-shadow {
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        z-index: 0;
      }
      .swiper-container-cube .swiper-cube-shadow:before {
        content: '';
        background: #000;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        -webkit-filter: blur(50px);
        filter: blur(50px);
      }
      .swiper-container-flip {
        overflow: visible;
      }
      .swiper-container-flip .swiper-slide {
        pointer-events: none;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 1;
      }
      .swiper-container-flip .swiper-slide .swiper-slide {
        pointer-events: none;
      }
      .swiper-container-flip .swiper-slide-active,
      .swiper-container-flip .swiper-slide-active .swiper-slide-active {
        pointer-events: auto;
      }
      .swiper-container-flip .swiper-slide-shadow-top,
      .swiper-container-flip .swiper-slide-shadow-bottom,
      .swiper-container-flip .swiper-slide-shadow-left,
      .swiper-container-flip .swiper-slide-shadow-right {
        z-index: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
    `}
  />
)

export default GlobalStyles
