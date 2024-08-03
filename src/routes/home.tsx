import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

export default function Home() {
    const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://members.heatsynclabs.org/space_api.json");
            const json = await res.json()
            setIsDoorOpen(json.open)
        }
        fetchData();
    })

    return (
        <div className="lg:max-w-6xl m-auto space-y-8 mb-6">
            {/* top information section */}
            <div className="flex flex-col lg:flex-row mt-20">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-3xl font-bold">We are:</h1>
                    <ul className="list-disc list-outside space-y-2 pl-4 mr-4">
                        <li>
                            <p>A place where you can make things. We call it a hackerspace. We are a grassroots co-op of volunteers— No staff.</p>
                        </li>
                        <li>
                            <p>
                                Located at:<br />
                                <a href="https://goo.gl/maps/5oo83" className="link-hover text-blue-500">
                                    108 West Main St.<br />
                                    Mesa, AZ 85201<br />
                                    Downtown Mesa<br />
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>Open for everyone during public hours and events. Check our <a href="https://groups.google.com/forum/?fromgroups#!forum/heatsynclabs" className="link-hover text-blue-500">discussion group</a> for details and updates.</p>
                        </li>
                        <li>
                            <p>
                                <span className="font-bold">Hosting free public hours</span><br />
                                Monday, Tuesday, Wednesday<br />
                                7pm - 10pm<br />
                                Saturday noon - 5pm<br />
                            </p>
                        </li>
                        <li>
                            <span className="font-bold">Our doors are currently:</span> <span className={isDoorOpen ? "text-success" : "text-error"}>{isDoorOpen ? "open, come on down!" : "closed, check the calendar!"}</span>
                        </li>
                    </ul>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">Support Us</h1>
                        <button className="btn btn-primary rounded-3xl">Donate</button>
                    </div>
                </div>
                <img src="https://farm9.staticflickr.com/8086/27934144103_d8e7d2d078_b.jpg" className="max-w-2xl" />
            </div>

            <div className="divider"></div>

            {/* Calender */}
            <div className="max-w-7xl mx-auto space-y-4">
                <h1 className="text-3xl font-bold">Calender</h1>
                <iframe src="https://calendar.google.com/calendar/embed?src=heatsynclabs.org_p9rcn09d64q56m7rg07jptmrqc%40group.calendar.google.com&ctz=America%2FPhoenix" width="100%" height="640" title="calendar entries"></iframe>
            </div>

            {/* Classes */}
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-3xl font-bold">Interested in Classes?</h1>
                    <p><a href="https://www.heatsynclabs.org/register" className="link link-hover text-blue-500">Register</a> to get notifications on classes you are interested in.</p>
                    <p>Check out <a href="https://www.heatsynclabs.org/classes" className="link link-hover text-blue-500">all our classes</a> to see what's available.</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-row items-center space-x-4">
                        <FontAwesomeIcon className="text-primary" size="xl" icon={faUsers} />
                        <a href="https://groups.google.com/forum/?fromgroups#!forum/heatsynclabs" className="text-3xl font-bold link underline">Discussion Group</a>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                        <FontAwesomeIcon className="text-primary" size="xl" icon={faSlack} />
                        <a href="http://bit.ly/hslslack" className="text-3xl font-bold link underline">Slack Channel</a>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            {/* Footer */}
            <div className="flex flex-row space-x-6">
                <div className="flex-1 flex flex-col space-y-4">
                    <h1 className="text-3xl font-bold">Get Involved</h1>
                    <p>HeatSync Labs is a community-driven 501(c)3 non-profit shop and workspace where engineers, artists, students, and hobbyists come to make prototypes, art, and other creative projects.</p>
                    <p>It is a workshop for mad scientists, artists and anyone creating or making! We make tools, resources, and skills available to you.</p>
                    <button onClick={() => {
                        window.open("https://members.heatsynclabs.org/");
                    }} className="btn btn-primary w-fit">Members' Site</button>
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                    <h1 className="text-3xl font-bold">Membership</h1>
                    <p>You don't need to be a member to come and make stuff, but we are member-supported and member-driven so your support is appreciated! We encourage you to bring your projects during public hours so you get a feel for the place first.</p>
                    <p>To learn more about how we work behind the scenes, check out the <a href="https://members.heatsynclabs.org/" className="link link-hover text-blue-500">Members Website.</a></p>
                    <button onClick={() => {
                        window.open("https://members.heatsynclabs.org/users/sign_up");
                    }} className="btn btn-primary w-fit">Become a Supporting Member!</button>
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                    <h1 className="text-3xl font-bold">Live</h1>
                    <img src="https://live.heatsynclabs.org/snapshot.php?camera=1" alt="live webcam"></img>
                    <button onClick={() => {
                        window.open("https://www.heatsynclabs.org/live");
                    }} className="btn btn-primary w-fit">Watch Live</button>
                </div>
            </div>
        </div>
    )
}