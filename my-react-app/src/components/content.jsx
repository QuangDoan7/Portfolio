import './content.css';
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
import restapis from "../assets/images/restapi.png";
import nodejs from "../assets/images/nodejs.png";
import wordpress from "../assets/images/wordpress.png";
import githubpages from "../assets/images/githubpages.png";
import istqb from "../assets/images/ISTQB.jpg";
import sql from "../assets/images/sql.png";
import sqlite from "../assets/images/sqlite.png";

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
                    <h2>My name is Thanh Quang Doan.</h2>
                    <img src={me} alt="me"/>
                    <div>
                        <p>
                            I'm a Software Development student at Mohawk College in Hamilton, Ontario <strong>(GPA 90.53%, Dean's Honour)</strong> who enjoys building software end to end: designing interfaces, building REST APIs, working with databases, and testing the result.
                        </p>
                        <p>
                            My projects include a full-stack Games Collection app (<strong>React Native</strong>, <strong>Node.js/Express</strong>, <strong>SQLite</strong>), an <strong>ASP.NET Core</strong> web app with role-based access, an interactive map app using <strong>Google Maps APIs</strong>, and a <strong>WordPress</strong> site. I also work with <strong>JavaScript</strong>, <strong>React</strong>, <strong>C#</strong>, and <strong>Java</strong>.
                        </p>
                        <p>
                            I'm <strong>ISTQB Certified (CTFL v4.0)</strong> and completed a quality control project: designing test cases, testing a <strong>REST API</strong> with <strong>Postman</strong>, and automating regression tests with <strong>GitHub Actions</strong>.
                        </p>
                        <p>
                            Before moving into software, I worked in translation and technical drawing, which sharpened my attention to detail and written communication.
                        </p>
                        <p>
                           I'm looking for Software Development, Full-stack, Front-end, or QA/QC opportunities where I can contribute to real projects and keep growing.
                        </p>
                    </div>
                </section>
            )}

            {page === 'education' && (
                <section className="education-section">
                    <h2>Education</h2>
                    <div>
                        <h3> Computer Systems Technology – Software Development (Advanced Diploma)</h3>
                        <ul>
                            <li>Mohawk College, Hamilton, Ontario, Canada</li>
                            <li>Sept 2024 – Expected Early 2028 | GPA: 90.53% | Dean's Honour</li>
                        </ul>
                        <h3>Bachelor of Arts in English Language (Translation and Interpretation)</h3>
                        <ul>
                            <li>Ho Chi Minh City University of Technology (HUTECH), Vietnam</li>
                            <li>2011 - 2015</li>
                        </ul>
                    </div>
                    <h2>Certifications</h2>
                    <div>
                        <h3>ISTQB® Certificate</h3>
                        <ul>
                            <li>ISTQB® Certified Tester – Foundation Level (CTFL), v4.0</li>
                            <li>Certified on September 17, 2026</li>
                        </ul>
                    </div>
                </section>
            )}

            {page === 'work-experience' && (
                <section className="work-experience-section">
                    <h2>Work Experience</h2>
                    <p>
                        Before moving into software development, I worked in construction drawing, school administration, and translation, roles that built my attention to detail, documentation habits, and written communication
                    </p>
                    <div>
                        <h3>Technical Illustrator, Construction Drawings</h3>
                        <h4>YDR Vietnam Co., Ltd. (a branch of Yuasa Design Room Co., Ltd.), Vietnam</h4>
                        <h4 style={{ color: '#6af341' }}>July 2021 – Jan 2024</h4>
                        <ul className="ydr-work">
                            <li>
                                Produced and maintained detailed technical drawings for large-scale infrastructure projects, including Ho Chi Minh City Metro Line 1.
                            </li>
                            <li>
                                Reviewed and revised drawings against technical standards, and worked with engineers to resolve discrepancies and keep documentation accurate and version-controlled.
                            </li>
                        </ul>

                        <h3>Assistant to the Director of English Department</h3>
                        <h4>The Asian International School, Vietnam</h4>
                        <h4 style={{ color: '#6af341' }}>June 2019 – June 2021</h4>
                        <ul className="asian-school-work">
                            <li>
                                Managed departmental records and documentation with a high level of accuracy and confidentiality.
                            </li>
                            <li>
                                Coordinated communication between staff and students' families, and helped plan school events and schedules.
                            </li>
                        </ul>

                        <h3>Translator</h3>
                        <h4>Viet Uy Tin Co., Ltd., Vietnam</h4>
                        <h4 style={{ color: '#6af341' }}>May 2015 – May 2019</h4>
                        <ul className="vietuytin-work">
                            <li>
                                Translated notarized and official documents between English and Vietnamese with high accuracy and consistent terminology.
                            </li>
                            <li>
                                Handled sensitive, legally binding materials under strict confidentiality standards.
                            </li>
                            <li>
                                Reviewed and revised translations to meet formal documentation requirements.
                            </li>
                        </ul>
                    </div>
                </section>
            )}

            {page === 'skills' && (
                <section className="skills-section">
                    <h2>Personal Skills</h2>
                    <div className="development-skills">
                        <h3>DEVELOPMENT SKILLS</h3>
                        <div className="skills-container">
                            <div>
                                <h4>Front-end</h4>
                                <div className="programming-languages">
                                    <img src={html} alt="HTML"/>
                                    <img src={css} alt="CSS"/>
                                    <img src={javascript} alt="JavaScript"/>
                                    <img src={react} alt="React"/>
                                </div>
                            </div>
                            <div>
                                <h4>Back-end</h4>
                                <div className="programming-languages">
                                    <img src={nodejs} alt="Node.js"/>
                                    <img src={php} alt="PHP"/>
                                    <img src={netCore} alt="ASP.NET Core"/>
                                    <img src={restapis} alt="REST APIs"/>
                                </div>
                            </div>
                            <div>
                                <h4>CMS & Deployment</h4>
                                <div className="programming-languages">
                                    <img src={wordpress} alt="WordPress"/>
                                    <img src={githubpages} alt="GitHub Pages"/>
                                </div>
                            </div>
                            <div>
                                <h4>Databases</h4>
                                <div className="programming-languages">
                                    <img src={mySQL} alt="MySQL"/>
                                    <img src={sqlite} alt="SQLite"/>
                                    <img src={sql} alt="SQL"/>
                                </div>
                            </div>
                            <div>
                                <h4>Testing & QA</h4>
                                <div className="programming-languages">
                                    <img src={istqb} alt="ISTQB"/>
                                </div>
                            </div>
                            <div>
                                <h4>Others</h4>
                                <div className="programming-languages">
                                    <img src={python} alt="Python"/>
                                    <img src={java} alt="Java"/>
                                    <img src={cSharp} alt="C#"/>
                                </div>
                            </div>
                            <div>
                                <h4>Tools</h4>
                                <div className="programming-languages">
                                    <img src={gitHub} alt="GitHub"/>
                                    <img src={VSCode} alt="Visual Studio Code"/>
                                    <img src={visualStudio} alt="Visual Studio"/>
                                    <img src={intelliJ} alt="IntelliJ IDEA"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="soft-skills">
                        <h3>SOFT SKILLS</h3>
                        <ul className="soft-skills-list">
                            <li>Time management and the ability to consistently meet deadlines.</li>
                            <li>Composure under pressure in fast-paced environments.</li>
                            <li>A structured, analytical approach to solving problems.</li>
                            <li>Strong attention to detail, especially in documentation.</li>
                            <li>Responsibility and a strong work ethic.</li>
                            <li>Clear communication and adaptability in team settings.</li>
                        </ul>
                    </div>
                </section>
            )}

            {page === 'projects' && (
                <section className="projects-section">
                    <h2>Projects</h2>
                    <p className="note"><em>*Each project links to its source code (Repo) and/or a demo (Demo).</em></p>

                    <div className="project-item">
                        <div className="project-title">
                            <h3>
                                Pet Café Website (Concept Project) | WordPress
                                (<a href="https://youtu.be/y5mU7odOGSY" target="_blank" rel="noopener noreferrer">Youtube Demo</a>)
                            </h3>
                        </div>
                        <div className="project-description">
                            <ul>
                                <li style={{ color: '#6af341' }}>
                                    A multi-page website for a pet café, built in WordPress.
                                </li>
                                <li>
                                    Built pages for the café's introduction, events, menu, job postings, blog, and contact information.
                                </li>
                                <li>Embedded a location map to help visitors find the café.</li>
                                <li>Enabled comments on blog posts so customers can interact with the café.</li>
                            </ul>
                            <img src={petCafe} alt="Pet Café Website" onClick={() => window.open(petCafe, '_blank')} style={{ cursor: 'pointer' }}/>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-title">
                            <h3>
                                Games Collection | React Native · Node.js · Express · SQLite
                                (<a href="https://github.com/QuangDoan7/games-collection.git" target="_blank" rel="noopener noreferrer">Git Repo</a>- 
                                <a href="https://www.youtube.com/watch?v=DCXEKAMeKm8&feature=youtu.be" target="_blank" rel="noopener noreferrer">Youtube Demo</a>)
                            </h3>
                        </div>
                        <div className="project-description">
                            <ul>
                                <li style={{ color: '#6af341' }}>
                                    A full-stack app for managing a personal video game collection.
                                </li>
                                <li>
                                    Built a REST API with Express and SQLite supporting full CRUD (create, read, update, delete).
                                </li>
                                <li>
                                    Developed a React Native app that consumes the API and keeps the displayed data in sync.
                                </li>
                                <li>
                                    Tested the API in a separate quality control project (see below).
                                </li>
                            </ul>
                            <img src={gamesCollection} alt="Games Collection Website" onClick={() => window.open(gamesCollection, '_blank')} style={{ cursor: 'pointer' }}/>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-title">
                            <h3>
                                Games Collection API – Quality Control Project | Postman · GitHub Actions
                                (<a href="https://github.com/QuangDoan7/games-collection-qc" target="_blank" rel="noopener noreferrer">Git Repo</a>)
                            </h3>
                        </div>
                        <div className="project-description">
                            <ul>
                                <li style={{ color: '#6af341' }}>
                                    A functional testing project for the Games Collection REST API.
                                </li>
                                <li>
                                    Analyzed requirements, wrote a test plan, and designed test cases.
                                </li>
                                <li>
                                    Executed positive, negative, and regression tests in Postman and reported defects.
                                </li>
                                <li>
                                    Automated API regression tests with GitHub Actions for continuous testing.
                                </li>
                            </ul>
                            <img src={gamesCollectionQC} alt="Games Collection QC Project" onClick={() => window.open(gamesCollectionQC, '_blank')} style={{ cursor: 'pointer' }}/>
                        </div>
                        
                    </div>

                    <div className="project-item">
                        <div className="project-title">
                            <h3>
                                Movies Collection | ASP.NET Core · Razor Pages · C#
                            </h3>
                        </div>
                        <div className="project-description">
                            <ul>
                                <li style={{ color: '#6af341' }}>
                                    A full-stack web app where each user manages a personal movie collection.
                                </li>
                                <li>
                                    Implemented authentication and role-based authorization.
                                </li>
                                <li>
                                    Isolated each user's data so accounts only see their own collection.
                                </li>
                                <li>
                                    Gave administrators extended privileges for user management.
                                </li>
                            </ul>
                            <img src={moviesCollection} alt="Movies Collection Website" onClick={() => window.open(moviesCollection, '_blank')} style={{ cursor: 'pointer' }}/>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-title">
                            <h3>
                                Explore Saigon | Bootstrap · Google Maps APIs
                                (<a href="https://github.com/QuangDoan7/explore-saigon.git" target="_blank" rel="noopener noreferrer">Git Repo</a>- 
                                <a href="https://quangdoan7.github.io/explore-saigon/" target="_blank" rel="noopener noreferrer">Website Demo</a>)
                            </h3>
                        </div>
                        <div className="project-description">
                            <ul>
                                <li style={{ color: '#6af341' }}>
                                    An interactive map app for exploring locations in Ho Chi Minh City.
                                </li>
                                <li>
                                    Integrated Google Maps APIs for marker visualization, geolocation, and geocoding
                                </li>
                                <li>
                                    Added route directions between locations
                                </li>
                            </ul>
                            <img src={exploreSaigon} alt="Explore Saigon Website" onClick={() => window.open(exploreSaigon, '_blank')} style={{ cursor: 'pointer' }}/>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-title">
                            <h3>
                                Master the Recipes | React Native · TheMealDB API
                                (<a href="https://github.com/QuangDoan7/recipes-master.git" target="_blank" rel="noopener noreferrer">Git Repo</a>- 
                                <a href="https://snack.expo.dev/@woarang/master-the-recipes" target="_blank" rel="noopener noreferrer">Snack Expo Demo</a>)
                            </h3>
                        </div>
                        <div className="project-description">
                            <ul>
                                <li style={{ color: '#6af341' }}>
                                    A mobile app for exploring and searching meals using the public TheMealDB API.
                                </li>
                                <li>
                                    Integrated the API to browse meal categories, search dishes, and view ingredients.
                                </li>
                                <li>
                                    Built a state-driven UI that updates as users browse and search.
                                </li>
                                <li>
                                    Used conditional rendering and efficient state management to keep the app responsive.
                                </li>
                            </ul>
                            <img src={masterTheRecipes} alt="Master the Recipes Website" onClick={() => window.open(masterTheRecipes, '_blank')} style={{ cursor: 'pointer' }}/>
                        </div>
                    </div>
                    
                </section>
            )}

        </div>
    )
}

export default Content