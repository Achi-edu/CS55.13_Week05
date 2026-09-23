import Head from 'next/head'; // Next.js component for setting document head tags (title, meta)
import Layout, { siteTitle } from '../components/layout'; // Shared page layout and site title constant
import utilStyles from '../styles/utils.module.scss'; // CSS module with scoped utility class names
import Link from 'next/link'; // Next.js component for client-side navigation between routes
import Date from '../components/date'; // Component that formats an ISO date string for display

import { getSortedPostsData } from '../lib/posts'; // Helper that reads markdown posts and returns sorted metadata

export async function getStaticProps() { // data hook that runs at build time
    const allPostsData = getSortedPostsData(); // Load all post ids, titles, and dates from /posts
    return { // return data to the page component as props
        props: { // Props object
            allPostsData, // Sorted post metadata array
        }, // End props
    }; // End return value of getStaticProps
} // End getStaticProps

export default function Home({ allPostsData }) { // Home page component
    return ( // Render the page UI
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi. I'm Achilles and this is a picture of me running around the UK in a ska band! I'm a software engineer, musician, husband, and father.</p>
                <p>
                    I've recently been helping out on the side with an organization called Mautic. Mautic provides a polished, open source, alternative to mailchimp.
                    (<a href="https://mautic.org">mautic.org</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => ( // Map each post's id, date, and title into a list item
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    )) /* End map over allPostsData */}
                </ul>
            </section>

        </Layout>
    ); // End return of Home
} // End Home component
