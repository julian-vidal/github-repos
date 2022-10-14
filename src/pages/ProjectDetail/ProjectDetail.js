import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Link from "../../components/Link/Link";
import List from "../../components/List/List";
import {Link as RouterLink} from "react-router-dom"

function ProjectDetail({userName}) {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState({});
    const {name} = useParams();
    
    const items = [
        {
            field: "Name",
            value: project.name
        },
        {
            field: "Description",
            value: project.description
        }, {
            field: "Repo Link",
            value: <Link url={project.html_url} title={project.html_url}/>
        }, {
            field: "Created at",
            value: project.created_at
        }, {
            field: "Updated at",
            value: project.updated_at
        }, {
            field: "Live version",
            value: <Link url={project.homepage} title={project.homepage}> </Link>
        }, {
            field: "Topics",
            value: String(project.topics)
        }
    ]

    useEffect( () => {

        const fetchData = async () => {
            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`)

            const result = await data.json();

            if (result) {
                setProject(result);
                setLoading(false);
                console.log(result)
            }
        }

        if (userName && name) {
            fetchData();
        }

    }, [userName, name])

  return (
    <div className="container p-5">
        <div className="row">
            <div className="col">
                <h1 className="text-center">Project Details</h1>
            </div>
        </div>
        { loading ? (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        ) : (
        <div className="row">
            <div className="col-2">
                <img
            className="img-fluid" src={project.owner.avatar_url} alt={project.owner.login}
        />
            </div>
            <div className="col-10">
                    <List items={items} />
            </div>
        </div>
    
    ) }

    <RouterLink to={'/projects'} > Back to all projects </RouterLink>

    </div>
  )
}

export default ProjectDetail