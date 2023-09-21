import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
  
const ResourceCard = ({ key,title,views ,dowloadlink ,slug ,image }) => {

  return (
    <Card className=" max-w-[370px] min-h-[630px] flex flex-col justify-end w-full  border-0 ">
        
        

            <Image src={image} height={530} width={384} className=" overflow-hidden rounded-2xl" alt="resource image" />
        

<CardTitle className="text-xl font-semibold text-white overflow-ellipsis line-clamp-1
  w-full text-left mt-6 ">
    {title}

</CardTitle>
        <CardContent>

                
        </CardContent>

        <CardFooter className=" flex justify-between  p-0">

            <div className="  gap-3 flex-center">
                <Image src={`/downloads.svg`} alt="download logo"  height={30} width={30}/>
                {views}
            </div>

            <a href={`${dowloadlink}`} target="_blank"   className=" font-semibold gap-2 text-gradient_blue-purple  flex-center">
                    Download Now <Image src={`/arrow-blue.svg`} height={10} width={10} alt="download" />
            </a>
            
        
        </CardFooter>
  </Card>
  )
}

export default ResourceCard