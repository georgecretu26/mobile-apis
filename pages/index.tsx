import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Mobile apis</h1>
      <ul>
        <li>
          <Link href="/battery">Battery api</Link>
        </li>
        <li>
          <Link href="/screen">Screen Orientation api</Link>
        </li>
        <li>
          <Link href="/vibrate">Vibrate api</Link>
        </li>
        <li>
          <Link href="/web-share">Web Share api</Link>
        </li>
        <li>
          <Link href="/notification">Notification api</Link>
        </li>
      </ul>
    </div>
  );
}
