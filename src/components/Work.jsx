import { useState } from "react";
import styles from "./Work.module.css";
import FadeInSection from "./FadeInSection";

function Work() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <section id="work" className={styles.workSection}>
      <div className={styles.workHeading}>
        <span className={styles.bgColor}>My Career Path</span>
      </div>
      <div className={styles.workTable}>
        <div className={styles.workContainer}>
          {/* Tab Controls */}
          <input
            type="radio"
            id="tabToggle01"
            name="tabs"
            value="1"
            checked={selectedTab === 1}
            onChange={() => handleTabChange(1)}
          />
          <label className={styles.workLabel} htmlFor="tabToggle01">
            Gryphon Server
          </label>
          <input
            type="radio"
            id="tabToggle02"
            name="tabs"
            value="2"
            checked={selectedTab === 2}
            onChange={() => handleTabChange(2)}
          />
          <label htmlFor="tabToggle02">Six Solutions</label>
          <input
            type="radio"
            id="tabToggle03"
            name="tabs"
            value="3"
            checked={selectedTab === 3}
            onChange={() => handleTabChange(3)}
          />
          <label htmlFor="tabToggle03">Brain-Win Project</label>
          <input
            type="radio"
            id="tabToggle04"
            name="tabs"
            value="4"
            checked={selectedTab === 4}
            onChange={() => handleTabChange(4)}
          />
          <label htmlFor="tabToggle04">Freelance jobs</label>

          {/* Work Content */}
          {selectedTab === 1 && (
            <div className={styles.workContent}>
              <p className={styles.contentP1}>Game Developer</p>
              <p className={styles.contentP2}></p>
              <FadeInSection>
                <div className={styles.contentP}>
                  <p>
                    <a
                      className={styles.strongLink}
                      href="https://www.xtremetop100.com/sitedetails-1132260351"
                    >
                      <a className={styles.strongLink}>Gryphon</a>
                    </a>{" "}
                    server was a private World of Warcraft server where I
                    started playing back in 2009. <br />
                    Later on, I got employed to create in-game assets and work
                    in the database.
                  </p>
                  <p>
                    <br />
                    <a className={styles.strongLink}>Quest scripting:</a> I
                    utilized LUA scripting to program interactive quest chains,
                    including event triggers, NPC dialogues, and complex reward
                    systems. This involved managing conditions, player
                    interactions, and dynamic quest states based on player
                    actions.
                    <br />
                    <a className={styles.strongLink}>
                      Database management:
                    </a>{" "}
                    Worked with SQL, MariaDB, and HeidiSQL to manage game data,
                    including item drops, spawn points, and quest objectives. I
                    optimized queries for performance and ensured data integrity
                    within the game database.
                    <br />
                    <a className={styles.strongLink}>Core development:</a>{" "}
                    Contributed to the server core using C++ and C#, fixing
                    bugs, implementing new gameplay mechanics, and enhancing
                    server stability.
                  </p>
                </div>
                <div className={styles.contentIcons}>
                  <i
                    className={`devicon-mariadb-original-wordmark ${styles.icon}`}
                  ></i>
                  <i className={`devicon-lua-plain ${styles.icon}`}></i>
                  <i className={`devicon-cplusplus-plain ${styles.icon}`}></i>
                  <i className={`devicon-csharp-plain ${styles.icon}`}></i>
                </div>
              </FadeInSection>
            </div>
          )}
          {selectedTab === 2 && (
            <div className={styles.workContent}>
              <p className={styles.contentP1}>Full-Stack Developer</p>
              <p className={styles.contentP2}></p>
              <FadeInSection>
                <div className={styles.contentP}>
                  <p>
                    Work on understanding client requirements, planning and
                    designing applications, writing and optimizing code, testing
                    and debugging, as well as deploying and maintaining
                    applications.
                    <br />
                    <br />I developed dynamic and interactive web features using
                    jQuery, ensuring seamless user experiences, and built
                    server-side logic and APIs using PHP with frameworks such as
                    Laravel and CodeIgniter. <br />
                    On the back-end, I worked extensively with MySQL databases,
                    designing efficient schemas, writing complex queries, and
                    optimizing database performance for scalability. <br /> I
                    debugged and resolved issues in both development and
                    production environments using tools like Xdebug and browser
                    developer tools, ensuring robust and reliable applications.
                  </p>
                </div>
                <div className={styles.contentIcons}>
                  <i className={`devicon-javascript-plain ${styles.icon}`}></i>
                  <i className={`devicon-jquery-plain ${styles.icon}`}></i>
                  <i className={`devicon-angular-plain ${styles.icon}`}></i>
                  <i className={`devicon-bootstrap-plain ${styles.icon}`}></i>
                </div>
              </FadeInSection>
            </div>
          )}
          {selectedTab === 3 && (
            <div className={styles.workContent}>
              <p className={styles.contentP1}>Database Administrator</p>
              <p className={styles.contentP2}></p>
              <FadeInSection>
                <div className={styles.contentP}>
                  <p>
                    {" "}
                    <a
                      className={styles.strongLink}
                      href="https://www.brainwin.be/"
                    >
                      <a className={styles.strongLink}>Brain-Win Project</a>
                    </a>{" "}
                    is consulting, outsourcing and training services company.
                  </p>
                  <p>
                    <br />I monitor database performance, resolve issues, and
                    perform regular maintenance tasks such as backups, data
                    recovery, and optimization. Ensuring data security and
                    integrity is crucial, so I implement robust security
                    measures and validation procedures. I also analyze queries
                    and system performance to identify optimization
                    opportunities and collaborate with development teams to
                    ensure proper database design and optimization for supported
                    applications.
                  </p>
                  <p>
                    <br />
                    Additionally, I maintain detailed documentation, prepare
                    performance and security reports, and provide technical
                    support and training to users and team members.
                  </p>
                </div>
                <div className={styles.contentIcons}>
                  <i
                    className={`devicon-microsoftsqlserver-plain-wordmark ${styles.icon}`}
                  ></i>
                  <i className={`devicon-oracle-original ${styles.icon}`}></i>
                </div>
              </FadeInSection>
            </div>
          )}
          {selectedTab === 4 && (
            <div className={styles.workContent}>
              <FadeInSection>
                <p className={styles.contentP1}>
                  Frontend developer | Backend developer
                </p>
                <p className={styles.contentP}>
                  <b>
                    <a
                      className={styles.workLinks}
                      href="https://www.phpbb.com/"
                      aria-label="Visit Phpbb site"
                    >
                      phpBB
                    </a>
                    :
                  </b>
                  My first freelance jobs began in 2008, focused on creating and
                  maintaining templates and addons for PHPBB forums. For
                  example, at that time, &quot;guilds&quot; in MMORPG games were
                  popular and experiencing expansions, and I created forums for
                  these guilds and connected them with in-game content.
                </p>
              </FadeInSection>
              <FadeInSection>
                <p className={styles.contentP}>
                  Some of the websites I worked on:
                  <br />
                  <a
                    className={styles.workLinks}
                    href="https://www.rukoart.com"
                    aria-label="Visit rukoart site"
                  >
                    <b>rukoart.com</b> |
                  </a>
                  <a
                    className={styles.workLinks}
                    href="https://www.hologrammsolutions.at"
                    aria-label="Visit hologram solutions site"
                  >
                    <b> hologrammsolutions.at</b>
                  </a>
                </p>
              </FadeInSection>

              <div className={styles.contentIcons}>
                <FadeInSection>
                  <i className={`devicon-php-plain ${styles.icon}`}></i>
                  <i
                    className={`devicon-apache-plain-wordmark ${styles.icon}`}
                  ></i>
                  <i className={`devicon-javascript-plain ${styles.icon}`}></i>
                  <i className={`devicon-python-plain ${styles.icon}`}></i>
                </FadeInSection>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Work;
