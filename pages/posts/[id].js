import Layout from '../../components/layout'; // page layout wrapper
import { getAllPostIds, getPostData } from '../../lib/posts-json'; // for post path ids and full post content
import Head from 'next/head'; // component for setting document head tags
import Date from '../../components/date'; // formats the date string
import utilStyles from '../../styles/utils.module.scss'; // CSS module with scoped utility class names

export async function getStaticProps({ params }) { // Build-time data hook
    const postData = await getPostData(params.id); // Load metadata and HTML content for this post id
    return { // return the post to the page component as props
        props: { // Props object Next.js passes into Post
            postData, // Single post object (id, title, date, contentHtml)
        }, // End props
    }; // End return value of getStaticProps
} // End getStaticProps

export async function getStaticPaths() { // Tell which dynamic [id] paths to pre-render
    const paths = getAllPostIds(); // Build entries from markdown filenames
    return { // return for static generation
        paths, // Array of paths
        fallback: false, // Any unknown id returns 404
    }; // End return of getStaticPaths
} // End getStaticPaths

export default function Post({ postData }) { // Dynamic post page
    return ( // Render the post UI
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h2 className={`${utilStyles.headingXl} ${utilStyles[postData.color]}`}>{postData.title}</h2>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

            </article>
        </Layout>
    ); // End return of Post
} // End Post component
