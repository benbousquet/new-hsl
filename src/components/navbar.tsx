import logo from "@/assets/img/heatsync-labs-logo__white.png"
import { faFlickr, faSlack, faSquareFacebook, faSquareGithub, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  return (
    <div className="bg-black w-full border-t-4 border-primary">
      <div className="navbar bg-black max-w-7xl mx-auto">
        <div className="flex-1">
          <img src={logo} className="h-14"></img>
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 [&>li]:text-white">
            <li><a>Classes</a></li>
            <li><a>Membership</a></li>
            <li><a>Wiki</a></li>
            <li><a>Discussion Group</a></li>
          </ul>
          <button className="btn btn-square btn-ghost text-primary">
            <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
          </button>
          <button className="btn btn-square btn-ghost text-primary">
            <FontAwesomeIcon icon={faSlack} size="2x" />
          </button>
          <button className="btn btn-square btn-ghost text-primary">
            <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
          </button>
          <button className="btn btn-square btn-ghost text-primary">
            <FontAwesomeIcon icon={faSquareGithub} size="2x" />
          </button>
          <button className="btn btn-square btn-ghost text-primary">
            <FontAwesomeIcon icon={faFlickr} size="2x" />
          </button>
        </div>
      </div>
    </div>

  );
}
