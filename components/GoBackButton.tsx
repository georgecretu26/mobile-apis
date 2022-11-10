import Link from "next/link";

const GoBackButton = () => {
  return (
    <Link className="link" href="/">
      &larr; Go Home
    </Link>
  );
};

export default GoBackButton;
