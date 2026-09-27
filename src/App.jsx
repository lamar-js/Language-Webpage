
import{useTranslation} from  "react-i18next"
import "./App.css";
import ProjectCard from "./components/projectCrad";
function App() {
const {t,i18n } =useTranslation();

const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <span>Lamar.</span>  Portfolio

        </div>
        <div className="nav-links">
          <a href="#mywork"> {t("nav.myWork")}</a>
          <a href="#myskills"> {t("nav.mySkills")}</a>
          <a href="#about"> {t("nav.about")}</a>
        </div>

        <div className="lang">
          <select onChange={handleLanguageChange} value={i18n.language}>
   
            <option value="ar">العربيه</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="ur">اردو</option>
          </select>

        </div>

      </nav>

      <section id="about" >
        <div className="text-about">
          <h4>  {t("about.greeting")}</h4>
          <h4> {t("about.title")}</h4>
          <ul>
          <li> <span > {t("about.info.0")}</span><span dir="ltr"></span> </li>
          <li> {t("about.info.1")}</li>
            <li>{t("about.info.2")}</li>
           
          </ul>
        </div>
        <div className="aboutimg">

          <img src="about img.jpg" alt="lamar" />
        </div>


      </section>



      <h2> {t("sections.myWork")}</h2>
      <section id="mywork">
        <ProjectCard title={t("projects.basira.title")}
          description={t("projects.basira.description")}>

        </ProjectCard>
        <ProjectCard title={t("projects.dourak.title")}
          description={t("projects.dourak.description")}>

        </ProjectCard>
        <ProjectCard title={t("projects.balaghi.title")}
          description={t("projects.balaghi.description")}>

        </ProjectCard>
      </section>

      <h2> {t("sections.mySkills")}</h2>
      <section id="myskills">
        <ProjectCard title={t("skills.projectManagement.title")}
          description={t("skills.projectManagement.description")}>

        </ProjectCard>
        <ProjectCard title={t("skills.uiux.title")}
          description={t("skills.uiux.description")}>

        </ProjectCard>
        <ProjectCard title={t("skills.reactNative.title")}
          description={t("skills.reactNative.description")}>

        </ProjectCard>
      </section>


    </>
  );
}

export default App;