import styles from '../styles/About.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-about.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                        loading="eager"
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1}>about</h1>
                <p>
                    Gender roles this, gender labels that. We want to free
                    ourselves from acquired gender and make room for our own
                    gender identity putting the person behind the gender at its
                    core.
                </p>
                <p>
                    This one goes out to all the men who want to wear make-up,
                    or maybe not. To all people who "throw like a girl". To all
                    those annoyed by being asked whether they are male or
                    female. To all who have been laughed at for being different.
                    This goes out to all those who refuse to be told by society
                    how they should behave based on their given gender. To all
                    who are ready to bust out of their boxes, reshape them or
                    melt them down. Or to all who are doing so already. This
                    goes out to all who break down gender roles and think beyond
                    pink and blue. Or want to do so. Make room for our own
                    definitions of identities that are not based on gender. This
                    one goes out to all who want to define gender through
                    personality not biology.
                </p>
                <p>
                    Gender through personality not biology shares the stories of
                    people who often feel let down by social norms and standards
                    related to their given gender and are creating their own
                    identity. With our Gender Journeys, we hope to inspire and
                    encourage people to question their own social role and shine
                    through their personality, without pink or blue labels.
                </p>
                <p>
                    Behind Gender through Personality not Biology are four
                    design students from Hamburg who are currently on their own
                    gender journey as well. While they are in the middle of
                    reshaping their own boxes, they have come together to create
                    this project to give people a platform that encourages,
                    inspires and creates awareness to stand up for gender
                    freedom.
                </p>
            </main>

            <a
                href="https://www.instagram.com/genderthroughpersonality/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.external_link}
            >
                Find us on Instagram!
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
