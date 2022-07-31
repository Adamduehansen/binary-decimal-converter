import { useId } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Input({ label, ...inputProps }: Props): JSX.Element {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
    </div>
  );
}

export default Input;
