import styles from '../styles/Stories.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Stories() {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-stories.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                        loading="eager"
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1}>stories</h1>
                <p className={styles.p}>
                    Every person is different and everyone has their own gender
                    identity. This also means that the world is much more
                    colourful than the traditional division in just pink for
                    girls and blue for boys. From neon green to ultra violet or
                    transparent, it's all there. We want to bring this to light
                    and have asked people to share their personal gender
                    journeys with us and the world.
                </p>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.story1}>
                            <Link href="/stories/ricardo">Ricardo</Link>
                        </li>
                        <li>
                            <Link href="/stories/julia">
                                <a className={styles.story2}>Julia</a>
                            </Link>
                        </li>
                        <li className={styles.story3}>
                            <Link href="/stories/marco">Marco</Link>
                        </li>
                        <li className={styles.story4}>
                            <Link href="/stories/tom">Tom</Link>
                        </li>
                        <li className={styles.story5}>
                            <Link href="/stories/loco">Loco Ninja</Link>
                        </li>
                        <li className={styles.story6}>
                            <Link href="/stories/moira">Moira</Link>
                        </li>
                    </ul>
                </nav>
            </main>

            <a
                className={styles.external_link}
                href="mailto:personalitynotbiology@gmx.de"
            >
                <span className={styles.span}>add your story</span>
                <Image
                    classname={styles.plus_icon}
                    src="/plus-stories.svg"
                    width={10.81}
                    height={10.63}
                    loading="eager"
                />
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
