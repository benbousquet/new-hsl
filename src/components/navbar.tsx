import logo from "@/assets/img/heatsync-labs-logo__white.png";
import {
  faFlickr,
  faSlack,
  faSquareFacebook,
  faSquareGithub,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState<Boolean>(false);

  function SocialLinks() {
    return (
      <div>
        <button
          onClick={() => {
            window.open("https://www.facebook.com/HeatSyncLabs/");
          }}
          className="btn btn-square btn-ghost text-primary"
        >
          <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
        </button>
        <button
          onClick={() => {
            window.open("http://bit.ly/hslslack");
          }}
          className="btn btn-square btn-ghost text-primary"
        >
          <FontAwesomeIcon icon={faSlack} size="2x" />
        </button>
        <button
          onClick={() => {
            window.open("https://www.twitter.com/heatsynclabs");
          }}
          className="btn btn-square btn-ghost text-primary"
        >
          <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
        </button>
        <button
          onClick={() => {
            window.open("https://www.github.com/heatsynclabs");
          }}
          className="btn btn-square btn-ghost text-primary"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </button>
        <button
          onClick={() => {
            window.open("https://www.flickr.com/photos/hslphotosync/");
          }}
          className="btn btn-square btn-ghost text-primary"
        >
          <FontAwesomeIcon icon={faFlickr} size="2x" />
        </button>
      </div>
    );
  }

  function Dropdown() {
    return (
      <div className="lg:hidden absolute w-full max-h-full">
        <ul className="menu bg-zinc-900 [&>li]:text-white [&>li,ul]:inline">
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li className="text-center">
            <a href="https://members.heatsynclabs.org/">Membership</a>
          </li>
          <li>
            <a href="https://wiki.heatsynclabs.org/wiki/Main_Page">Wiki</a>
          </li>
          <li>
            <a href="https://groups.google.com/forum/?fromgroups#!forum/heatsynclabs">
              Discussion Group
            </a>
          </li>
          <li>
            <div className="flex flex-row"><SocialLinks /></div>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-black w-full border-t-4 border-primary">
      <div className="navbar bg-black max-w-7xl mx-auto">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} className="h-14"></img>
          </Link>
        </div>
        <button
          onClick={() => {
            setOpen((val) => !val);
          }}
          className="btn btn-square btn-ghost text-primary lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 [&>li]:text-white">
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <a href="https://members.heatsynclabs.org/">Membership</a>
            </li>
            <li>
              <a href="https://wiki.heatsynclabs.org/wiki/Main_Page">Wiki</a>
            </li>
            <li>
              <a href="https://groups.google.com/forum/?fromgroups#!forum/heatsynclabs">
                Discussion Group
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
      {/* mobile menu */}
      {open && (<Dropdown />)}
    </div>
  );
}
