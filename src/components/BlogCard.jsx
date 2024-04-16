import { Link } from "react-router-dom";

import placeHolderImage from "../assets/404.jpg";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  console.log(blog);
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <Link
      to={`/blogs/${id}`}
      className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 p-2 hover:no-underline focus:no-underline"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44  bg-gray-500"
        src={cover_image ? cover_image : placeHolderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
        <span className="text-xs text-gray-600 ">{new Date(published_at).toLocaleDateString()}</span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
