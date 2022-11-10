import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Mobile apis</h1>
      <ul>
        <li>
          <Link className="link" href="/battery">
            Battery api
          </Link>
        </li>
        <li>
          <Link className="link" href="/screen">
            Screen Orientation api
          </Link>
        </li>
        <li>
          <Link className="link" href="/vibrate">
            Vibrate api
          </Link>
        </li>
        <li>
          <Link className="link" href="/web-share">
            Web Share api
          </Link>
        </li>
        <li>
          <Link className="link" href="/notification">
            Notification api
          </Link>
        </li>
        <li>
          <Link className="link" href="/speech">
            Speech api
          </Link>
        </li>
      </ul>
    </div>
  );
}
