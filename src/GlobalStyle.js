import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import 'modern-normalize';
import './index.css';

export const GlobalStyle = createGlobalStyle`
  *,
	*::before,
	*::after {
		box-sizing: inherit;
	}
  
  html,
  body {
    background: ${theme.colors.secondary};
    color: ${theme.colors.main};
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-gutter: stable;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      inline-size: 5px;
    }

    ::-webkit-scrollbar-track {
      background: rgb(241, 241, 241);
      inline-size: 3px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgb(230, 230, 230);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(18, 20, 23, 0.05);
    }
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
		text-decoration: none;
		color: inherit;
	}

  img{
    display: block;
    max-inline-size: 100%;
    block-size: auto;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
		font-family: inherit;
		padding: 0;
		margin: 0;
	}

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.light} inset;
  -webkit-text-fill-color: ${theme.colors.main};
  }
`;
