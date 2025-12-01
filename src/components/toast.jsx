function Toast(props) {
  return (
    <div className={`w-98 ${props.type=="Success"?"bg-green-300":"bg-red-300"} h-20 text-3xl flex items-center justify-center my-5 mx-auto text-black`}>{props.message}</div>
  )
}
export{Toast}