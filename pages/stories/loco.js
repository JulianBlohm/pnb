import styles from '../../styles/Story.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Loco() {
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
                <h1 className={styles.h1_story2}>Loco Ninja</h1>
                <p>
                    Hi! I’m Loco Ninja and I identify as nonbinary. For years
                    I’ve often struggled with who I was, not because of how I
                    identified but how people identified me. I’ve come to
                    realize that I don’t walk in anyone’s journey, and they
                    don’t walk in mine, so the ultimate decision of being happy
                    with who you are truly is in the hands of you, not theirs. I
                    don’t live my life to please others unless I aim to spread
                    love and happiness upon the people who matter. Gender
                    shouldn’t be how we move in life, nor should it be how we
                    treat one another. We are human beings first and gender
                    last. Love is our communication language, and that should be
                    the only language we carry without picking it apart and
                    searching for something to dissect. Respect who I am, and I
                    will respect who you are.
                </p>
                <p>
                    My personal gender journey has always been a question to
                    others, but I always knew that I identified as nonbinary. I
                    don&#39;t get too tied up in pronouns, but I felt I had the
                    energy and soul of both man and woman. I grew up able to
                    express myself in the home, but outside of those doors I had
                    to be very careful because of where I grew up and what was
                    surrounding me. But I now identify as nonbinary and I sit
                    proudly in that. My family, especially my mother, has always
                    been supportive in anything that I have felt. I always told
                    her when I felt I had identified as something, and she’s
                    always asked questions and supported me. My whole family is
                    super supportive of who I am.
                </p>
                <p>
                    My personality reflects both man and woman energy. I love
                    masculine energy. Masculinity says a few things to me. It
                    says strong, confident, taking the lead, and protecting what
                    needs to be protected. Femininity means soft but strong,
                    powerful, confident, graceful and in some ways, it’s loud,
                    controversial in the best ways. I believe every human being
                    should be able to identify as they please without anyone
                    feeling the need to pick them apart because of the genitalia
                    between their legs and the hair that grows on specific areas
                    of the body. Gender is what we’re assigned at birth, but
                    we’re bigger than that. Gender should be the feeling on the
                    inside, not just what body part we happen to be born with.
                    We are not our body parts.
                </p>
                <p>
                    I express myself through my art. I express who I am by the
                    way I talk, move, and live my life. I communicate my
                    personality in color. You can tell what kind of mood I&#39;m
                    in or who I am, often by the clothing I&#39;m in or my body
                    language, which reflect my loud, colorful and happy
                    personality.
                </p>
                <p>
                    I feel I was told to be one way in society; I had to be
                    masculine and roughed up in order for me to get by and live
                    life. The social role was and will always be given to us by
                    family or the people around us. Of course, I doubted it and
                    decided to do things my way. Even in a rough neighborhood, I
                    decided to strut how I wanted and live in who I was and how
                    I felt. A color, a body part, an object, and more do not
                    label us what you have already pre-sorted us out to be in
                    your head. We are human first.
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
