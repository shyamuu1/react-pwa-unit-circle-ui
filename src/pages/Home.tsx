import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Practice the Unit Circle</h2>
      <p className="text-gray-600 mb-6">
        Train recognizing angles, radians, sine and cosine values with an offline-friendly PWA.
      </p>
      <div className="space-y-3">
        <Link
          to="/game"
          className="inline-block bg-teal-500 text-white px-5 py-3 rounded-md shadow"
        >
          Start Training
        </Link>
      </div>
    </div>
    )
}

