const COMMENTS = [
  {
    avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/05.jpg',
    name: 'Frances Guerrero',
    text: 'Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection?',
    time: '5hr',
    likes: 3,
    replies: [
      {
        avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/06.jpg',
        name: 'Lori Stevens',
        text: 'See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.',
        time: '2hr',
        likes: 5,
      },
    ],
  },
  {
    avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/02.jpg',
    name: 'Louis Ferguson',
    text: 'Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection?',
    time: '5hr',
    likes: 0,
  },
];

export default function CourseComments() {
  return (
    <div className="section-block">
      <h2 className="section-title">Ask Your Question</h2>

      <div className="comment-form">
        <img
          src="https://stackbros.in/eduport/landing/assets/images/avatar/09.jpg"
          alt="you"
          className="comment-item__avatar"
        />
        <input
          className="comment-form__input"
          type="text"
          placeholder="Ask your question..."
        />
        <button className="btn btn-primary">Post</button>
      </div>

      {COMMENTS.map((c, i) => (
        <div key={i}>
          <div className="comment-item">
            <img src={c.avatar} alt={c.name} className="comment-item__avatar" />
            <div className="comment-item__bubble">
              <div className="comment-item__name">{c.name}</div>
              <p className="comment-item__text">{c.text}</p>
              <div className="comment-item__meta">
                <span className="comment-item__time">{c.time}</span>
                {c.likes > 0 && <span className="comment-action">👍 Like ({c.likes})</span>}
                <span className="comment-action">💬 Reply</span>
                {c.replies && <span className="comment-action">View {c.replies.length} replies</span>}
              </div>
            </div>
          </div>
          {c.replies && (
            <div className="comment-replies">
              {c.replies.map((r, j) => (
                <div className="comment-item" key={j}>
                  <img src={r.avatar} alt={r.name} className="comment-item__avatar" />
                  <div className="comment-item__bubble">
                    <div className="comment-item__name">{r.name}</div>
                    <p className="comment-item__text">{r.text}</p>
                    <div className="comment-item__meta">
                      <span className="comment-item__time">{r.time}</span>
                      <span className="comment-action">👍 Like ({r.likes})</span>
                      <span className="comment-action">💬 Reply</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
