import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-2xl mx-auto  ">
      <ul className=" flex gap-5 items-center justify-center py-6">
        <Link href={'/'}>
          {" "}
          <li className="cursor-pointer">Home</li>
        </Link> 
        <Link href={'/OurCourses'}>
          {" "} 
          <li className="cursor-pointer">Our Courses</li>
        </Link>
        <Link href='/Contact'> 
          <li className="cursor-pointer">Contact us</li>
        </Link>
        <Link href='/SignIn'>
          <li className="cursor-pointer">Login </li>
        </Link>
        <Link href='/dashboard'>
          <li className="cursor-pointer">Dashboard </li>
        </Link>
      </ul>
    </div>
  );
}
