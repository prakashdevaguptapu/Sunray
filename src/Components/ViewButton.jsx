import { Button, Typography } from "@mui/material";

const ViewButton = ({
  buttonText,
  backgroundColor,
  borderColor,
  textColor,
  mt,
}) => (
  <Button
    variant="contained"
    sx={{
      mt: mt,
      borderRadius: 10,
      border: 1,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
    }}
    color="white"
  >
    <Typography
      variant="subtitle1"
      color={textColor}
      fontWeight="bold"
      sx={{ textTransform: "none" }}
    >
      {buttonText}
    </Typography>
  </Button>
);

export default ViewButton;
