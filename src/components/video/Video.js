import React, { useEffect, useState } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router";

const Video = ({ video }) => {
  const history = useHistory();
  const {
    id,
    snippet: {
      publishedAt,
      channelId,
      channelTitle,
      title,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  //checking for videoId
  const _videoId = id?.videoId || contentDetails?.videoId || id;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: _videoId,
        },
      });
      /* console.log(items); */
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [_videoId]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <div className="video" onClick={handleVideoClick}>
      <div className="video_top">
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video_duration">{_duration}</span>
      </div>
      <div className="video_title"> {title} </div>
      <div className="video_details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
        </span>
        <span> {moment(publishedAt).fromNow()} </span>
      </div>
      <div className="video_channel">
        <LazyLoadImage src={channelIcon?.url} effect="blur" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;

/* 
1. we dont have a channel icon
so we make use of useEffect to create it.

2. when we are selecting  a category, 
the items display an id which is an object
containing videoId, so we provide id with videoId.
*/
