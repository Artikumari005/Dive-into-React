import React, {useId} from "react";

const Input = React.forwardRef(function Input({
    label,
    type='text',
    className='',
    ...props
},ref){
   return(
    <div>
     {label && <label
     className="inline-block mb-1 pl-1"
        htmlFor={id}>
        {label}
        </label>}
        <input 
        type={type}
        className={`w-full px-4 py-2 rounded-full border border-amber-800 ${className}`}
        ref={ref}
        {...props}/>
    </div>
   )
})

export default Input