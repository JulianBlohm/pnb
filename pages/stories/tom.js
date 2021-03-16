import styles from '../../styles/Story.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Tom() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-templates.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                        loading="eager"
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1_story4}>Tom</h1>
                <p>
                    From about the age of 15, I’ve known that I am gay.
                    I’ve mostly watched gay porn, dated secretly on Grindr after school, and{' '}
                    <span className={styles.highlight4}>
                        talked me into believing that being into girls would happen soon.
                    </span>{' '}
                    I came out with 21 when I had my first boyfriend.
                    For me, it was clear that I would rather come out with a partner than without one –
                    therefore probably the long period of silence.
                </p>
                <p>
                    Before my outing, I had no one (except Google) who accompanied me in my gender journey.
                    Since then, I no longer make a secret about my homosexuality from anyone. I talk gladly,
                    openly and much about it with heterosexual friends. Clothes-wise I like to wear figure-hugging
                    clothes - maybe sometimes too tight so that my butt stands out well, haha.
                    I am trying to build up a circle of homosexual friends with whom I can exchange views and
                    talk about similar problems. Amongst my hetero friends those problems often are considered as
                    dramatic while amongst homosexual people I experienced it as normal and not a big deal at all.
                </p>
                <p>
                    <span className={styles.highlight4}>
                        For me, when it comes to gender, we all are somewhere between masculine and feminine.
                    </span>{' '}
                    At the same time defining masculinity and femininity, I would think at first of the
                    common visual clichés: big, muscular, loud, self-convinced vs. beautiful, intelligent, interesting, cooperative.
                </p>
                <p>
                    In any case, as a white, privileged male, I represent a certain
                    role biologically as well as socially…if you believe in the conservative
                    image of a "typical man". However, I see myself in that role rather less.
                    I personally would see myself as more the "feminine" part in a partnership with another man.
                    <span className={styles.highlight4}>
                        I actually still doubt my "role" every day.
                    </span>{' '}
                    I’m trying to figure it out right now. On the other hand,
                    I am not a fan of pigeonholing, which is why I can’t imagine
                    myself committing to a role personally.
                </p>
                <p>
                    I wish for the future that LGBTQ culture becomes more visible.
                    For me, this "culture" had only become more visible when I was 21.
                    Before that, my "source" was mainly the Internet,
                    which is not necessarily the "safest" source to learn things about one's own sexuality.
                </p>
                <p>
                    P.S.: Without people who step out of line, the world would be gray, boring and would no longer evolve!
                </p>
            </main>

            <a href="/stories" className={styles.external_link_story4}>
                <Image src="/back-arrow.svg" alt="" width={18} height={20} />{' '}
                back
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
