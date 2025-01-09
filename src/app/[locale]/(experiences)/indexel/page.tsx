import Hero from "@/components/Hero";
import Text from "@/components/Text";

export default function Indexel() {
        return (
            <>
                <Hero title={"Indexel"} location={`Based in "Bastille"`} subtitle={[
                    { normal: "Role", bold: "Front end developer" },
                    { normal: "Timeline", bold: "Juin 2021 - Sept 2022" },
                ]} />
                <Text title={`"Inspiring new ways"`} items={[
                    {subtitle: "Stack", content: "React, Javascript, PHP, HTML, SCSS, CSS, WordPress, ContentFul."},
                    {subtitle: "Epsilon", content: `Full custom WordPress theme development for our clients. Use of the ACF plugin to create modules in WordPress. HTML, SCSS and Javascript integration for the front-end.`},
                    {subtitle: "Indexel, Certivéa, Leasecom, Capza, Armée du salut...", content: ` Customers' websites maintenance and creation using our custom theme Epsilon. Follow-up and resolution of tickets.
                        Development in PHP with Wordpress. Use of Javascript, HTML and SCSS for the front-end.`},
                    {subtitle: "Cookit", content: `Full development and maintenance RGPD management solution for our customers.`}, 
                ]} />
            </>
    )
};