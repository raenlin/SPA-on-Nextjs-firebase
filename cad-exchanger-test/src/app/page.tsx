import Reason from '@/components/Reason/Reason';
import { css } from '../../styled-system/css';

const stylesHeadingH1 = css({
  fontSize: '2rem',
  fontWeight: '600',
});

const stylesHeadingH2 = css({
  paddingBottom: '20px',
  fontSize: '2rem',
  fontWeight: '500',
});

const stylesHero = css({
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
});

const stylesReasons = css({
  paddingTop: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
});

export default function Home() {
  return (
    <>
      <section className={stylesHero}>
        <div className={css({ maxWidth: '40%' })}>
          <h1 className={stylesHeadingH1}>
            New explosive video for the song &quot;Never Gonna Give You Up&quot;
            is already on YouTube
          </h1>
          <p className={css({ paddingTop: '20px' })}>
            At its core, the song is a promise of unwavering loyalty and
            commitment, celebrating the enduring nature of love. The captivating
            tune, paired with Astley&apos;s rich baritone voice, creates an
            infectious energy that encourages listeners to dance and sing along.
            The chorus—&quot;Never gonna give you up, never gonna let you
            down&quot;—is a powerful declaration of devotion, resonating with
            anyone who has ever experienced deep affection.
          </p>
        </div>
        <div>VIDEO WILL BE HERE</div>
      </section>
      <section
        className={css({
          textAlign: 'center',
          paddingTop: '50px',
        })}
      >
        <h2 className={stylesHeadingH2}>Reasons to watch this video</h2>
        <div className={stylesReasons}>
          <Reason
            title="Iconic Tune"
            content="The song features one of the most recognizable melodies in pop music history. Its catchy chorus and upbeat vibe make it an instant mood booster"
          />
          <Reason
            title="Nostalgic Value"
            content="For those who grew up in the late `80s and early `90s, this video is a nostalgic trip down memory lane, evoking fond memories of the era`s music and culture"
          />
          <Reason
            title="Rickrolling Fun"
            content='The video is famously associated with the internet meme known as "Rickrolling." Watching it is a great way to participate in this lighthearted prank and share laughs with friends'
          />
          <Reason
            title="Memorable Dance Moves"
            content="Rick Astley`s energetic choreography in the video is both charming and entertaining. It’s a showcase of the unique dance style of the era that many will find amusing"
          />
          <Reason
            title="Timeless Message"
            content="The song`s lyrics carry a powerful message of loyalty and commitment, making it relatable and heartwarming for anyone who values relationships"
          />
          <Reason
            title="Cultural Impact"
            content="his song has had a lasting impact on pop culture and has been referenced in countless movies, TV shows, and advertisements. Watching the video allows you to appreciate its influence and place in music history"
          />
        </div>
      </section>
    </>
  );
}
