/* ./pages/article/[slug].js */
import { fetchAPI } from "../../lib/api";
import Script from 'next/script'


const Partner = ({ article }) => {
  return (
    <div className="mt-0 mx-auto max-w-7xl">
      <div className="relative bg-gray-800">
        <div className="h-100  sm:h-100 md:absolute md:left-0 md:h-full md:w-1/2">
          {article.data[0].attributes.logo.data.attributes.formats.medium
            .url && (
            <img
              src={
                article.data[0].attributes.logo.data.attributes.formats.medium
                  .url
              }
              className="h-full w-full object-cover py-8"
              alt=""
            />
          )}
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-48 sm:px-6 lg:px-8 lg:py-50">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            {article.data[0].attributes.title && (
              <h1 className="text-white text-center text-4xl font-bold text-gray-500">
                {article.data[0].attributes.title}
              </h1>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
       
      <Script src={article.data[0].attributes.scriptlink} strategy="beforeInteractive"/>


      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-3xl text-center">{article.data[0].attributes.title}'s products</h2>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {article.data[0].attributes.partnersproducts.data.map((product, i) => (
              <li key={i} className="background-card">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                    <img className="rounded-l-lg object-cover shadow-lg" src={product.attributes.img} alt="" />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1  leading-6 py-8 px-2">
                        <h2>{product.attributes.name}</h2>
                        <p className="text-indigo-600">{product.attributes.description}</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

        
      </div>
    </div>
  );
};
export default Partner;

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
  const article = await fetchAPI(
    `/partners/?filters\[slug\][$eq]=${params.slug}&populate=*`
  );
  return {
    props: { article },
    revalidate: 1,
  };
}
