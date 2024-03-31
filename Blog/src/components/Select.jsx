import React, { useId } from 'react'

function Select({
  options, label, className = '',
}, ref) {
  const id = useId()
  return (

    <div className='w-full'>

      {label && <label htmlFor={id}></label>}
      <select
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        id={id}>
        {options?.map((options) => (
          <option value={options}>{options}</option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select) 