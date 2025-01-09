import Hero from "@/components/Hero";
import Text from "@/components/Text";

export default function Hardis() {
        return (
            <>
                <Hero title={"Hardis Group"} location={`Based in "La Défense"`} subtitle={[
                    { normal: "Role", bold: "Front end developer" },
                    { normal: "Timeline", bold: "Sept 2022 - Nov 2023" },
                ]} />
                <Text title={`"Inspiring new ways"`} items={[
                    {subtitle: "Stack", content: "React, Javascript, Typescript, HTML, SCSS, CSS, Drupal."},
                    {subtitle: "Uneo", content: `From scratch, website development of the armed forces mutual insurance company in React.
                        Use of react router, forms management with react hook form, components creation and integration
                        in scss. Agile scrum method for project management.`},
                    {subtitle: "Comité champagne", content: `From scratch, champagne committee's extranet development.
                        Mock-ups integration in scss/bootstrap, collaboration and advice with UX/UI teams.
                        Collaboration with Drupal back-end teams. Agile scrum method for project management.
                        `},
                    {subtitle: "Telemecanique Sensors", content: `From scratch, Telemecanique Sensors website development.
                        Model components integration in Vue.js with scss/bootstrap, collaboration and
                        advice with UX/UI teams. Collaboration with Drupal back-end teams. Agile
                        scrum method for project management.`}, 
                ]} />
            </>
    )
};