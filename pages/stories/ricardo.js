import styles from '../../styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1>Ricardo</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec.
                </p>
                <Link href="/stories">back</Link>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
