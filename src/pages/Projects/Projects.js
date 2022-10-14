import { useEffect, useState } from "react"
import List from "../../components/List/List";
import {Link as RouterLink} from 'react-router-dom';


function Projects({userName}) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [profile, setProfile] = useState({});

    useEffect( () => {
        const fetchData = async () => {
            const data = await fetch(`https://api.github.com/users/${userName}/repos`)
            const result = await data.json();

            if (result) {
                setProjects(result)
                setLoading(false)
            }
        }

        const getImage = async () => {
            const profile = await fetch(`https://api.github.com/users/${userName}`)
            const result = await profile.json();

            if (result) {
                setProfile(result);
                setLoading(false)
            }
        }

        
        fetchData();
        getImage();

    }, [userName])

    
  return (
    <div className="Projects-container">
        <h2 className="text-center">Projects</h2>  
        { loading ? (
            <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (

            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img
                    className="img-fluid" src={profile.avatar_url} alt={profile.name}
                />
                    </div>
                    <div className="col-10">
                        <List items={projects.map( project => {

                            if (typeof project.homepage !== "string") {
                                return ""
                            }

                            return ({ 
                                    field: project.name,
                                    value: <RouterLink to={`/project/${project.name}`} > {`${window.location.origin}/project/${project.name}`} </RouterLink>
                                })
                        }  // 
                        )}/>
                    </div>
                </div>
            </div>


            // <div>
            //     <List items={projects.map( project => ( {
            //         field: project.name,
            //         value: <Link url={project.html_url} title={project.html_url} />
            //     }))}/>
            // </div>
        )}
    </div>
  )
}

export default Projects