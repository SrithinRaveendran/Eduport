import { useState } from 'react';

const REVIEWS = [
  {
    name: 'Jacqueline Miller',
    avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/09.jpg',
    rating: 5,
    date: '2 days ago',
    text: "Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed.",
    likes: 25,
    dislikes: 2,
  },
  {
    name: 'Louis Ferguson',
    avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/02.jpg',
    rating: 4,
    date: '1 day ago',
    text: 'Water timed folly right aware if oh truth. Imprudence attachment him for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything.',
  },
  {
    name: 'Dennis Barrett',
    avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/07.jpg',
    rating: 5,
    date: '2 days ago',
    text: 'Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.',
    likes: 25,
    dislikes: 2,
  },
];

const BARS = [
  { stars: 5, pct: 80 },
  { stars: 4, pct: 60 },
  { stars: 3, pct: 35 },
  { stars: 2, pct: 15 },
  { stars: 1, pct: 8 },
];

function Stars({ count }) {
  return (
    <div className="stars" style={{ fontSize: '0.85rem' }}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </div>
  );
}

export default function CourseReviews() {
  const [rating, setRating] = useState(0);

  return (
    <div className="section-block">
      <h2 className="section-title">Our Student Reviews</h2>

      <div className="reviews-summary">
        <div className="reviews-big-score">
          <div className="reviews-big-score__num">4.5</div>
          <div className="stars reviews-big-score__stars" style={{ fontSize: '1.2rem', color: '#fbbf24' }}>★★★★½</div>
          <div className="reviews-big-score__label">Based on today's review</div>
        </div>
        <div className="reviews-bars">
          {BARS.map(b => (
            <div className="review-bar" key={b.stars}>
              <span className="review-bar__label">{b.stars}</span>
              <div className="review-bar__track">
                <div className="review-bar__fill" style={{ width: `${b.pct}%` }} />
              </div>
              <span className="review-bar__count">{b.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {REVIEWS.map(r => (
        <div className="review-item" key={r.name}>
          <img src={r.avatar} alt={r.name} className="review-item__avatar" />
          <div style={{ flex: 1 }}>
            <div className="review-item__name">{r.name}</div>
            <div className="review-item__meta">
              <Stars count={r.rating} />
              <span className="review-item__date">{r.date}</span>
            </div>
            <p className="review-item__text">{r.text}</p>
            {r.likes && (
              <div className="review-item__actions">
                <span className="review-action">👍 {r.likes}</span>
                <span className="review-action">👎 {r.dislikes}</span>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="review-form">
        <div className="review-form__title">Leave a Review</div>
        <div className="star-select">
          {[1, 2, 3, 4, 5].map(n => (
            <span
              key={n}
              className={n <= rating ? 'active' : ''}
              onClick={() => setRating(n)}
            >★</span>
          ))}
        </div>
        <textarea className="form-textarea" placeholder="Write your review..." />
        <button className="btn btn-primary">Post Review</button>
      </div>
    </div>
  );
}
