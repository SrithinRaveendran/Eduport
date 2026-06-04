import { useState } from 'react';

const FAQS = [
  {
    q: 'How Digital Marketing Work?',
    a: 'Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to.',
  },
  {
    q: 'What is SEO?',
    a: 'Pleasure and so read the was hope entire first decided the so must have as on was want up of I will rival in came this touched got a physics to travelling so all especially refinement monstrous desk they was arrange the overall helplessly out of particularly ill are purer.',
  },
  {
    q: 'Who should join this course?',
    a: 'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward.',
  },
  {
    q: 'What are the T&C for this program?',
    a: 'Night signs creeping yielding green Seasons together man green fruitful make fish behold earth unto you\'ll lights living moving sea open for fish day multiply tree good female god had fruitful of creature fill shall don\'t day fourth lesser he.',
  },
  {
    q: 'What certificates will I be received for this program?',
    a: 'Smile spoke total few great had never their too Amongst moments do in arrived at my replied Fat weddings servants but man believed prospect Companions understood is as especially pianoforte connection introduced.',
  },
];

export default function CourseFAQs() {
  const [open, setOpen] = useState(null);

  return (
    <div className="section-block">
      <h2 className="section-title">Frequently Asked Questions</h2>
      {FAQS.map((faq, i) => (
        <div className="faq-item" key={i}>
          <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span className="faq-question__num">0{i + 1}</span>
            <span className="faq-question__text">{faq.q}</span>
            <span className={`faq-question__icon${open === i ? ' open' : ''}`}>▼</span>
          </div>
          {open === i && <div className="faq-answer">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}
