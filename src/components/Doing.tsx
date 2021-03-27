import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SpotifyLogo from '../assets/images/spotify-logo.svg';
import { Activity, Presence } from "../types/lanyard";
import Progress from "./Progress";

const Doing = (
  {
    setActive,
    doing,
    currentActivity,
    ...props
  }: {
    setActive: (active: boolean) => void;
    doing?: Presence;
    currentActivity?: Activity;
    style: any;
  },
  ref: any
) => {
  const [tempState, setTempState] = useState(0);
  if (!doing || !doing?.discord_status) return null;
  const currentDate = new Date();

  // TODO: use useEffect to destroy interval on state change
  if (doing?.listening_to_spotify && doing.spotify.timestamps.end) {
    setInterval(() => {
      setTempState(tempState + 1);
    }, 1000);
  }

  return (
    <>
      {doing?.listening_to_spotify ? (
        <Container ref={ref} to={"/presence"} {...props}>
          <h5>
            Listening to Spotify <LiveDot />
          </h5>
          <>
            <ActivityRow>
              <ActivityImageContainer>
                <ActivityImage
                  src={doing.spotify.album_art_url}
                  alt={doing.spotify.album ?? doing.spotify.song ?? ""}
                />
                <ActivitySecondaryImage
                  src={SpotifyLogo}
                  alt={"Spotify logo"}
                />
              </ActivityImageContainer>

              <ActivityInfo>
                <h5>{doing.spotify.song}</h5>
                <p>by {doing.spotify.artist}</p>
              </ActivityInfo>
            </ActivityRow>
            {doing.spotify.timestamps.end ? (
              <Progress percentage={100 * (currentDate.getTime() - doing.spotify.timestamps.start) / (doing.spotify.timestamps.end - doing.spotify.timestamps.start)} />
            ) : null}
          </>
        </Container>
      ) : null}
      {currentActivity ? (
        <Container to={"/presence"} {...props}>
          <h5>Doing something</h5>
          <ActivityRow>
            {currentActivity.assets ? (
              <ActivityImageContainer>
                <ActivityImage
                  src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.large_image}.png`}
                  alt={currentActivity.assets.large_text ?? ""}
                />
                <ActivitySecondaryImage
                  src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.small_image}.png`}
                  alt={currentActivity.assets.small_text ?? ""}
                />
              </ActivityImageContainer>
            ) : null}
            <ActivityInfo>
              <h5>{currentActivity.name}</h5>
              {currentActivity.details ? (
                <p>{currentActivity.details}</p>
              ) : null}
              {currentActivity.state ? <p>{currentActivity.state}</p> : null}
            </ActivityInfo>
          </ActivityRow>
        </Container>
      ) : null}
    </>
  );
};

const Container = styled(motion(Link))`
  width: calc(100% + 2rem);
  margin-left: -2rem;
  background-color: transparent;
  color: #ccc;
  border-top: 1px solid #101010;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #101010;
    color: #fff;
  }

  h5 {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0%;
  }
`;

const LiveDot = styled.div`
  display: inline-block;
  margin-left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff5252;
  animation: ${fadeInOut} 2s ease-in-out infinite;
`;

const ActivityRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ActivityImageContainer = styled.div`
  position: relative;
  height: 50px;
`;

const ActivityImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`;

const ActivitySecondaryImage = styled.img`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  border: 2px solid #000;
`;

const ActivityInfo = styled.div`
  margin-left: 1rem;

  h5 {
    color: #fff;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

export default forwardRef(Doing);
