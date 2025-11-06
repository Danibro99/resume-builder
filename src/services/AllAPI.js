import commonAPI from "./commonAPI";
import serverURL from "./serverurl";

//add resume API-POST
export const addResumeAPI= async(resume)=>{
    return await commonAPI(`${serverURL}/resumes`,"POST",resume)
}

//get resume API-GET

export const getResumeAPI=async (id)=>{
    return await commonAPI(`${serverURL}/resumes/${id}`,"GET")
}

export const editResumeAPI=async (id,resume)=>{
    return await commonAPI(`${serverURL}/resumes/${id}`,"GET",resume)
}
//update resume API-
//add resume to history API
//delete from history API