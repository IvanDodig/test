import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { categoryServices } from "../services";

export async function getStaticProps() {
   // const allPostsData = getSortedPostsData();
   const data = await categoryServices.getAllCategories();

   return {
      props: {
         allPostsData: data.data,
      },
   };
}

export default function Home({ allPostsData }) {
   return (
      <>
         <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
         >
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
               {allPostsData.data.map(({ id, categoryName }) => (
                  <li className={utilStyles.listItem} key={id}>
                     <Link href={`/posts/${id}`}>
                        <a>{categoryName}</a>
                     </Link>
                  </li>
               ))}
            </ul>
         </section>
      </>
   );
}
