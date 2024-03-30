import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen w-full flex items-center flex-col justify-center">
        <h1 className="text-8xl font-bold text-white">Welcome to QuizForge</h1>
        <div className="flex items-center gap-4 p-8">
        <Link href={'http://ec2-3-210-110-55.compute-1.amazonaws.com/login'} className=" border text-white px-8 py-1 rounded-md">
        Login
        </Link>
        <Link href={'http://ec2-3-210-110-55.compute-1.amazonaws.com/signup'} className=" border text-white px-8 py-1 rounded-md">
        Signup
        </Link>
        </div>
    </div>
  );
}
