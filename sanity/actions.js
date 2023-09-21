import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildqueryparams } from "./utils";

export const getResources =async (p)=>{
const {query , category,page}= p
try {
const resource = await readClient.fetch(
    groq`${buildqueryparams(
        {
            type:"resource",
            query,
            category,
            page:parseInt(page)
        }
    )}{
        title,
        _id,
        dowloadlink,
        "image":poster.asset->url,
        category,
        slug,
        views,
    }
    
    
    `,{},{next:{revalidate:30}}
)
return resource 

    
} catch (error) {
    console.log(error)
}

}


export const getResourcePlaylist =async ()=>{
   
    try {
    const resource = await readClient.fetch(
        groq`*[_type == "resourceplaylist"]{
            title,
            _id,

            resource[0..6]->{
                title,
                _id,
                dowloadlink,
                "image":poster.asset->url,
                category,
                slug,
                views
            }
        }
        
        
        `,{},{next:{revalidate:30}}
    )
    return resource 
    
        
    } catch (error) {
        console.log(error)
    }
    
    }
