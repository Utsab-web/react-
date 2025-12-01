function Buttons(props) {
  return (
    <div className="flex justify-center items-center my-8 ">
        <button onClick={()=>(document.getElementById(props.id).className="bg-blue-500 text-white w-24 h-12 border-2 border-black")} id={props.id} className={`bg-gray-300 text-black h-12 w-24 border`}>{props.message}</button>
    </div> 
  )
}

export {Buttons}