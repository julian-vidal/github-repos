import { useEffect, useState } from "react"
import Link from "../../components/Link/Link";
import List from "../../components/List/List";
import "./Profile.css";


function Profile({userName}) {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});

    const items = [
        {
            field: "Profile",
            value: <Link url={profile.html_url} title={profile.html_url} />
        }, {
            field: "Repos",
            value: < Link url={profile.repos_url} title={profile.repos_url} />
        }, {
            field: "Company",
            value: profile.company
        }, {
            field: "Location",
            value: profile.location
        }, {
            field: "Bio",
            value: profile.bio
        }
    ];

    useEffect (()=> {
        const fetchData = async () => {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const result = await profile.json();

            if (result) {
                setProfile(result)
                setLoading(false)
            }
        } 

        fetchData();
    }, [userName])



    return (
        <div className="Profile-container">
            <h2 className="text-center">About me</h2>
            {
                loading ? (
                    <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <img
                            className="img-fluid"
                            src={profile.avatar_url}
                            alt={profile.name}
                        />
                            </div>
                            <div className="col-10">
                                <List items={items}/>
                            </div>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default Profile