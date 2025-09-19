import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        🚫 Not a Real Company
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        This page is part of a{" "}
        <span className="font-semibold">demo / portfolio project</span>. All
        companies, sponsors, and logos shown are{" "}
        <span className="font-semibold">fictional or placeholders</span>. They
        do not represent real businesses, sponsorships, or endorsements.
      </p>

      <div className="bg-white shadow-md rounded-2xl p-6 max-w-md text-left text-gray-600">
        <h2 className="text-xl font-semibold mb-3">Important Notes:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>This project is for portfolio purposes only.</li>
          <li>No real bookings, payments, or sponsorships exist here.</li>
          <li>All images and brand names are placeholders or examples.</li>
          <li>If deployed publicly, it must include clear disclaimers.</li>
        </ul>
      </div>

      <Link
        to="/"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
