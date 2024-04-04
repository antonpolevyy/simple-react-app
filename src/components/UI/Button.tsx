import React from 'react'; // we need this to make JSX compile

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => (
  <>
    <button onClick={onClick}>{title}</button>
  </>
);

export default Button;
