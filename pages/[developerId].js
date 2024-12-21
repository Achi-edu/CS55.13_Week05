import Head from "next/head";
import fs from "fs";
import styles from "@/styles/Home.module.scss";


export async function getStaticPaths() {
    const devFilePath = process.cwd() + "/data/developers.json";
    const devsJson = fs.readFileSync(devFilePath, "utf-8");
    const devsData = JSON.parse(devsJson);

    const paths = devsData.map((dev) => ({
        params: { developerId: dev.id },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const devFilePath = process.cwd() + "/data/developers.json";
    const gameFilePath = process.cwd() + "/data/games.json";

    const devsJson = fs.readFileSync(devFilePath, "utf-8");
    const devsData = JSON.parse(devsJson);

    const gamesJson = fs.readFileSync(gameFilePath, "utf-8");
    const gamesData = JSON.parse(gamesJson);

    const developer = devsData.find((d) => d.id === params.developerId);
    const knownGames = gamesData.filter((game) =>
        developer.knownFor.includes(game.title)
    );

    return {
        props: {
            developer,
            knownGames,
        },
    };
}

export default function DeveloperPage({ developer, knownGames }) {
    return (
        <>
            <Head>
                <title>{`${developer.name} -Gamer Devs`}</title>
                <meta name="description" content={`Games developed by ${developer.name}`} />
            </Head>
            <main className={`container mx-auto px-3 px-md-5 ${styles.page}`}>
                <h1>{developer.name}</h1>
                <p><strong>Dates Alive:</strong> {developer.datesAlive}</p>
                <p><strong>Companies:</strong> {developer.companies.join(", ")}</p>

                <h2>Known Games</h2>
                <ul>
                    {knownGames.map((game) => (
                        <li className={styles.gameCard} key={game.title}>
                            <h3>{game.title}</h3>
                            <p>
                                <strong>Year:</strong> {game.year}<br/>
                                <strong>Platforms:</strong> {game.platforms.join(", ")}<br/>
                                <strong>Media Type:</strong> {game.mediaType}
                            </p>
                        </li>
                    ))}
                </ul>
            </main>
</>
)
    ;
}
