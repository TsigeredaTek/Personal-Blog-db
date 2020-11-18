import React from 'react';
import Navbar from './Navbar';



const Home: React.FC<IHomeProps> = () => {
    const [blogs, setBlogs] = React.useState<blogs>();

    React.useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            let res = await fetch("/api/blogs/")
            let chirps: blogs[] = await res.json();
            chirps.reverse();
            setBlogs(blogs);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container">
            {blogs.map((blogs: blogs) => (
                <div key={blogs.id} className="card shadow-lg m-2">
                    <div className="card-body">
                        <h5 className="card-title">@{blogs.name}</h5>
                        <p className="card-text">{blogs.content}</p>
                        <Link to={`/chirp/${blogs.id}/admin`}>
                            <button className="btn btn-sm btn-outline-dark float-right">Admin Options</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

interface IHomeProps { }

export default Home