import { nanoid } from 'nanoid';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
}

const TextInput = forwardRef(function TextInput(
  { title, errorText, value = '', ...rest }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid();

  const inputClassName = `w-full rounded-md border-2 p-2 placeholder:text-sm
      ${
        errorText
          ? 'border-error caret-error outline-error focus:outline-error'
          : 'border-lightgrey focus:outline-darkgray'
      }
    `;

  return (
    <div
      className={`w-full min-w-[100px] max-w-[442px] ${
        errorText ? 'text-error' : 'text-inherit'
      }`}
    >
      {!!title && (
        <label htmlFor={id} className="text-sm font-medium">
          {title}
        </label>
      )}
      <input {...rest} id={id} value={value} className={inputClassName} />

      {errorText && <span className="text-xs">{errorText}</span>}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
