import styles from '../../styles/Story.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Moira() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-home.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                        loading="eager"
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1_story6}>Moira</h1>
                <p>
                    Frankly, my &quot;gender journey&quot; only began
                    consciously during my German studies in Mannheim when I was
                    about 20. It was the first lessons in which we read, among
                    other things, writings by Judith Butler. Suddenly, with the
                    &quot;Butler glasses&quot;, I saw how everyone is loosely a
                    drag show and how terribly choiceless our understanding of
                    our gender identity is. My unconscious journey began much
                    earlier, of course, and in retrospect can be more accurately
                    described to me as a &quot;gender struggle&quot;.{' '}
                    <span className={styles.highlight6}>
                        I have been fighting gender norms since I was a child,
                        especially when it came to experiencing a disadvantage
                        or negative evaluation from others for being a
                        &quot;girl&quot;.
                    </span>{' '}
                    I was usually more athletic, louder, stronger and more
                    opinionated than most of those I categorised as girls. I
                    didn&#39;t like that we were separated from the boys in PE
                    class because I was always very ambitious and didn&#39;t
                    want to be set lower standards for myself compared to the
                    boys. I didn&#39;t want to be seen as weak and certainly not
                    weaker than any boy. Because then, and now, I mostly saw cis
                    men as pretty dumb. I wanted to be strong, but I also wanted
                    to be a girl.
                </p>
                <p>
                    I am the daughter of two ballet teachers and have been
                    strongly influenced from an early age with the pink, perfect
                    ballet world of skinny, petite, silent ballerina dolls in my
                    life.{' '}
                    <span className={styles.highlight6}>
                        Everything there was so feminine - certain steps were
                        male-only, or even arm positions were categorised into
                        female and male.
                    </span>{' '}
                    I was allowed to attend all classes for my age and loved the
                    &quot;boys&#39; class&#39;&#39; the most because I was
                    allowed to learn the steps intended for men as well. At
                    home, my sister and I would put on hour-long performances of
                    Prokoviev&#39;s Romeo and Juliet, my sister deciding each
                    time that I had to be the prince and I liked it, or maybe I
                    just surrendered to my big sister&#39;s highness - who knows
                    for sure. I was often led to believe by others that I was
                    behaving improperly - I was not reserved, quiet, attentive,
                    rather rough when playing or determined and also often bossy
                    when interacting with others - but I also had the best
                    ideas. At the time I thought I was wrong that way. I never
                    fit well into groups and usually had very few close friends
                    to whom I clung.
                </p>
                <p>
                    But most of the other girls didn&#39;t like my personality
                    very much. Later, when I was older, I found myself in male
                    friend groups all the time and suddenly began to notice that
                    I was no longer &quot;the loud one&quot;, because the others
                    were too. I felt comfortable, because actually my previous
                    role was also quite exhausting, but I couldn&#39;t be
                    completely myself here either, because I suffered partly
                    from not being perceived as a woman. Still, it was a better
                    feeling of belonging than before. I thought at the time I
                    could only be friends with boys until I started studying,
                    got deeply involved with feminism, politics and myself and
                    the people around me and built up &quot;mixed&quot; circles
                    of friends. I wasn&#39;t the most opinionated - we all had
                    opinions. The boys weren&#39;t always &quot;strong&quot;,
                    the girls weren&#39;t &quot;weak&quot; and no one had to
                    prove themselves to anyone else. We were equal to each other
                    and as soon as we weren&#39;t, there was a heated
                    discussion. Since my studies, I have consciously and almost
                    daily dealt with the question of gender identities and I
                    keep discovering new things or facing the same problems of
                    my childhood again.{' '}
                    <span className={styles.highlight6}>
                        Nowadays I see that I partly wanted to claim the
                        qualities that are socially connoted as masculine for
                        myself and partly overcompensated for this with
                        &quot;masculine&quot; behaviour and at the same time
                        desperately wanted to be perceived as a really feminine
                        girl.
                    </span>{' '}
                    Society makes it very difficult to just be who you want to
                    be, authentic and real and sometimes you are lucky enough to
                    find an environment that coexists regardless of the norms.
                </p>
            </main>

            <a href="/stories" className={styles.external_link_story6}>
                <Image src="/back-arrow.svg" alt="" width={18} height={20} />{' '}
                back
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
