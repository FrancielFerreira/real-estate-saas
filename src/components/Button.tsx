import Link from 'next/link';

type ButtonProps = {
  href: string;
  text: string;
  target?: string;
  className?: string;
};

export default function Button({ href, text, target }: ButtonProps) {
  return (
    <Link
      className="bg-blue-900 text-white py-2 px-6 rounded hover:bg-blue-600 hover:scale-95 transition duration-500"
      href={href}
      target={target}
    >
      {text}
    </Link>
  );
}
