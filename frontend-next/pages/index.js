import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </li>
    </ul>
  )
}
