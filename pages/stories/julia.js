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
                    I personally never really questioned my gender until I was
                    in my early twenties and moved out from home and went to
                    university. There I came in touch with feminist theories
                    like Judith Butler or Donna Haraway and reflected on my
                    place as a CIS-woman within the heteronormative society.
                    Now, five years later, I would consider myself a feminist,
                    which is questioning the given binary gender understanding,
                    as I can see many varieties within my environment.
                </p>
                <p>
                    Due to the fact that I was raised on the countryside of
                    Bavaria, I was raised with specific binary gender roles that
                    were biased on the biology. I personally let go of these
                    fixed roles and think of gender as something more fluid,
                    detached from somebody’s genitals. Besides, I am surrounded
                    by people like my partner and friends who all are sensitive
                    and openminded when it comes to gender roles within the
                    heteronormative society.
                </p>
                <p>
                    I express myself the most through my appearance in person,
                    like the sound of my voice, gestures, and clothes, but also
                    through my social media appearance of course. There I raise
                    my voice to fight against injustice, speak about my passions
                    and show my aesthetics.
                </p>
                <p>
                    Thinking about masculinity and femininity, I automatically
                    have stereotypes of strong men and sensitive women in mind,
                    even though I try not to - that’s just the way the society I
                    live in taught me. But it’s so much more! Everybody should
                    learn something from the “contrary gender”. There isn’t
                    something like “the” man and “the” woman. These roles are
                    made up from society. I think the society thinks as a
                    CIS-woman I have some sort of a “mother role” since I have a
                    uterus. I also often find myself in a position, where I have
                    to carry out the care work in a heterosexual partnership or
                    a male friend group, because I was raised differently. In
                    these situations, I try not to fall in some kind of motherly
                    behavior. I try to be self-critical and not to silently
                    fulfill my biological and social role but to analyze and
                    take notice of these boxes I get stuck into.
                </p>
                <p>
                    It would be great if we could overcome binary gender and
                    accept the fact, there is a spectrum of gender . I think it
                    is a thoughtful and nice way to describe your gender through
                    personality not biology. It’s ok not to fit in the given
                    gender roles but it’s also ok if you do. Try to be yourself
                    and not some made up stereotype. Free yourself from somebody
                    else’s expectations.
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
