import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="mb-4 text-4xl font-bold text-red-600">
        🚫 Not a Real Company
      </h1>
      <p className="mb-6 max-w-xl text-lg text-gray-700">
        This page is part of a{" "}
        <span className="font-semibold">demo / portfolio project</span>. All
        companies, sponsors, and logos shown are{" "}
        <span className="font-semibold">fictional or placeholders</span>. They
        do not represent real businesses, sponsorships, or endorsements.
      </p>

      <div className="max-w-md rounded-2xl bg-white p-6 text-left text-gray-600 shadow-md">
        <h2 className="mb-3 text-xl font-semibold">Important Notes:</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>This project is for portfolio purposes only.</li>
          <li>No real bookings, payments, or sponsorships exist here.</li>
          <li>All images and brand names are placeholders or examples.</li>
          <li>If deployed publicly, it must include clear disclaimers.</li>
        </ul>
      </div>

      <Link
        to="/"
        className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow transition hover:bg-blue-700"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
