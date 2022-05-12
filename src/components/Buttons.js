import { styled } from "@mui/material/styles";
import { colors } from "../constants/_colors";
import Button from "@mui/material/Button";

export const SubmitButton = styled(Button)({
  position: "relative",
  top: "0",
  width: "100%",
  background: colors.primaryAccentColor,
  fontWeight: "600",
  height: "42px",
  color: "#ffffff",
  borderRadius: "4px",
  transition: "top 250ms ease",
  "&:hover": {
    backgroundColor: colors.primaryAccentColor,
    top: "-4px",
  },
});
