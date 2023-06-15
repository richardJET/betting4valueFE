import { blogData } from './blogData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Blog(){
    const { slug } = useParams();
    const [blogPageData, setBlogPageData] = useState({});
    
    useEffect(() => {
        async function fetchBlogPageData() {
            try {
                const response = await blogData();
                response.data.forEach((blog) => {
                    if (blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '') === slug){
                        setBlogPageData(blog);
                    }
                });
            } catch (error) {
                console.error('Error fetching plays:', error);
            }
        }

        fetchBlogPageData();
    }, [slug]);

    return (
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{blogPageData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blogPageData.body }}></div>
        </div>
    )
}

