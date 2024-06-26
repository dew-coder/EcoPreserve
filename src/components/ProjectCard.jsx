import {useNavigate} from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";

const ProjectCard = (props) => {
  
  const navigate = useNavigate();
    const details=props.data;

    return (  
        <div className="w-[25rem] h-[33rem] mx-1">
        <div className="card rounded-xl p-4 w-[25rem] h-[33rem] flex flex-col hover:scale-105 transition-all ease-in-out bg-white ">

        <img src={details.project_image} alt="placeholder" className="w-full h-[14.5rem] mb-2 rounded-xl"/>

        <h1 className="text-xl font-bold " >{details.project_name }</h1>
        <p className="text-gray-500 text-sm details">{details.company_name}</p> 
        <div className="flex justify-start items-center mt-2 gap-1 pb-3 text-gray-800 ">
            <p className=" flex items-center gap-1"><IoTimeOutline/>{details.project_daysleft} days left</p>
            <p >|</p>
            <p > {details.project_percent}% funded </p>
        </div>
        
        <p className="text-sm description">{details.project_description.split(" ").slice(0,40).join(" ")+" . . ."}</p>
        
        <div className=" grow flex justify-center items-end mt-3">
            <button className="bg-green-500/50 py-1 px-3 rounded-md hover:bg-green-500/80" onClick={
                ()=>{
                  
                  navigate("/Invest", {state: {project: details}, replace: true});
                }
            } >Donate</button>
        </div>
        </div>
        </div>
    );
}
 
export default ProjectCard;