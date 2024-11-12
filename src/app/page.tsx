import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";
import SubTitle from "@/components/atoms/Subtitle";
import Caption from "@/components/atoms/Caption";
import Buttons from "@/components/atoms/Buttons";
import BigTitle from "@/components/atoms/BigTitle";
import LinkArrow from "@/components/atoms/LinkArrow";
import Divider from "@/components/atoms/Divider";

const Landing = () => {
  return (
    <>
      <Title>Landing page</Title>
      <SubTitle>Subtitle content</SubTitle>
      <Text>Text landing page</Text>
      <Caption>Text caption</Caption>
      <Buttons colors={"blue"} filling={true} link={"/"}>
        Envoyer
      </Buttons>
      <br />
      <br />
      <Buttons colors={"blue"} filling={false} link={"/"}>
        Envoyer
      </Buttons>
      <br />
      <br />
      <BigTitle>Front-end developer</BigTitle>
      <br />
      <br />
      <LinkArrow link={"/test"} colors={"white"}>
        Learn more
      </LinkArrow>
      <br />
      <br />
      <Divider colors={"blue"} />
    </>
  );
};

export default Landing;
