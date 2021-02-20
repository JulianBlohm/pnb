import styles from '../../styles/Story.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Marco() {
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
                <h1 className={styles.h1_story3}>Marco</h1>
                <p>
                    <span className={styles.highlight3}>
                        &quot;Verily, with hardship there is ease&quot; is the
                        ayat (verse) from the qu&#39;ran that I often felt like
                        it described my situation.
                    </span>{' '}
                    I was born in 1990 and asigned female at birth. Basically I
                    knew my gender when I was three years old and it never
                    changed. But it took me 20 more years to finally learn about
                    the word transgender. I had to fight a long fight to be able
                    to just say that I am a man.
                </p>
                <p>
                    Gender is a category that coresponds with certain identity
                    aspects in our brains, souls, and personalities. The
                    categorization of gender into two or more categories
                    happened completely arbitrary and different societies came
                    up with different concepts. I don&#39;t believe that gender
                    is completely genetically but I do believe that my soul and
                    my brain do reflect my gender. My personality might be
                    fitting into gender categories but I would just say that my
                    gender identity is something epigenetic that I was mostly
                    born with and that was already an irreversible part of my
                    brain. I also believe that{' '}
                    <span className={styles.highlight3}>
                        certain aspects of gender also exist outside of society
                        but I think we would see them like the size of our hands
                        or the shapes of our ears as not important
                    </span>
                    , if society wouldn&#39;t construct gender in such a rigid
                    manner.
                </p>
                <p>
                    I have a lot of social roles. As a son, as a worker, as a
                    friend, as a writer, as a podcaster and of course: as a man.
                    I often feel like these expectations do not feel right. I
                    don&#39;t think that men are supposed to have no feelings,
                    to always do what they are expected to, to feed families, to
                    be dominant, a.s.o. I wish for a society where every person
                    could just be themself. I would never want to be part of the
                    toxic masculinity club full of antagonistic behaviors.
                </p>
                <p>
                    I express my personality by staying true to it even when it
                    would be better to act differently and fit in.{' '}
                    <span className={styles.highlight3}>
                        I mean, everyone wants to fit in, but when I decided to
                        present male and fight for my right to be happy, I
                        decided to be me.
                    </span>{' '}
                    People tried to construct me female, nowadays they often try
                    to push me into a non-binary category by kind of creating
                    transgender as a third gender. But I would say that since I
                    started taking testosterone 3 years ago, I don&#39;t get
                    misgendered so much anymore. I want to call people to use
                    their empathy and not let society be dominated by the
                    individual things we want right now. Use this empathy to
                    create awareness on privileges everyone has.
                </p>
            </main>

            <a href="/stories" className={styles.external_link_story3}>
                <Image src="/back-arrow.svg" alt="" width={18} height={20} />{' '}
                back
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
