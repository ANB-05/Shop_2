import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import { getBlogs } from "../../services/api";
import BlogItems from "../../components/blogsItem/BlogItems";
import { Link } from "react-router-dom";
import type { Iblogs } from "../../types/services";

function Blogs() {
    const [blogs, setblogs] = useState<Iblogs[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const blogsPerPage = 10;

    useEffect(() => {
        getBlogs().then(result => {
            setblogs(result);
        });
    }, []);

    // Calculate the total number of pages
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    // Calculate the indexes of the current page
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

    // Get the blogs for the current page
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
        <Container>
            <div>
                <div className="text-center py-3 my-1 rounded bg-amber-100">
                    <h1>جدیدترین مطالب</h1>
                </div>

                {/* Display blogs */}
                <div className="grid grid-cols-3 gap-5 my-10">
                    {currentBlogs.map(p => (
                        <Link to={`/blog/${p.id}`} key={p.id}>
                            <BlogItems {...p} />
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 my-10">
                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNumber = index + 1;

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                className={`px-4 py-2 rounded-lg border transition ${
                                    currentPage === pageNumber
                                        ? "bg-green-500 text-white border-green-500"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
                                }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
}

export default Blogs;