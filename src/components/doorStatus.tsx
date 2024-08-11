import { useEffect, useState } from "react";

export default function DoorStatus() {
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController(); // Create an instance of AbortController
    const signal = controller.signal; // Get the signal to pass to fetch

    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://members.heatsynclabs.org/space_api.json",
          { signal } // Pass the signal to the fetch call
        );
        const json = await res.json();
        setIsDoorOpen(json.open);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') { // Handle errors other than abort
          console.error("Failed to fetch door status:", error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort(); // Abort the fetch operation on component unmount
    };
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
