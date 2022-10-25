    /* ./pages/article/[slug].js */
    import Markdown from "markdown-to-jsx";
    import { fetchAPI } from "../../lib/api";
    import Layout from "../../components/layout";
    const Article = ({ article }) => {
     return (
       <>
         
           <div className="mt-10">
             <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto">
               <div className="absolute left-0 bottom-0 w-full h-full" />
              <div>
                 {article.data[0].attributes.logo.data.attributes.formats.medium.url && (
                  <img src={article.data[0].attributes.logo.data.attributes.formats.medium.url} />
                )}
               </div>
               <div>
                 {article.data[0].attributes.title && (
                   <a
                     href="#"
                     className="px-4 py-1 bg-black text-blue-200 inline-flex text-md items-center justify-center mb-2"
                   >
                     {article.data[0].attributes.title}
                   </a>
                 )}
               </div>
               {/* <h2 className="text-4xl pt-2 font-semibold text-gray-500 leading-tigh`t">
                 {article.data.attributes.description}
               </h2> */}
              {/* <div className="mt-3">
                 {article.data.attributes.author && (
                   <p className="text-blue-900 font-semibold pb-2">
                    Written by - {article.data.attributes.author.data.attributes.name}
                   </p>
                )}
               </div> */}
             </div>
             {/* <article className="prose lg:prose-xl px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
               <Markdown>{article.data.attributes.content}</Markdown>
             </article> */}
           </div>
         
       </>
     );
    };
    export default Article;

    export async function getStaticPaths() {
     const articles = await fetchAPI("/partners?populate=*");
     return {
       paths: articles.data.map((article) => ({
         params: {
          slug: article.attributes.slug,
        },
       })),
       fallback: false,
     };
    }
    export async function getStaticProps({ params }) {
     const article = await fetchAPI(`/partners/?filters\[slug\][$eq]=${params.slug}&populate=*`);
     return {
       props: { article },
       revalidate: 1,
     };
    }