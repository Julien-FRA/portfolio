import Card from "@/components/molecules/Card";

const Landing = () => {
  return (
    <>
      <Card
        subTitle={"Goodmorning, Night City!"}
        text={
          "Yesterday’s body count lottery rounded out to a solid n’ sturdy thirty! "
        }
        cardLink={{
          link: "/test",
          text: "Learn more",
        }}
        colors={"white"}
        textColors={"white"}
        fill={false}
        size={{ width: "30", height: "400" }}
        corner={"topRight"}
      />
    </>
  );
};

export default Landing;
