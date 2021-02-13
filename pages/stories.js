import styles from '../styles/Stories.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Stories() {
    const stories = [
        { name: 'Ricardo', color: 'story_color_1', link: '/ricardo' },
        { name: 'Julia', color: 'story_color_2', link: '/julia' },
        { name: 'Ricardo', color: 'story_color_3', link: '/ricardo' },
        { name: 'Ricardo', color: 'story_color_4', link: '/ricardo' },
        { name: 'Ricardo', color: 'story_color_5', link: '/ricardo' },
        { name: 'Ricardo', color: 'story_color_6', link: '/ricardo' },
    ]

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
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1}>stories</h1>
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
                            <Link href="/ricardo">Ricardo</Link>
                        </li>
                        <li className={styles.story4}>
                            <Link href="/ricardo">Ricardo</Link>
                        </li>
                        <li className={styles.story5}>
                            <Link href="/ricardo">Ricardo</Link>
                        </li>
                        <li className={styles.story6}>
                            <Link href="/ricardo">Ricardo</Link>
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
                />
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
