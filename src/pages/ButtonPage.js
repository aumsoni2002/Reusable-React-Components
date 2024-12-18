import Button from "../components/Button";
import { GoBell} from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      {/* props: primary={true} is same as just sending primary, because boolean "true" can be send without writing it.  */}
      <Button rounded primary outline>
        <GoBell />
        primary
      </Button>
      <Button secondary outline>
        <GoBell />
        secondary
      </Button>
      <Button warning>
        <GoBell />
        warning
      </Button>
      <Button success rounded>
        <GoBell />
        Click Me
      </Button>
    </div>
  );
}

export default ButtonPage;
