import { ChevronDown } from "lucide-react"

const Lang = () => {
  return (
    <div className="text-[#212832] font-medium px-4 flex justify-center items-center gap-x-1 cursor-pointer hover:text-[#DF6951] transition-colors duration-200">
      EN
      <button className="cursor-pointer">
       <ChevronDown size={16} />
      </button>
    </div>
  )
}

export default Lang
