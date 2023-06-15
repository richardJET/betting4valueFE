import { blogData } from './blogData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Blog(){
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchBlogData() {
            try {
                const response = await blogData();
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        }

        fetchBlogData();
    }, []);

    const blogPage = posts.find(blog =>
        blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '') === slug
    );

    return (
        blogPage?
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{blogPage.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blogPage.body }}></div>
        </div>
        :null
    )
}

