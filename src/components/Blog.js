import { api } from './api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorPage from './ErrorPage';

export default function Blog(){
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [blogPage, setBlogPage] = useState(null);

    useEffect(() => {
        async function fetchBlogData() {
            try {
                const response = await api('/blog-posts/');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        }

        fetchBlogData();
    }, []);

    useEffect(() => {
        // Find the blog page that matches the slug
        const foundBlogPage = posts.find(blog => blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '') === slug);

        // Convert date to ISO string if the blog page is found
        if (foundBlogPage) {
            const dateObject = new Date(foundBlogPage.date);
            setBlogPage({ ...foundBlogPage, date: dateObject.toDateString() });
        }
    }, [posts, slug]);

    return (
        blogPage?
        <div className="max-w-3xl mx-auto my-8 px-6 lg:px-8">
            <time dateTime={blogPage.date} className="text-gray-500 text-sm">{blogPage.date}</time>
            <h1 className="text-2xl md:text-3xl font-bold my-4">{blogPage.title}</h1>
            <div className='text-slate-900 text-lg'>{blogPage.author}</div>
                <div className='[&>p]:mb-6 [&>ol]:list-decimal [&>ol]:pl-4 [&>ol>li]:mb-4 [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:mb-4 mt-6' dangerouslySetInnerHTML={{ __html: blogPage.body }}></div>
        </div>
        :<ErrorPage />
    )
}

