import IconLink from "@/components/molecules/IconLink";
import Paragraph from "@/components/molecules/Paragraph";
import TitlePage from "@/components/molecules/TitlePage";
import github from "../../../../public/github-icon.svg";
import linkedin from "../../../../public/linkedin-icon.svg";
import gmail from "../../../../public/google-gmail.svg";

const ContactTemplate = () => {
  return (
    <div>
      <TitlePage title={"Contact"} colors={"yellow"} />
      <Paragraph
        content={
          "Retrouvez mes différents liens pour me contacter et ou consulter mon travail."
        }
        subTitle={"Mes réseaux"}
        colors={"white"}
      />
      <IconLink
        colors={"blue"}
        src={github}
        alt={"github"}
        link={"https://github.com/Julien-FRA"}
        textLink={"Github"}
      />
      <IconLink
        colors={"red"}
        src={linkedin}
        alt={"linkedin"}
        link={"https://www.linkedin.com/in/julien-francois-07140617a/"}
        textLink={"Linkedin"}
      />
      <IconLink
        colors={"yellow"}
        src={gmail}
        alt={"gmail"}
        link={"mailto:julien.fra3@gmail.com"}
        textLink={"Gmail"}
      />
    </div>
  );
};

export default ContactTemplate;
