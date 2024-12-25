import { Button } from "@mui/material";

const ActionButton = ({ buttonText, backgroundColor }) => (
  <Button
    variant="contained"
    sx={{
      mt: 7,
      backgroundColor,
      borderRadius: 2,
      ml: 2,
    }}
  >
    {buttonText}
  </Button>
);

export default ActionButton;
