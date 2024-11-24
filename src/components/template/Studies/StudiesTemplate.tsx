import Paragraph from "@/components/molecules/Paragraph";
import TitlePage from "@/components/molecules/TitlePage";

const StudiesTemplate = () => {
  return (
    <>
      <TitlePage title={"Formation"} colors={"yellow"} />
      <Paragraph
        content={
          "Expert en transformation digitale et technologique de niveau 7 enregistré au RNCP."
        }
        colors={"white"}
        subTitle={"Mastere CTO et Tech Lead / HETIC"}
        caption={"2021 - 2023"}
      />
      <Paragraph
        content={
          "Le Mastère CTO & Tech Lead m’a permis d’acquérir une expertise approfondie dans les langages, les infrastructures et les méthodologies de programmation."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "Pendant deux ans, à l’école et en entreprise, j'ai consolidé mes compétences, développé mon autonomie, mon esprit critique et ma capacité à travailler en équipe."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "L’objectif d'HETIC étant de me préparer à intégrer le monde de l’entreprise, leur pédagogie a favorisé les travaux de groupe et ma professionnalisation. Elle s'est appuyée sur la réalisation de projets concrets pour des entreprises et sur un enseignement dispensé par des professionnels et des experts du secteur."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "Formation intensive d’un an, la Prépa Mastère Digital m'a permis d’approfondir ma culture digitale et d’acquérir des compétences en Développement, en Design, en Webmarketing et en Data."
        }
        colors={"white"}
        subTitle={"Prépa Mastère Digital / HETIC"}
        caption={"2020 - 2021"}
      />
    </>
  );
};

export default StudiesTemplate;
