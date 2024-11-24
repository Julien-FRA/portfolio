import Paragraph from "@/components/molecules/Paragraph";
import TitlePage from "@/components/molecules/TitlePage";

const AboutTemplate = () => {
  return (
    <>
      <TitlePage title={"A propos de moi"} colors={"white"} />
      <Paragraph
        content={
          "Bonjour, je m'appelle Julien, j'ai 25 ans, et je suis développeur front-end et fullstack, avec une expertise principalement centrée sur le JavaScript. Passionné depuis toujours par l'informatique, j'adore découvrir les nouvelles technologies et me tenir à jour sur les dernières tendances du développement web."
        }
        colors={"white"}
        subTitle={"Je me présente..."}
      />
      <Paragraph
        content={
          "Mon parcours m'a amené à maîtriser divers frameworks et outils qui gravitent autour de l'écosystème JavaScript, ce qui me permet de créer des applications web modernes et performantes, tant côté client que serveur. Mon travail me tient à cœur, car j'aime la logique du code, la résolution de problèmes, et la satisfaction de voir un projet se concrétiser."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "En dehors de l'informatique, je suis un grand amateur de jeux vidéo, un passe-temps qui m'a aussi permis de développer mon esprit d'analyse et mon goût pour les défis. Je pratique également du sport pour rester actif et équilibré. Cela me permet de m’aérer l’esprit et de rester en forme, un complément idéal à mes journées de dev :)."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "Enfin, la musique occupe une place importante dans ma vie. Elle m'accompagne souvent pendant mes sessions de développement et me permet de me plonger dans un univers créatif. Sans oublier les concerts et les festivals en été !"
        }
        colors={"white"}
      />
      <Paragraph
        content={"Voilà, en quelques mots, qui je suis !"}
        colors={"white"}
      />
    </>
  );
};

export default AboutTemplate;
