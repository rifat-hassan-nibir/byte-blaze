import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, body_html, tags } = blog;
  return (
    <div className="mx-auto group border-2 border-opacity-30 p-2 hover:no-underline focus:no-underline">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44  bg-gray-500"
        src={cover_image ? cover_image : placeHolderImage}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map((tag, index) => (
          <a key={index} className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
            #{tag}
          </a>
        ))}
      </div>
      <div className="space-y-2 py-5">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
