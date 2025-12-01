function Wrapper({children}) {
  return (
    <div>
        <h1 className='text-4xl '>This is wrapper Component.</h1>
        <p>This is used to wrap other.</p>
        {children}
    </div> 
  )
}

export {Wrapper}