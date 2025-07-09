function AuthInput({label , paramType , paramId , paramOnChange ,paramPlaceholder , paramValue }){
    return(
      <>
      <div className="mb-2"></div> 
        <label htmlFor={paramId} className="font-medium mb-2 text-sm">
          {label}
        </label>
        <input
          onChange={paramOnChange} 
          type={paramType} 
          id={paramId}
          placeholder={paramPlaceholder}
          autoComplete="off"
          value={paramValue}
          className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500" 
        />     
      </>
    );
}

export default AuthInput;