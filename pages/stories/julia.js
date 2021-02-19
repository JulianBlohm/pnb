import styles from '../../styles/Story.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Julia() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-substory-orange.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                        loading="eager"
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1_story2}>Julia</h1>
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
            </main>

            <a href="/stories" className={styles.external_link_story2}>
                <Image src="/back-arrow.svg" alt="" width={18} height={20} />{' '}
                back
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
