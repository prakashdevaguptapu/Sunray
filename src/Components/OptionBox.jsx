import { Box, Typography } from "@mui/material";

const OptionBox = ({ title, backgroundColor, children }) => (
  <Box
    sx={{
      backgroundColor: backgroundColor,
      padding: 4,
      borderRadius: 5,
      minWidth: "280px",
      flexShrink: 0,
    }}
  >
    <Typography variant="h6" align="left" sx={{ mb: 2, fontWeight: "bold" }}>
      {title}
    </Typography>
    {children}
  </Box>
);

export default OptionBox;
