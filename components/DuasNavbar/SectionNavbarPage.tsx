import Duas from "@/app/Category/DuasImportance/page"
import { CategoryLinks, DuasImportanceLinks } from "@/constant/Category"

const SectionNavbarPage = () => {
  return (
    <div> {Object.entries(CategoryLinks).map((catlink:any) => {
        return (
            <div key={catlink.id} className="text-emerald-700 text-2xl"><h1>{catlink.title}</h1>
            <div className="dark:bg-gray-500 text-emerald-600"> {Object.entries(DuasImportanceLinks).map((duaslink:any) => {
                return (
                    <span>{duaslink.url}</span>
                )
                })}
            </div>
            </div>
        )}
     )}</div>
  )
}

export default SectionNavbarPage