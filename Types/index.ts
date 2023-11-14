import { title } from "process"
import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title:string
    containerStyles?:string
    btntype?:"button"|"submit"
    handleClick?:MouseEventHandler<HTMLButtonElement>
    textStyles?:string ;
    rightIcon?:string;
    
}

export interface SearchManufacturerProps{
  manufacturers:string;
  setmanufacturers:(manufacturers:string)=>void;
}

export interface CarCardprops{
  city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number
make:string;
model:string;
transmission:string;
year:number
}

export interface FilterProps{
  manufacturer:string,
  year:number,
fuel:string,
limit:number,
modal:string
}

export interface OptionProps {
  title:string
  value:string
}
export interface FilterPropsbtns {
  title:string
  options:OptionProps[]
}

export interface ShoeMore {
  isNext:boolean
  pagenumber:number
}
