import styles from '../../styles/Story.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Anick() {
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
                <h1 className={styles.h1_story4}>Anick</h1>
                <p>
                    Ever since I was a child, I knew that my body was different
                    - I spent much of my childhood in hospitals and doctors
                    rooms naked. When it came to school, my body did not match
                    what was being taught in sex education or science. Being
                    born with a variation of sex development, my body did not
                    match what the typical boys body was.{' '}
                    <span className={styles.highlight4}>
                        I did whatever I could to change the physical side of
                        who I was - just so that I was accepted.
                    </span>{' '}
                    The way you look and dress is seen as a display of your
                    gender identity. Growing up with a body which I felt did not
                    'fit' me, meant I would always wear baggy clothes and try to
                    make what I was wearing seem 'interesting' but in a way to
                    divert the attention from my body.
                </p>
                <p>
                    Whilst I used to spend a lot more time focusing on parts of
                    my 'look' and how to 'present' my male gender, I no longer
                    feel that same pressure. I describe myself as a man with
                    intersex traits: I equally do and don't look like what a man
                    should look like.
                </p>
                <p>
                    I express my gender identity in many ways: Kindness,
                    empathy, humour and showing emotion are key elements of my
                    personality. Whilst to me, these are ungendered and
                    primarily just human, some people may categorise them as
                    'feminine'. With all societies, there are assumptions on how
                    particular genders are expected to behave, personality
                    traits are heavily gendered in the same way that biological
                    traits are. There have been times where I have joined online
                    chats where I do not need to upload a photo and even based
                    on what I share/the way I type, there has been an assumption
                    that I am a girl at random points.
                </p>
                <p>
                    <span className={styles.highlight4}>
                        I believe that the concepts (of masculinity and
                        femininity) are relative and it's up to each individual
                        to define what it means for them.
                    </span>{' '}
                    To me, the way I look and dress is masculine and the way I
                    act is fairly neutral - but other people will always have
                    their own ideas about who I am based on their own
                    definitions.
                </p>
                <p>
                    I have never truly found peace with my biological or social
                    role - it's what I am striving towards. After I found out
                    that I couldn't have children, I was devasted and it was
                    what contributed to me letting people know that I was born
                    intersex.
                </p>
                <p>
                    What has always accompanied and supported my gender journey
                    is the outliers - the people throughout time and societies
                    who challenge the norms of their time.{' '}
                    <span className={styles.highlight4}>
                        Seeing difference on display so openly is a wonderful
                        thing and can make you feel less alone. We need to stop
                        policing each other's bodies.
                    </span>{' '}
                </p>
                <p>
                    There are uncountable ways to be exactly who you are and the
                    only constant in life is change. If the way someone else
                    expresses their gender bothers you that much - something
                    within needs to be addressed.
                </p>
                <p>
                    As in an intersex person, gender has been a concept which
                    meant I went through surgical and hormonal treatment to look
                    the way I do. In order to 'fit in' or 'blend in' with the
                    crowd, I was literally forced to irreversibly change parts
                    of myself.{' '}
                    <span className={styles.highlight4}>
                        Please let people exist how they would like to.
                    </span>{' '}
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
