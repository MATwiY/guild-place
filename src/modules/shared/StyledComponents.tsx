import { Button, keyframes, styled, TextField } from "@mui/material";
import Image from "../shared/background-image.jpg";

export const StyledTextField = styled(TextField)({
  ".MuiInputBase-root": {
    width: "300px",
    backgroundColor: "#505975",
    color: "#fff",
    borderColor: "rgba(0, 0, 0, 0)",
    opacity: 0.9,

    ".MuiInputBase-input": {
      backgroundColor: "#505975",
      borderRadius: 5,
    },
  },

  ".MuiInputLabel-root": {
    color: "#A8BAF7",

    "&.Mui-focused": {
      color: "#A8BAF7",
    },
  },
}) as typeof TextField;

export const StyledButton = styled(Button)({
  "&.MuiButtonBase-root": {
    backgroundColor: " #2d3e75",
    width: "10vh",
    height: "3em",
    "&:hover": {
      backgroundColor: "#344786",
    },
  },
}) as typeof Button;

const fadeInAnimation = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const StyledBackground = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const WelcomeBackground = styled(StyledBackground)({
  animation: `${fadeInAnimation} 2.6s ease`,
  animationIterationCount: 1,
  animationFillMode: "forwards",
});

const SlideUp = keyframes`
from{
  transform: translateY(250px);
  opacity: 0;
}
to{
  transform: translateY(0px);
  opacity: 1;
}`;

export const WelcomeButtonAnimation = styled("div")({
  marginTop: "5%",
  animation: `${SlideUp} 1.5s ease`,
  animationFillMode: "backwards",
  animationDelay: "0.6s",
});

const SlideDown = keyframes`
from{
  transform: translateY(-250px);
  opacity: 0;
}
to{
  transform: translateY(0px);
  opacity: 1;
}`;

export const WelcomeTextAnimation = styled("div")({
  width: "40%",
  textAlign: "center",
  paddingTop: "17em",
  margin: "auto",
  color: "#fff",

  h1: {
    fontSize: "4em",
    boxShadow: "0px 3px #A8BAF7",
  },
  h3: {
    // paddingTop: "15em",
    fontSize: "1.5em",
  },

  animation: `${SlideDown} 1.5s ease`,
  animationFillMode: "backwards",
  animationDelay: "0.6s",
});
