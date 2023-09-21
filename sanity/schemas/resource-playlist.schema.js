 const schema= {
    name:"resourceplaylist",
    title:"Resource Playlist",
    type:"document",
    validation:(v)=>v.required(),
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string",
            validation:(v)=>v.required(),
        },
        {name:"resource",
        type:"array",
        title:"Resource",
        of : [
            {type:"reference",to:[{type:"resource"}]}
        ]
     
        
        }
    ]

}

export default schema