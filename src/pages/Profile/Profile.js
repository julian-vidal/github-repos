import { useEffect, useState } from "react"
import Link from "../../components/Link/Link";
import "./Profile.css";


function Profile({userName}) {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});

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
            <h2>About me</h2>
            {
                loading ? (
                <span>Loading...</span>
                ) : (
                    <>
                    <img
                        className="Profile-avatar"
                        src={profile.avatar_url}
                        alt={profile.name}
                    />
                    <ul>
                        <li>
                            <b>GitHub Profile:</b> <Link url={profile.html_url} title={profile.html_url} />
                        </li>
                        <li>
                            <b>Repos:</b> <Link url={profile.repos_url} title={profile.repos_url} />
                        </li>
                        <li>
                            <b>Company:</b> {profile.company}
                        </li>
                        <li>
                            <b>Location:</b> {profile.location}
                        </li>
                        <li>
                            <b>Email:</b> {profile.email}</li>
                        <li>
                            <b>Bio:</b> {profile.bio}</li>
                    </ul>
                    </>
                ) 
            }
        </div>
    )
}

export default Profile