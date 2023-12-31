const Button = ({label, iconURL, fullwidth}) => {
  return (
    <button className="flex justify-center text-white items-center gap-2 px-7 py-4 border font-montserrat
    text-lg leading-none bg-coral-red rounded-full border-coral-red">
        {label}
        {iconURL && <img src={iconURL} className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button
