import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home({token}) {

    const {data:blogs, isLoading, error } = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {token ? <h2>Blogs preview</h2> : <h2>Login to check available posts</h2>}
            {error ? <div>{error}</div> : "" }
            {isLoading ? <div>Loading...</div> : ""}
            { blogs && token ? <BlogList blogs={blogs} /> : ""}
        </div>
    )
}
