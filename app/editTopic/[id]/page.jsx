import Editform from "@/components/edit";

const getById = async(id)=> {
    try{
        const response = await fetch(`http://localhost:3000/api/topics/${id}`,{
            mehtod : "GET",
            cache : "no-store",
            headers : {
                "Content-type" : "application/json"
            }
        })
        const final = await response.json();
        return final.result;
        
    }catch(err){
        console.log("Edit topic = " + err);
    }
}

const EditTopic = async ({params})=>{
    const {id} = params;
    const data = await getById(id);
    const {title,description} = data;
    
    return (
        <Editform title={title} description={description} id={id}/>
    )

}
export default EditTopic;
