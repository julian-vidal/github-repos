import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Link from "../../components/Link/Link";
import List from "../../components/List/List";

function ProjectDetail({userName}) {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState({});
    const {name} = useParams();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const items = [
        {
            field: "Name",
            value: project.name
        },
        {
            field: "Description",
            value: project.description
        }, {
            field: "Link",
            value: <Link url={project.html_url} title={project.html_url}/>
        }, {
            field: "Created at",
            value: project.created_at
        }, {
            field: "Updated at",
            value: project.updated_at
        }
    ]

    useEffect( () => {

        const fetchData = async () => {
            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`)

            const result = await data.json();

            if (result) {
                setProject(result);
                setLoading(false);
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

    </div>
  )
}

export default ProjectDetail