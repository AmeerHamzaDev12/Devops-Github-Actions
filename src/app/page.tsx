import Image from "next/image";
import { getAssetPath } from "./utils/assetPath";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>
      <p className="mt-4 text-lg">
        This is a simple example of a Next.js app deployed on GitHub Pages.
      </p>
      <Image
        src={getAssetPath("/window.svg")}
        alt="Hero Image"
        width={500}
        height={300}
        className="mt-8 rounded-lg"
      />
    </main>
  );
}
