import BigTitle from "@/components/atoms/BigTitle";
import Buttons from "@/components/atoms/Buttons";
import "../styles/notFound.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <BigTitle colors={"red"}>Page introuvalbe...</BigTitle>
      <Buttons filling={false} link={"/home"} colors={"yellow"}>
        Page d'accueil
      </Buttons>
    </div>
  );
};

export default NotFound;
