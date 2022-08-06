import { Checkbox, styled } from "@mui/material";

import iconCheck from "../../../assets/icon-check.svg";

const UncheckedIcon = styled("div")({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  border: "2px solid hsl(237, 14%, 26%)",
  transition: "all 0.25s",
  display: "flex",
  justifyContent: " center",
  alignItems: "center",
});

const CheckedIcon = styled("div")({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  border: "2px solid hsl(237, 14%, 26%)",
  transition: "all 0.25s",
  display: "flex",
  justifyContent: " center",
  alignItems: "center",
  backgroundColor: "pink",
  background: "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)",
});

const CustomCheckbox = ({ handleOnClick, checked }) => {
  return (
    <>
      <Checkbox
        onClick={handleOnClick}
        icon={<UncheckedIcon />}
        checked={checked}
        checkedIcon={
          <CheckedIcon>
            <img src={iconCheck} />
          </CheckedIcon>
        }
      />
    </>
  );
};

export default CustomCheckbox;
