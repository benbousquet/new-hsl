export default function FSCalender() {
  return (
    // iframe doesnt like height percents :(
    <div className="h-[938px]">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=heatsynclabs.org_p9rcn09d64q56m7rg07jptmrqc%40group.calendar.google.com&ctz=America%2FPhoenix"
        height="100%"
        width="100%"
        title="calendar entries"
      ></iframe>
    </div>
  );
}
