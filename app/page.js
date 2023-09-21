import Filters from '@/components/Filters'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { Button } from '@/components/ui/button'
import { getResourcePlaylist, getResources } from '@/sanity/actions'
import Image from 'next/image'

export default async function Home({searchParams:{search ,categorie}}) {
  const resources = await getResources({
    query:search,
    category:categorie,
    page:"1"
  })





const resourcesPlaylist = await getResourcePlaylist("Most Popular")





  return (
    <main className="min-h-screen p-4 mt-24 max-w-screen-2xl mx-auto">
              <div className=' flex flex-col items-center'> 

                <div className=' bg-banner min-h-[250px]  justify-center items-center  self-stretch rounded-e-2xl overflow-hidden flex '>
                  
                  <h1 className='text-5xl max-md:text-4xl font-bold text-center max-md:leading-[3.5rem]'> JavaScript Mastery Resources </h1>

                </div>
                <SearchForm/>
                <Filters/>
        <div className=' mt-16 flex-center  flex-col'>
          {search?.length > 0 &&
          
          <h1 className=' text-2xl ' >You Are searching for &quot;<span className=' text-green-100 font-bold'>{search}</span>&quot;
          {categorie?.length > 0 && <>in <span className=' capitalize text-green-100 font-bold'>{categorie} </span> Section</>} </h1>}

          { !search?.length > 0  && categorie?.length > 0 && <> <h1 className=' text-2xl  tracking-widest font-bold animate-bounce'> {categorie} </h1> </>}

             {  categorie?.length > 0 || search?.length > 0  ? 
             <div className=' flex mt-16 flex-wrap gap-16 justify-center '>

                {resources?.length > 0 ?  resources?.map(e=>(
                  <ResourceCard
                  key={e._id}
                  title={e.title}
                  views = {e.views}
                  dowloadlink = {e.dowloadlink}
                  slug = {e.slug}
                  image = {e.image}

                  />
                )):
                
                
                <p className=' text-red-600 text-xl font-semibold'>Not Found </p>}

                </div> 
                
                :  resourcesPlaylist?.length > 0 && resourcesPlaylist.map((el)=>(
                  <div className=' my-12  border-b pb-9 border-white ' key={el._id}> 
                  <h1 className=' text-center font-semibold animate-pulse text-2xl '>{el.title} </h1>
                  <div   className=' flex mt-16 flex-wrap gap-16 justify-center '>

                      {
                      el?.resource.map(e=>(
                    <ResourceCard
                  key={e._id}
                  title={e.title}
                  views = {e.views}
                  dowloadlink = {e.dowloadlink}
                  slug = {e.slug}
                  image = {e.image}

                  />
                  ))
                      }

                  </div>
                  </div>
                 
                 
                  
                ))
                
                

                }

        </div>

       </div>
    </main>
  )
}
