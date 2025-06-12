import db from "../libs/db.js";



export const createProblem= async (req,res)=>{
    //going to get all the data from the request body
    const {title, description, difficulty, tags, examples, constraints, testcases, codeSnippets, referenceSolutions} = req.body;

    //going to check the user role once again
    if(req.user.role!=="ADMIN"){
        return res.status(403).json({error:"You are not allowed to create a problem"})
    }
    //loop through each reference solution for different languages
    try{
        for(const [language, solutionCode] of Object.entries(referenceSolutions)){
            
        }
    }
    catch(error){

    }
    

}

export const getAllProblems=async(req,res)=>{}

export const getProblemById=async(req,res)=>{}

export const updateProblem=async(req,res)=>{}

export const deleteProblem=async(req,res)=>{}

export const getAllProblemsSolvedByUser=async(req,res)={}

