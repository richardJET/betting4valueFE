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
                if (Array.isArray(response.data)) {
                    const foundBlog = response.data.find((blog) => {
                        return (
                            blog.title
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/[\s_-]+/g, '-')
                                .replace(/^-+|-+$/g, '') === slug
                        );
                    });
                    if (foundBlog) {
                        setBlogPageData(foundBlog);
                    }
                } else {
                    console.error('Invalid response data:', response.data);
                }
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        }

        fetchBlogPageData();
    }, [slug]);

    return (
        blogPageData?
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{blogPageData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blogPageData.body }}></div>
        </div>
        :null
    )
}

