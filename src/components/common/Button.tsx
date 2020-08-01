import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

interface ButtonStyledProps {
  cyan?: string | boolean;
  fullwidth?: boolean;
}

interface ButtonProps extends ButtonStyledProps {
  to?: string;
  cyan?: boolean;
  disabled?: boolean;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  return props.to ? (
    <StyledLink {...props} to={props.to} cyan={props.cyan ? 'true' : ''} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;

const buttonStyle = css<ButtonStyledProps>`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  ${(props) =>
    props.fullwidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
    &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<ButtonStyledProps>`
  ${buttonStyle}
`;

const StyledLink = styled(Link)<ButtonStyledProps>`
  ${buttonStyle}
`;
