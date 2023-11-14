"use client"

import Image from "next/image"
import { Fragment,useState } from "react"
import { Transition,Listbox } from "@headlessui/react"
import { FilterPropsbtns } from "@/Types"
import { useRouter } from "next/navigation"
import { UpdateUserParams } from "@/utils"

const Customfilter = ({title,options}:FilterPropsbtns) => {
  const router= useRouter()
  const [selected,setSelected] =useState(options[0])
const updateHandleparam=(e:{value:string,title:string})=>{

const newPathName=UpdateUserParams(title,e.value.toLowerCase())

  router.push(newPathName);
}


  return (
    <div className="w-fit">
<Listbox 
value={selected}
onChange={(e)=>{
  setSelected(e)
updateHandleparam(e)  
}
}
>
<div className="relative w-fit z-10">
<Listbox.Button className="custom-filter__btn">
<span className="block truncate">{selected.title}</span>
<Image
src="/chevron-up-down.svg"
alt="filterimg"
width={20}
height={20}
className="ml-4 object-contains"
/>
</Listbox.Button>

<Transition 
as={Fragment}
leave="transition ease-in duration-100 "
leaveFrom="opacity-100"
leaveTo="opacity-0"
>
<Listbox.Options className="custom-filter__options cardbg">
    {options.map((option)=>(
  <Listbox.Option
  key={option.title}
  value={option}
  className={({active})=>`relative cursor-default select-none py-2 px-4 ${
    active ?  `cardbg text-white` :`text-gray-900`
  }`}
  >
{({selected}) =>(
  <span>
{option.title}
  </span>
)}
   </Listbox.Option>
    ))}
</Listbox.Options>
</Transition>

</div>
</Listbox>
    </div>
  )
}

export default Customfilter