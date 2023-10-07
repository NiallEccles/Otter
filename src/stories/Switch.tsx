import React, { useEffect, useState } from 'react';
import './button.css';
import { Locate, LocateOff } from 'lucide-react';

interface SwitchProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Switch = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: SwitchProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const [checked, setChecked] = useState(false);

  console.log(size, backgroundColor, props, mode);
  

  useEffect(() => {
    console.log(checked);
  }, [checked])

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
    {/* <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button> */}

    <input
        // className="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}"
        className='sr-only'
        type="checkbox"
        role="switch"
        id={label}
        onChange={handleChange}
        checked={checked} />

    {/* <label className='bg-red-500 rounded-full inline-block' htmlFor={label}>
        <Locate/>
    </label> */}
    <br />
        <button onClick={handleChange} className={`relative rounded-full w-28 h-12 px-2 ${checked ? 'bg-green-500' : 'bg-red-300'}`}>
            <p className={`absolute top-1/2 -translate-y-1/2 ${checked ? 'left-4' : 'left-14 translate-x-4'}`}>{ checked ? 'On' : 'Off'}</p>
            <div className={`block bg-white rounded-full absolute top-1/2 -translate-y-1/2 p-2 w-fit transition-all left-2 ${checked ? 'left-16 translate-x-1' : 'left-2'}`}>
                {checked ? <Locate className='w-5 h-5'/> : <LocateOff className='w-5 h-5'/>}
            </div>
        </button>
    </>
  );
};
