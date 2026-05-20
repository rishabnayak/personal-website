import { useEffect } from "react";
import { siteContent } from "./content";
import { initializeAnalytics } from "./lib/analytics";

function App() {
  useEffect(() => {
    document.title = siteContent.seo.title;
    initializeAnalytics(siteContent.seo.analyticsId);
  }, []);

  return (
    <main className="page-shell">
      <section className="landing-layout" aria-label="Profile">
        <div className="portrait-column">
          <img
            className="profile-photo"
            src={siteContent.profile.portrait}
            alt="Portrait of Rishab Nayak"
          />
        </div>

        <div className="content-column">
          <h1>{siteContent.profile.name}</h1>

          <div className="bio-copy">
            {siteContent.profile.bio.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.map((fragment, fragmentIndex) => {
                  const className =
                    fragment.tone === "highlight"
                      ? "bio-highlight"
                      : fragment.tone === "link"
                        ? "bio-link"
                        : "bio-base";

                  if (fragment.href) {
                    return (
                      <a
                        key={`${paragraphIndex}-${fragmentIndex}`}
                        className={className}
                        href={fragment.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {fragment.text}
                      </a>
                    );
                  }

                  return (
                    <span
                      key={`${paragraphIndex}-${fragmentIndex}`}
                      className={className}
                    >
                      {fragment.text}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>

          <div className="social-row" aria-label="Social links">
            {siteContent.socials.map((social) => (
              <a
                key={social.label}
                className="social-link"
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: social.iconSize ?? 24,
                    height: social.iconSize ?? 24,
                  }}
                />
              </a>
            ))}
            <a
              className="resume-link"
              href={siteContent.seo.resumePath}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
