import React from "react";
import { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { borderRight } from "@mui/system";
import Sidebar from "./SideBar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5 }}>
          Copyright 2022 YT Clone
        </Typography>
      </Box>

    
    </Stack>
  );
};

export default Feed;
