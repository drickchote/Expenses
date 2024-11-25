import GenericInput from "../../../components/inputs/GenericInput";
import MoneyInput from "../../../components/inputs/MoneyInput";
import SelectInput from "../../../components/inputs/SelectInput";
import { InputProps } from "../../../components/inputs/types";

interface CardInputProps {
  type: "text" | "money" | "select";
}

export const createInput = (props: CardInputProps & InputProps) => {
  switch (props.type) {
    case "text":
      return <GenericInput {...props} />;
    case "money":
      return <MoneyInput {...props} />;
    case "select":
      return <SelectInput {...props} />;
  }
};
