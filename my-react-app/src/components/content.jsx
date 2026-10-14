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
import netCore from "../assets/images/netCore.png";
import petCafe from "../assets/images/petCafe.png";
import exploreSaigon from "../assets/images/exploreSaigon.png";
import masterTheRecipes from "../assets/images/masterTheRecipes.png";
import gamesCollection from "../assets/images/gamesCollection.png";
import moviesCollection from "../assets/images/moviesCollection.png";
import gamesCollectionQC from "../assets/images/gamesCollectionQC.png";
import keMo2Pad from "../assets/images/kemo2pad.png";

function Content({page}) {
    return(
        <div key={page} className="content">
            {page === 'about-me' && (
                <section className="about-me-section">
                    <h2>{greeting()}</h2>
                    <img src={me} alt="me"/>
                    <div>
                        <p>
                            My name is Thanh Quang Doan, and I am a Computer Systems Technology - Software Development student at Mohawk College in Hamilton, Canada,
                            with a strong academic record <strong>(GPA: 90.53%)</strong> and Dean's Honour standing.
                        </p>
                        <p>
                            I enjoy building software from end to end - from designing user interfaces and implementing application logic to developing REST APIs,
                            working with databases, and testing application functionality. Through academic and personal projects, I have worked with technologies
                            including <strong>React</strong>, <strong>React Native</strong>, <strong>JavaScript</strong>, <strong>C#</strong>, <strong>ASP.NET Core</strong>, <strong>Node.js/Express</strong>, <strong>Java</strong>, and <strong>SQL/SQLite</strong>.
                        </p>
                        <p>
                            I also enjoy developing smaller personal tools and experimenting with new technologies outside the classroom such as a <strong> C++/SFML desktop game</strong> and
                            a C# application called <strong>KeMo2Pad</strong>, developed to solve a controller compatibility issue my cousin encountered while gaming.
                        </p>
                        <p>
                            In addition to software development, I have a strong interest in <strong>Software Quality Control and Assurance</strong>.
                            I hold the <strong>ISTQB Certified Tester - Foundation Level (CTFL) certification</strong> and have completed a dedicated software testing project involving requirements analysis, test planning,
                            test case design, REST API testing with <strong>Postman</strong>, defect reporting, regression testing, and automated API regression tests using <strong>GitHub Actions</strong>.
                        </p>
                        <p>
                            I am currently seeking opportunities in <strong>Software Development</strong>, <strong>Full-stack Development</strong>, <strong>Front-end Development</strong>, and <strong>Software QC/QA</strong>,
                            where I can contribute to real-world projects, continue strengthening my technical skills, and grow as a software professional.
                        </p>
                    </div>
                </section>
            )}

            {page === 'education' && (
                <section className="education-section">
                    <h2>Education</h2>
                    <div>
                        <h3>ISTQB® Certificate</h3>
                        <ul>
                            <li>ISTQB® Certified Tester - Foundation Level (v4.0)</li>
                            <li>Certified on September 17, 2026</li>
                            <li>Certificate No.: 26-CTFL 4-282083-12</li>
                        </ul>
                        <h3>Software Development Advanced Diploma</h3>
                        <ul>
                            <li>Mohawk College - Hamilton, Ontario, Canada </li>
                            <li>2024 - 2028 (Expected) | GPA: 90.53%</li>
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
                        <h4 style={{ color: '#6af341' }}>2021 - 2024</h4>
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
                        <h4 style={{ color: '#6af341' }}>2019 - 2021</h4>
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
                        <h4 style={{ color: '#6af341' }}>2015 - 2019</h4>
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
                                <img src={netCore} alt="ASP.NET Core"/>
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
                    <p><em>*Clicking Git Repo or Demo for knowing more about the project.</em></p>

                    <div className="project-item">
                        <div className="project-description">
                            <h3>
                                Games Collection API - Quality Control Project
                                (<a href="https://github.com/QuangDoan7/games-collection-qc" target="_blank" rel="noopener noreferrer">Git Repo</a>)
                            </h3>
                            <ul>
                                <li>
                                    A dedicated Software Quality Control project focused on validating the Games Collection REST API through functional testing,
                                    including requirements analysis, test planning, test case design, test execution, and defect reporting.
                                </li>
                                <li>
                                    Performed positive, negative, and regression testing using Postman, and
                                    implemented automated API regression tests integrated with GitHub Actions for continuous testing.
                                </li>
                            </ul>
                        </div>
                        <img src={gamesCollectionQC} alt="Games Collection QC Project" onClick={() => window.open(gamesCollectionQC, '_blank')} style={{ cursor: 'pointer' }}/>
                    </div>    

                    <div className="project-item">
                        <div className="project-description">
                            <h3>
                                Games Collection
                                (<a href="https://github.com/QuangDoan7/games-collection.git" target="_blank" rel="noopener noreferrer">Git Repo</a>- 
                                <a href="https://www.youtube.com/watch?v=DCXEKAMeKm8&feature=youtu.be" target="_blank" rel="noopener noreferrer">Youtube Demo</a>)
                            </h3>
                            <ul>
                                <li>
                                    A full-stack application that allows users to manage a collection of video games, supporting full CRUD operations via a RESTful API.
                                </li>
                                <li>
                                    This project includes:
                                    <ul>
                                        <li>A RESTful API backend built with Express and SQLite.</li>
                                        <li>A React Native application frontend interacting with the API and maintain real-time data synchronization.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <img src={gamesCollection} alt="Games Collection Website" onClick={() => window.open(gamesCollection, '_blank')} style={{ cursor: 'pointer' }}/>
                    </div>

                    <div className="project-item">
                        <div className="project-description">
                            <h3>
                                Movies Collection
                                (<a href="https://github.com/QuangDoan7/movies-collection.git" target="_blank" rel="noopener noreferrer">Git Repo</a>)
                            </h3>
                            <ul>
                                <li>
                                    A full-stack web application built with ASP.NET Razor Pages that allows users to manage their personal movie collections.
                                </li>
                                <li>
                                    The application supports authentication, role-based authorization, and user-specific data isolation.
                                    Each user maintains a separate collection, while administrators have extended privileges for user management.
                                </li>
                            </ul>
                        </div>
                        <img src={moviesCollection} alt="Movies Collection Website" onClick={() => window.open(moviesCollection, '_blank')} style={{ cursor: 'pointer' }}/>
                    </div>

                    <div className="project-item">
                        <div className="project-description">
                            <h3>
                                Explore Saigon
                                (<a href="https://github.com/QuangDoan7/explore-saigon.git" target="_blank" rel="noopener noreferrer">Git Repo</a>- 
                                <a href="https://quangdoan7.github.io/explore-saigon/" target="_blank" rel="noopener noreferrer">Website Demo</a>)
                            </h3>
                            <ul>
                                <li>
                                    Saigon Map Explorer is a web-based interactive map application that allows users to explore locations
                                    in Ho Chi Minh City.
                                </li>
                                <li>
                                    The application integrates Google Maps APIs to provide real-time interaction such as marker visualization,
                                    geolocation, geocoding, and route directions. It demonstrates front-end development skills, API integration,
                                    and dynamic UI behavior.
                                </li>
                            </ul>
                        </div>
                        <img src={exploreSaigon} alt="Explore Saigon Website" onClick={() => window.open(exploreSaigon, '_blank')} style={{ cursor: 'pointer' }}/>
                    </div>

                    <div className="project-item">
                        <div className="project-description">
                            <h3>
                                Master the Recipes
                                (<a href="https://github.com/QuangDoan7/recipes-master.git" target="_blank" rel="noopener noreferrer">Git Repo</a>- 
                                <a href="https://snack.expo.dev/@woarang/master-the-recipes" target="_blank" rel="noopener noreferrer">Snack Expo Demo</a>)
                            </h3>
                            <ul>
                                <li>
                                    Master the Recipes is a mobile application built with React Native that allows users to explore
                                    and search for meals using the public TheMealDB API.
                                </li>
                                <li>
                                    This project focuses on API integration, state-driven UI, and performance-aware rendering in React Native.
                                </li>
                            </ul>
                        </div>
                        <img src={masterTheRecipes} alt="Master the Recipes Website" onClick={() => window.open(masterTheRecipes, '_blank')} style={{ cursor: 'pointer' }}/>
                    </div>

                    <div className="project-item">
                        <div className="project-description">
                            <h3>
                                Pet Café Website
                                (<a href="https://youtu.be/y5mU7odOGSY" target="_blank" rel="noopener noreferrer">Youtube Demo</a>)
                            </h3>
                            <ul>
                                <li>
                                    A pet café website that has multiple pages for the introduction, events, menu, job postings,
                                    blog posts, and contact information.
                                </li>
                                <li>Included mini map for a clear location, and comment section at blog posts for customer interaction.</li>
                                <li>Built using WordPress.</li>
                            </ul>
                        </div>
                        <img src={petCafe} alt="Pet Café Website" onClick={() => window.open(petCafe, '_blank')} style={{ cursor: 'pointer' }}/>
                    </div>

                    <div className="project-item">
                        <div className="project-description">
                            <h3>
                                Keyboard & Mouse as Virtual Controller
                                (<a href="https://github.com/QuangDoan7/KeMo2Pad" target="_blank" rel="noopener noreferrer">GitRepo</a>)
                            </h3>
                            <ul>
                                <li>
                                    A Windows desktop application built with C# that converts keyboard and mouse inputs into virtual game controller inputs.
                                </li>
                                <li>
                                    Supports customizable key mappings, mouse sensitivity adjustments, and hotkey controls for a personalized gaming experience.
                                </li>
                            </ul>
                        </div>
                        <img src={keMo2Pad} alt="Keyboard & Mouse as Virtual Controller" onClick={() => window.open(keMo2Pad, '_blank')} style={{ cursor: 'pointer' }}/>
                    </div>
                </section>
            )}

        </div>
    )
}

export default Content