import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setChannelVideos(data?.items)
    );
  }, [id]);

  console.log(channelDetail, channelVideos);

  return <Box minHeight="95vh">
    <Box>
      <div style={{background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)", zIndex: '10', height: '300px'}}/>
      <ChannelCard channel={channelDetail} marginTop="-150px"/>
    </Box>
    <Box display="flex" p="2">
      <Box sx={{mr: {sm: '176px'}}}/>
      <Videos videos={channelVideos}/>
    </Box>
  </Box>
};

export default ChannelDetail;
