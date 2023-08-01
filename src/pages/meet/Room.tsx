import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import Leftbar from "../Dashboard/Leftbar";


const Room = () => {
  const { roomID } = useParams<any>();
  const meeting = async (element : any) => {
    const appID = 1371294025;
    const serverSecret = "c897013c22dc1d4473c4d7787fbbc972";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "andrei"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <>
  <div ref={meeting} ></div>;
  </>
};

export default Room;
