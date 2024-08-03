import { useEffect, useState } from "react";

export default function DoorStatus() {
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(
        "https://members.heatsynclabs.org/space_api.json"
      );
      const json = await res.json();
      setIsDoorOpen(json.open);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return "Loading...";
  }
  return (
    <span className={isDoorOpen ? "text-success" : "text-error"}>
      {isDoorOpen ? " open, come on down!" : " closed, check the calendar!"}
    </span>
  );
}
