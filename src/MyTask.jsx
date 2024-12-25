import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import OptionBox from "./Components/OptionBox";
import ActionButton from "./Components/ActionButton";
import ViewButton from "./Components/ViewButton";

const MyTask = () => {
  const [status, setStatus] = useState("Partially Paid");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const statusOptions = [
    { label: "Paid", value: "Paid" },
    { label: "UnPaid", value: "UnPaid" },
    { label: "Partially Paid", value: "Partially Paid" },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      {/* Status Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          border: 1,
          borderColor: "#89a6a5",
          width: "15%",
          padding: 2,
          borderRadius: 10,
          background: "#c6e9f3",
          ml: 4,
          mb: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Status?
          </Typography>
          <Select
            onChange={handleChange}
            value={status}
            size="small"
            sx={{
              width: "180px",
              borderRadius: 20,
              backgroundColor: "white",
              color: "orange",
              fontWeight: "bold",
            }}
          >
            {statusOptions.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      {/* Steps */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          flexDirection: "row",
          width: "70%",
          ml: 20,
        }}
      >
        {/* Step 1 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E2EAF4",
            borderRadius: "50%",
            width: 40,
            height: 40,
          }}
        >
          <Box sx={{ position: "absolute", top: "-30px" }}>
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Secure
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: "black" }}>
            1
          </Typography>
        </Box>

        <Divider
          orientation="horizontal"
          sx={{
            width: "35%",
            height: "6px",
            backgroundColor: "lightgreen",
            margin: "10px 0",
          }}
        />

        {/* Step 2 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E2EAF4",
            borderRadius: "50%",
            width: 40,
            height: 40,
          }}
        >
          <Box sx={{ position: "absolute", top: "-30px" }}>
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Lien
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: "black" }}>
            2
          </Typography>
        </Box>

        <Box
          sx={{
            width: "45%",
            borderBottom: "3px dotted #3de220",
            margin: "10px 0",
          }}
        />

        {/* Step 3 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E2EAF4",
            borderRadius: "50%",
            width: 40,
            height: 40,
          }}
        >
          <Box sx={{ position: "absolute", top: "-30px" }}>
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Get Paid
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: "black" }}>
            3
          </Typography>
        </Box>
      </Box>
      {status === "Partially Paid" && (
        // Cards Containers
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            gap: 5,
            padding: 4,
            "&::-webkit-scrollbar": {
              height: "8px",
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#3de220",
              borderRadius: "10px",
              border: "2px solid #89a6a5",
              width: "8px",
            },
          }}
        >
          {/* 1 option */}
          <OptionBox title="1 option" backgroundColor="#c5e1e4">
            <Box
              sx={{
                display: "flex",
                flexDirection: { sm: "row" },
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  minHeight: "320px",
                  maxWidth: "250px",
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{ color: "lightgreen", fontSize: 30, mb: 2 }}
                    />
                    <Typography variant="subtitle1">
                      Preliminary Notice
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                      Notice to Owner / Notice to Contractor
                    </Typography>
                    <Typography>
                      Work Order # <br />
                      <span style={{ fontWeight: "bold" }}>4483821</span>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <ViewButton
                      buttonText="View Mailed"
                      backgroundColor="white"
                      borderColor="lightgreen"
                      textColor="green"
                      mt={10}
                    />
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: 1,
                  minHeight: "320px",
                  maxWidth: "250px",
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "2px solid orange",
                        borderRadius: "50%",
                        width: 2,
                        height: 2,
                        padding: 2,
                        mb: 1,
                      }}
                    >
                      <InsertDriveFileIcon
                        sx={{ fontSize: 22, color: "green" }}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ transform: "none", backgroundColor: "#90e27f" }}
                    >
                      Optional
                    </Button>
                  </Box>
                  <Typography variant="subtitle1">NTO</Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    Demand Letter
                  </Typography>
                  <Typography sx={{ mt: 6 }}>
                    Work Order # <br />
                    <span style={{ fontWeight: "bold" }}>4483821</span>
                  </Typography>
                  <ViewButton
                    buttonText="View Processing"
                    backgroundColor="white"
                    borderColor="lightblue"
                    textColor="orange"
                    mt={10}
                  />
                </CardContent>
              </Card>
            </Box>
          </OptionBox>

          {/* 2 option */}
          <OptionBox title="2 option" backgroundColor="papayawhip">
            <Box sx={{ display: "flex", gap: 2 }}>
              <Card
                sx={{
                  flex: 1,
                  minHeight: "320px",
                  maxWidth: "240px",
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <CheckCircleIcon
                    sx={{ color: "lightgreen", fontSize: 30, mb: 1 }}
                  />
                  <Typography variant="subtitle1" sx={{ transform: "none" }}>
                    Lien Request
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    Claim of Mechanics Lien
                  </Typography>
                  <Typography sx={{ mt: 3 }}>
                    Work Order # <br />
                    <span style={{ fontWeight: "bold" }}>4483821</span>
                  </Typography>
                  <ViewButton
                    buttonText="View Recorded"
                    backgroundColor="white"
                    borderColor="lightblue"
                    textColor="#3de220"
                    mt={10}
                  />
                </CardContent>
              </Card>
            </Box>
          </OptionBox>

          {/* 3 option */}
          <OptionBox title="3 option" backgroundColor="#a8dbea">
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Card
                sx={{
                  flex: 1,
                  minHeight: "320px",
                  maxWidth: "250px",
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "lightblue",
                        borderRadius: "50%",
                        width: 2,
                        height: 2,
                        padding: 2,
                        mb: 0,
                      }}
                    >
                      <InsertDriveFileIcon
                        sx={{ fontSize: 22, color: "green" }}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        transform: "none",
                        backgroundColor: "#f3c282",
                      }}
                    >
                      Recommended
                    </Button>
                  </Box>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    Partial Satisfaction
                  </Typography>

                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    Partial Satisfaction
                  </Typography>
                  <Typography sx={{ mt: 7, mb: 3 }}>No Deadline</Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    component="a"
                    href="#"
                  >
                    Explain/Updated Deadline
                  </Typography>
                  <ActionButton buttonText="Submit" backgroundColor="skyblue" />
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: 1,
                  minHeight: "320px",
                  maxWidth: "250px",
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "lightblue",
                      borderRadius: "50%",
                      width: 2,
                      height: 2,
                      padding: 2,
                      mb: 0,
                    }}
                  >
                    <InsertDriveFileIcon
                      sx={{ fontSize: 22, color: "green" }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 1, mb: 3 }}
                  >
                    Foreclosure Deadline
                  </Typography>
                  <Typography sx={{ mt: 8, mb: 3 }}>
                    <span style={{ fontWeight: "bold", color: "green" }}>
                      Submit within <strong>80 Days</strong>
                    </span>
                    <br />
                    by <strong>11/28/2023</strong>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    component="a"
                    href="#"
                  >
                    Explain/Updated Deadline
                  </Typography>
                  <ActionButton
                    buttonText="Foreclose"
                    backgroundColor="skyblue"
                  />
                </CardContent>
              </Card>
              <Card
                sx={{
                  flex: 1,
                  minHeight: "320px",
                  maxWidth: "250px",
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "lightblue",
                      borderRadius: "50%",
                      width: 2,
                      height: 2,
                      padding: 2,
                      mb: 0,
                    }}
                  >
                    <AttachMoneyIcon sx={{ fontSize: 25, color: "green" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 1, mb: 5 }}
                  >
                    Collection
                  </Typography>
                  <Typography sx={{ mt: 8, mb: 3 }}>
                    We can assist with your collection needs.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    component="a"
                    href="#"
                  >
                    Explain/Updated Deadline
                  </Typography>
                  <ActionButton buttonText="Start" backgroundColor="skyblue" />
                </CardContent>
              </Card>
            </Box>
          </OptionBox>
        </Box>
      )}
      {status === "Paid" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            gap: 5,
            padding: 4,
          }}
        >
          {/* 1st Option */}
          <Box
            sx={{
              backgroundColor: "#c5e1e4",
              padding: 4,
              borderRadius: 5,
              minWidth: "280px",
              display: "inline-block",
              flexShrink: 0,
            }}
          >
            <Typography
              variant="h6"
              align="left"
              sx={{ mb: 2, fontWeight: "bold" }}
              gutterBottom
            >
              1 option
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Card
                sx={{
                  flex: 1,
                  minHeight: "320px",
                  maxWidth: "250px",
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{ color: "lightgreen", fontSize: 30, mb: 2 }}
                    />
                    <Typography variant="subtitle1">
                      Preliminary Notice
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                      Notice to Owner / Notice to Contractor
                    </Typography>
                    <Typography>
                      Work Order # <br />
                      <span style={{ fontWeight: "bold" }}>4483821</span>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                      variant="contained"
                      sx={{
                        mt: 10,
                        borderRadius: 10,
                        border: 1,
                        borderColor: "lightgreen",
                      }}
                      color="white"
                    >
                      <Typography
                        variant="subtitle1"
                        color="green"
                        fontWeight="bold"
                        sx={{ textTransform: "none" }}
                      >
                        View Mailed
                      </Typography>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* 2nd Option */}
          <Box
            sx={{
              backgroundColor: "papayawhip",
              padding: 4,
              borderRadius: 5,
              minWidth: "280px",
              display: "inline-block",
              flexShrink: 0,
            }}
          >
            <Typography
              variant="h6"
              align="left"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              2 option
            </Typography>
            <Card
              sx={{
                flex: 1,
                minHeight: "320px",
                maxWidth: "240px",
                borderRadius: 3,
              }}
            >
              <CardContent>
                <CheckCircleIcon
                  sx={{ color: "lightgreen", fontSize: 30, mb: 1 }}
                />
                <Typography variant="subtitle1">Lien Request</Typography>
                <Typography variant="h6" fontWeight="bold">
                  Claim of Mechanics Lien
                </Typography>
                <Typography sx={{ mt: 3 }}>
                  Work Order # <br />
                  <span style={{ fontWeight: "bold" }}>4483821</span>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 9.5,
                    mb: 0,
                    borderRadius: 10,
                    border: 1,
                    borderColor: "lightgreen",
                  }}
                  color="white"
                >
                  <Typography
                    variant="subtitle1"
                    color="green"
                    fontWeight="bold"
                    sx={{ textTransform: "none" }}
                  >
                    View Recorded
                  </Typography>
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MyTask;
