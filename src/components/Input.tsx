import { useId } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Input({ label, ...inputProps }: Props): JSX.Element {
  const id = useId();

  return (
    <div className='my-2'>
      <label
        htmlFor={id}
        className='block uppercase text-gray-600 text-sm pb-2'
      >
        {label}
      </label>
      <input id={id} className='border w-full rounded-lg p-2' {...inputProps} />
    </div>
  );
}

export default Input;
