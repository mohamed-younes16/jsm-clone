export function buildqueryparams(p){
    const { type, query, category, page = 1, perpage = 20 } = p;

    const conditions = [`*[_type=="${type}"`];
  
    if (query) conditions.push(`title match "*${query}*"`);
  
    if (category && category !== "All") {
      conditions.push(`category == "${category}"`);
    }
  
    // Calculate pagination limits
    const offset = (page - 1) * perpage;
    const limit = perpage;
  
    return conditions.length > 1
      ? `${conditions[0]} && (${conditions
          .slice(1)
          .join(" && ")})][${offset}...${limit}]`
      : `${conditions[0]}][${offset}...${limit}]`;
}
