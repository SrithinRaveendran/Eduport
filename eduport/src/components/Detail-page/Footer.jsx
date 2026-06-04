export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">Edu<span>port</span></div>
            <p className="footer__desc">
              Eduport education theme, built specifically for education centers dedicated to teaching
              and involving learners.
            </p>
            <div className="footer__socials">
              {['𝕏', 'f', 'in', '▶'].map((s, i) => (
                <div className="social-btn" key={i} style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}>{s}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__heading">Company</div>
            <ul className="footer__links">
              {['About us', 'Contact us', 'News and Blogs', 'Library', 'Career'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__heading">Community</div>
            <ul className="footer__links">
              {['Documentation', 'FAQ', 'Forum', 'Sitemap'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__heading">Teaching</div>
            <ul className="footer__links">
              {['Become a teacher', 'How to guide', 'Terms & Conditions'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__heading">Contact</div>
            <div className="footer__contact">
              <p><strong>Toll free:</strong> +1234 568 963</p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(230, 221, 221, 0.5)' }}>(9:AM to 8:PM IST)</p>
              <p><strong>Email:</strong> example@gmail.com</p>
            </div>
            {/* <div className="footer__app-btns">
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', padding: '0.5rem 0.75rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>
                🛒 Google Play
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', padding: '0.5rem 0.75rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>
                🍎 App Store
              </a>
            </div> */}
          </div>
        </div>

        <div className="footer__bottom">
          {/* <p className="footer__copy">Copyrights ©2024 Eduport. Build by <a href="#">StackBros</a></p> */}
          <div className="footer__bottom-links">
            <a href="#">Terms of use</a>
            <a href="#">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
