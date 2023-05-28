import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p style={{
                    visibility: "hidden",
                }}></p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                {/*<Image*/}
                {/*    className={styles.logo}*/}
                {/*    src="/next.svg"*/}
                {/*    alt="Next.js Logo"*/}
                {/*    width={180}*/}
                {/*    height={37}*/}
                {/*    priority*/}
                {/*/>*/}
                <h1 style={{
                    fontSize: "3em",
                }}>horean0574.top</h1>
            </div>

            <div className={styles.grid}>
                <a
                    href="https://blog.horean0574.top"
                    className={styles.card}
                    target="_self"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Blog <span>-&gt;</span>
                    </h2>
                    <p>Horean&apos;s Blog</p>
                </a>

                <a
                    href="https://rc.horean0574.top"
                    className={styles.card}
                    target="_self"
                    rel="noopener noreferrer"
                >
                    <h2>
                        RC <span>-&gt;</span>
                    </h2>
                    <p>The RC project.</p>
                </a>

                <a
                    href="https://teach-hpsys.horean0574.top"
                    className={styles.card}
                    target="_self"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Teach-hpsys <span>-&gt;</span>
                    </h2>
                    <p>The Teacher Happy System (teach-hpsys) project.</p>
                </a>

                <a
                    href="https://horean0574.top"
                    className={styles.card}
                    target="_self"
                    rel="noopener noreferrer"
                >
                    <h2>
                        More <span>-&gt;</span>
                    </h2>
                    <p>Stay tuned...</p>
                </a>
            </div>
        </main>
    )
}
