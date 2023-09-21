const schema = {
  name:"resource",
  title:"Resourse",
  type:"document",
  fields:[
    {
      name:"title",
      title:"Title",
      type:"string",
      require,  
      validation:(v)=>v.required(),
    },

    {name:"slug",
    title:"Slug",
    type:"slug",
    options:{source:"title"}
  },
  {name:"dowloadlink",
  title:"Download Link",
  type:"url",
  validation:(v)=>v.required(),
},
{name:"views",
title:"Views ",
type:"number",
initialValue:0
},
{name:"poster",
title:"Poster ",
type:"image",
validation:(v)=>v.required(),
options:{
  hotspot:true
}
},
{name:"category",
title:"Category",
type:"string",
validation:(v)=>v.required(),
options:{
  list: ["Next 13","Frontend","Backend","Fullstack","other"]
}
},

  ]
}
export default schema