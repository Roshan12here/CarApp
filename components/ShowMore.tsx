"use client"

import { ShoeMore } from "@/Types"
import { useRouter } from "next/navigation"
import { CustomButton } from "."
import { UpdateUserParams } from "@/utils"

const ShowMore = ({isNext,pagenumber}:ShoeMore) => {
  const router=useRouter()

  const handleNavigation=()=>{
const newLimit =(pagenumber +1) *10;
const newPathName=UpdateUserParams("limit",`${newLimit}`)
router.push(newPathName)
  }

    return (
    <div  className="w-full flex-center gap-5 mt-10">
{!isNext && (
    <CustomButton
    title="Show More"
    btntype="button"
    containerStyles="bg-primary-blue rounded-full text-white"
    handleClick={handleNavigation}
    />
)}
    </div>
  )
}

export default ShowMore