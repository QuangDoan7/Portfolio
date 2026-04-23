import './content.css';
import { greeting } from './greeting.js';
import me from "../assets/images/me.png";
import python from "../assets/images/python.png";
import java from "../assets/images/java.png";
import cSharp from "../assets/images/Csharp.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import php from "../assets/images/php.png";
import react from "../assets/images/react.png";
import mySQL from "../assets/images/mysql.png";
import gitHub from "../assets/images/github.png";
import VSCode from "../assets/images/visualstudiocode.png";
import visualStudio from "../assets/images/visualstudio.png";
import intelliJ from "../assets/images/intellij.png";
import petCafe from "../assets/images/petCafe.png";
import colorEase from "../assets/images/colorEase.png";


function Content({page}) {
    return(
        <div key={page} className="content">
            {page === 'about-me' && (
                <section className="about-me-section">
                    <h2>{greeting()}</h2>
                    <img src={me} alt="me"/>
                    <div>
                        <p>
                            My name is Thanh Quang Doan. I am a Software Development student at Mohawk College, currently based in Hamilton,
                            Canada, with a strong academic record <strong>(GPA: 90.5)</strong>. I am seeking a co-op opportunity in software development,
                            with a primary interest in <strong>Front-end</strong> and <strong>Full-stack</strong> roles, while remaining open to opportunities
                            in <strong>software support</strong> and related <strong>technical positions</strong>.
                        </p>
                        <p>
                            I have built some full-stack applications that integrate frontend interfaces, backend APIs, and databases using technologies
                            such as <strong>React</strong>, <strong>JavaScript</strong>, <strong>ASP.NET</strong>, and <strong>SQL</strong>, 
                            focusing on clean architecture and real-world functionality.
                        </p>
                        <p>
                            Alongside my studies, I continuously strengthen my problem-solving skills through <strong>LeetCode</strong> and personal projects,
                            with an emphasis on understanding core programming concepts and writing maintainable code.
                        </p>
                        <p>
                            Before transitioning into software development, I worked as a <strong>Translator</strong>, <strong>Assistant to a Director</strong>,
                            and <strong>Technical Illustrator</strong>. These experiences helped me develop strong communication skills, attention to detail,
                            and the ability to quickly adapt to new domains.
                        </p>
                        <p>
                            I am eager to apply my skills in real-world environments, contribute to a development team,
                            and continue growing as a developer.
                        </p>
                    </div>
                </section>
            )}

            {page === 'education' && (
                <section className="education-section">
                    <h2>Education</h2>
                    <div>
                        <h3>Software Development Advanced Diploma</h3>
                        <ul>
                            <li>Mohawk College - Hamilton, Ontario, Canada </li>
                            <li>2024 - 2028 (Expected) | GPA: 90.5</li>
                        </ul>
                        <h3>Bachelor of Arts in English Language (Translation and Interpretation)</h3>
                        <ul>
                            <li>Ho Chi Minh City University of Technology (HUTECH) — Vietnam</li>
                            <li>2011 - 2015</li>
                        </ul>
                    </div>
                </section>
            )}

            {page === 'work-experience' && (
                <section className="work-experience-section">
                    <h2>Work Experience</h2>
                    <div>
                        <h3>Technical Illustrator</h3>
                        <h4>YDR Vietnam Co., Ltd. (Yuasa Design Room) - Vietnam</h4>
                        <h4>2021 - 2024</h4>
                        <ul className="ydr-work">
                            <li>
                                Created and revised detailed technical drawings for large-scale construction projects,
                                pensuring precision and consistency.
                            </li>
                            <li>
                                Ensured accuracy and compliance with industry standards through thorough review and revisions.
                            </li>
                        </ul>

                        <h3>Assistant to the Director</h3>
                        <h4>The Asian International School - Vietnam</h4>
                        <h4>2019 - 2021</h4>
                        <ul className="asian-school-work">
                            <li>
                                Supported administrative operations and coordinated communication between management, staff, and parents.
                            </li>
                            <li>
                                Organized documents and assisted in planning school activities.
                            </li>
                        </ul>

                        <h3>Translator</h3>
                        <h4>Viet Uy Tin Co., Ltd. - Vietnam</h4>
                        <h4>2015 - 2019</h4>
                        <ul className="vietuytin-work">
                            <li>
                                Translated office documents between English and Vietnamese with high accuracy.
                            </li>
                            <li>
                                Maintained consistency, confidentiality, and attention to detail in all documentation.
                            </li>
                        </ul>
                    </div>
                </section>
            )}

            {page === 'skills' && (
                <section className="skills-section">
                    <h2>Personal Skills</h2>
                    <div className="skills-container">
                        <div className="development-skills">
                            <h3>DEVELOPMENT SKILLS</h3>
                            <h4>Programming languages</h4>
                            <div className="programming-languages">
                                <img src={python} alt="Python"/>
                                <img src={java} alt="Java"/>
                                <img src={cSharp} alt="C#"/>
                            </div>
                            <h4>Web Development</h4>
                            <div className="programming-languages">
                                <img src={html} alt="HTML"/>
                                <img src={css} alt="CSS"/>
                                <img src={javascript} alt="JavaScript"/>
                                <img src={php} alt="PHP"/>
                                <img src={react} alt="React"/>
                            </div>
                            <h4>Data Management</h4>
                            <div className="programming-languages">
                                <img src={mySQL} alt="MySQL"/>
                            </div>
                            <h4>Tools</h4>
                            <div className="programming-languages">
                                <img src={gitHub} alt="GitHub"/>
                                <img src={VSCode} alt="Visual Studio Code"/>
                                <img src={visualStudio} alt="Visual Studio"/>
                                <img src={intelliJ} alt="IntelliJ IDEA"/>
                            </div>
                        </div>
                        <div className="soft-skills">
                            <h3>SOFT SKILLS</h3>
                            <ul className="soft-skills-list">
                                <li>Strong time management with the ability to consistently meet deadlines.</li>
                                <li>Ability to work effectively under pressure in fast-paced environments.</li>
                                <li>Practical problem-solving with a structured and analytical approach.</li>
                                <li>High attention to detail, especially in documentation and task execution.</li>
                                <li>Strong sense of responsibility and work ethic.</li>
                                <li>Effective communication and adaptability in team environments.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {page === 'projects' && (
                <section className="projects-section">
                    <h2>Projects</h2>
                    <p><em>*Clicking the project titles will take you to the respective project pages.</em></p>
                    <div>
                        <div className="project-item">
                            <div className="project-description">
                                <h3><a href="https://youtu.be/y5mU7odOGSY" target="_blank" rel="noopener noreferrer">Pet Café Website</a></h3>
                                <ul>
                                    <li>
                                        A pet café website that has multiple pages for the introduction, events, menu, job postings,
                                        blog posts, and contact information.
                                    </li>
                                    <li>Included mini map for a clear location, and comment section at blog posts for customer interaction.</li>
                                    <li>Built using WordPress.</li>
                                </ul>
                            </div>
                            <img src={petCafe} alt="Pet Café Website"/>
                        </div>
                    </div>
                </section>
            )}

        </div>
    )
}

export default Content