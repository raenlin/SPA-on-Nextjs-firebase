import Reason from '@/components/Reason/Reason';
import { css } from '../../styled-system/css';
import { Button } from '@mui/material';

const hero_section = css({
  marginTop: '20px',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
});

const reasons_section = css({
  textAlign: 'center',
  margin: '30px 0',
  padding: '20px',
  backgroundColor: '#ACCBC3',
});

const reasons_wrapper = css({
  padding: '30px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '40px',
  textAlign: 'justify',
});

export default function Home() {
  return (
    <>
      <section className={hero_section}>
        <div className={css({ maxWidth: '40%' })}>
          <h1
            className={css({
              fontSize: '2rem',
              fontWeight: '600',
            })}
          >
            New explosive video for the song &quot;Never Gonna Give You Up&quot;
            is already on YouTube!
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
      <section className={reasons_section}>
        <h2
          className={css({
            paddingBottom: '20px',
            fontSize: '2rem',
            fontWeight: '500',
          })}
        >
          Reasons to watch this video
        </h2>
        <div className={reasons_wrapper}>
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
        <Button variant="contained" href="/feedback">
          Contact us
        </Button>
      </section>
      <section className={css({ marginTop: '40px', padding: '20px' })}>
        <div className={css({ padding: '40px 0', textAlign: 'center' })}>
          <h3
            className={css({
              fontWeight: '500',
              fontSize: '1.4rem',
              marginBottom: '30px',
            })}
          >
            Feel free to write us your impressions and wishes
          </h3>
          <Button variant="contained" href="/feedback">
            Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
