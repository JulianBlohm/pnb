import styles from '../styles/Action.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Action() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-action.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                        loading="eager"
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1}>action</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
                <a
                    href="mailto:Personalitynotbiology@gmx.de"
                    target="_blank"
                >
                    add your photo
                </a>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
