import Image from 'next/image'
import { Hero,Customfilter,SearchBars,CarCard,ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constants';

export default async function Home({searchParams}) {

const allCars=await fetchCars({
manufacturer:searchParams.manufacturer || "" ,
year:searchParams.year || 2023 ,
fuel:searchParams.fuel || "" ,
limit:searchParams.limit || 10 ,
modal:searchParams.modal || "" ,
});
 

const isDataEmpty=!Array.isArray(allCars) || allCars.length<1 || !allCars 



console.log(allCars)

  return (
    <main className="overflow-hidden">
    <Hero/>

<div className='mt-12 padding-x padding-y max-width' id='discover'>
  <div className='home__text-container'>
    <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
  <p>Explore the cars you might like</p>
  </div>

<div className='home__filters'>

  <Customfilter  />

<div className='home__filter-container'>
<SearchBars title="year" options={fuels} />
<SearchBars title="fuel"  options={yearsOfProduction} />
</div>
</div>

{!isDataEmpty? (
  <section>
<div className='home__cars-wrapper'>
  {allCars?.map((car)=>(
    <CarCard car={car}/>
  ))}
</div>
<ShowMore
pagenumber={(searchParams.limit || 10 ) /10}
isNext={(searchParams.limit || 10)> allCars.length}
/>
  </section>
):(
  <div className='home__error-container'>
    <h1 className='text-black test-xk font-bold'>Oops, No Resukts Found</h1>
    <p>{allCars?.message}</p>
  </div>
)}

</div>
        </main>
  )
}