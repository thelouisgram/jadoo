import { ChevronDown } from "lucide-react"

const Lang = () => {
  return (
    <div className="text-[#212832] px-4 flex justify-center items-center gap-x-1 hover:cursor">
      EN
      <button>
       <ChevronDown size={16} />
      </button>
    </div>
  )
}

export default Lang
