import React from "react";
import { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { borderRight } from "@mui/system";

import { SideBar, Videos } from "./";

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
        <SideBar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5 }}>
          Copyright 2022 YT Clone
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  );
};

export default Feed;
