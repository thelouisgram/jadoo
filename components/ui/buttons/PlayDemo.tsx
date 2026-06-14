import { PlayIcon } from "lucide-react"

const PlayDemo = () => {
  return (
    <button className="text-[#686D77] text-[18px] font-medium rounded-xl flex items-center gap-5.25 cursor-pointer hover:text-[#181E4B] transition-all duration-200 group">
        <div className="rounded-full flex justify-center items-center w-13 bg-[#DF6951] h-13 shadow-[0_8px_16px_rgba(223,105,81,0.2)] group-hover:scale-105 group-hover:shadow-[0_12px_24px_rgba(223,105,81,0.35)] transition-all duration-200">
            <PlayIcon className="w-4 h-4 text-[#ffffff] fill-[#ffffff] ml-0.5" />
        </div>
      Play Demo
    </button>
  )
}

export default PlayDemo
