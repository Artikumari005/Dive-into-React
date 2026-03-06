import React , {useId} from "react";

function Select({
    options,
    label,
    className,
    ...props
}, ref){
    const id= useId()
    return(
      <div className="w-full">
        {label && <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>}
        <select 
          className={`w-full px-4 py-2 rounded-full border border-amber-800 ${className}`}
          ref={ref}
          id={id}
          {...props}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
}
export default React.forwardRef(Select)