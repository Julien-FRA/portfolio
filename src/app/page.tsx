import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";
import SubTitle from "@/components/atoms/Subtitle";
import Caption from "@/components/atoms/Caption";
import Buttons from "@/components/atoms/Buttons";

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
    </>
  );
};

export default Landing;
