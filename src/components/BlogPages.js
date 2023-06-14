import { useEffect, useState } from 'react';
import { blogData } from './blogData';


export default function BlogPages() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function fetchBlogData() {
            try {
                const response = await blogData();
                console.log(response.data)
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching plays:', error);
            }
        }
    
        fetchBlogData();
    }, []);
    
    console.log(posts)

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post , index) => (
                        <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.date} className="text-gray-500">
                                    {post.date}
                                </time>
                                <ul className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    {post.categories.map(category => (
                                            <li>{category}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.intro}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
