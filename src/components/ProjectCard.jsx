import {useNavigate} from "react-router-dom";

const ProjectCard = (props) => {
  
  const navigate = useNavigate();
    const details=props.data;
    function MouseOver(event) {
        event.currentTarget.classList.add('border');
        event.currentTarget.classList.add('shadow-md');

      }
      function MouseOut(event){
        event.currentTarget.classList.remove('border');
        event.currentTarget.classList.remove('shadow-md');
      }
    return (  
        <div className="w-[25rem] h-[32rem] mx-1">
        <div className="card rounded-xl p-4 w-[25rem] h-[32rem] flex flex-col transition-all ease-in-out bg-white " onMouseOver={MouseOver} onMouseOut={MouseOut}>

        <img src={details.project_image} alt="placeholder" className="w-full h-[14.5rem] mb-2 rounded-xl"/>

        <h1 className="text-xl font-bold " >{details.project_name }</h1>
        <p className="text-gray-500 text-sm details">{details.company_name}</p> 
        <p className="text-sm description">{details.project_description}</p>
        <div className="flex flex-wrap mt-4">
        <p className="me-2 border-solid border px-2 rounded-xl text-sm hover:bg-green-400/10">{details.project_category}</p>
        <p className="border-solid border px-2 rounded-xl text-sm  hover:bg-green-400/10">{details.project_location}</p>
        </div>
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