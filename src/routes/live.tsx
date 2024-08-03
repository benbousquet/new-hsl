import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Live() {
  const [cameraUrls, setCameraUrls] = useState<string[]>(["", "", "", ""]);

  useEffect(() => {
    updateCameraUrls();
    const checkCameraFeed = setInterval(() => {
      updateCameraUrls();
    }, 10000);
    return () => clearInterval(checkCameraFeed)
  }, []);

  function updateCameraUrls () {
      const newUrls: string[] = [];
      cameraUrls.forEach((_url, idx) => {
        const newUrl = `https://live.heatsynclabs.org/snapshot.php?camera=${
          idx + 1
        }&time=${Date.now()}`;
        newUrls.push(newUrl);
      });
      setCameraUrls(newUrls);
  }

  return (
    <div className="flex flex-row justify-center my-5">
      <div className="max-w-4xl space-y-6 lg:border-2 border-primary rounded-2xl p-8">
        <h1 className="text-3xl font-bold">HeatSync Labs Live Webcams</h1>
        <div className="divider"></div>
        <div>
          <p>See if there are people in the lab!</p>
          <p>
            The camera views refresh at least every 10 seconds, though you may
            not be able to tell if nothing's moving.
          </p>
          <p>
            If the cameras are broken, please email operations at heatsynclabs
            dot org and mention "web cams" in the subject line.
          </p>
        </div>

        <p>
          Nobody here? Check the{" "}
          <a
            className="link link-hover text-blue-500"
            href="http://twitter.com/heatsyncstatus"
          >
            HeatSyncStatus
          </a>{" "}
          feed. See when the next event is scheduled at the{" "}
          <Link className="link link-hover text-blue-500" to="/">
            HeatSync Website
          </Link>
          .
        </p>
        <div className="flex flex-row flex-wrap">
          {cameraUrls.map((url) => <img src={url} className="w-1/2 p-2" />)}
        </div>
      </div>
    </div>
  );
}
