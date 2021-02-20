import styles from '../../styles/Story.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Ricardo() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-substory.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                        loading="eager"
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1_story1}>Ricardo</h1>
                <p>
                    Ricardo Urbina is not the same person he was five years ago.
                    For most of my life, I lived a facade of somebody that was a
                    creation of a society that wanted me to be only a benefit to
                    others and not to myself. It has been a journey of
                    self-discovery, self-respect, self-love, self-admiration,
                    and realizing who are truly the people that have kept me
                    sane these years. I am a gay, dark skin Mexican who happens
                    to live in a white cisgender supremacist society where if I
                    want to have a voice, I’m immediately put in a box of being
                    rude, problematic, or arrogant. And most of the time, my
                    ethnicity takes place as well; if I’m not a rapist, I’m a
                    drug dealer. These things have shaped my journey as well,
                    and I decided not to let my voice be broken. I accepted the
                    fact that I love being feminine and masculine in a society
                    that only wants me to be quiet. My whole life, I knew I had
                    an attraction for boys but what I didn’t realize is that I
                    also identified as a gender-fluid person. A dress only
                    reflects how happy a person can be.
                </p>
                <p>
                    To me, personality is only a label; sometimes, people make
                    up excuses of somebody’s behavior just because that’s their
                    personality, which I believe to be wrong. I just want to
                    clarify that »my personality is who I am, and my behavior
                    depends on who you are«. That being said, biology is a
                    science that taught us that boys have to be on top of the
                    pyramid and girls must be submissive. One is born to live;
                    it depends on us if we live alive or if we live a lie.
                </p>
                <p>
                    My personality comes in different colors and forms. As a
                    fearless, outrageous, and big-hearted person, I love to be
                    affectionate and to show my love by always smiling and
                    making others feel welcomed and comfortable. I dress to
                    express, I put on what makes me the happiest, and I don’t
                    care if it bothers people; that’s a sign that I’m shining my
                    brightest. In the end, gender is only a label taught by
                    society because people were afraid to be overruled and
                    overpowered by the opposite sex; I must say that »ego« plays
                    a huge part in this labeling of the genders. For me,
                    masculinity means pure toxicity. Maybe it is because I lived
                    in an environment of toxic masculinity for most of my life,
                    and it created an image of toxicity. Every time I hear this
                    word, it makes me ache in the deepest of my stomach, and I
                    personally don’t like this word if it means what I was
                    taught by society. But the way I see it, masculinity means
                    to embrace one’s virtues with no fear of judgment. Whereas
                    femininity means to embrace what scares me the most.
                    Embracing my feminine side of my persona has made me become
                    true to myself and has given me an honest platform to
                    explore the world.
                </p>
            </main>

            <a href="/stories" className={styles.external_link_story1}>
                <Image src="/back-arrow.svg" alt="" width={18} height={20} />{' '}
                <span className={styles.span}>back</span>
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
