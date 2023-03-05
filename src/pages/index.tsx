import Head from 'next/head';
import { event } from 'nextjs-google-analytics';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState(
    {} as { category?: string; label?: string }
  );

  const handleInput = (e: any) => {
    setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    event('submit_form', formData);

    setFormData({});
  };
  return (
    <>
      <Head>
        <title>Google Analytics</title>
        <meta name="description" content="Google Analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex justify-center items-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="text-xl text-green-800 font-bold mb-4">
              Trigger Custom Event
            </h1>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-500 text-sm font-bold mb-2"
              >
                Category
              </label>
              <input
                onChange={handleInput}
                value={formData.category || ''}
                name="category"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="label"
                className="block text-gray-500 text-sm font-bold mb-2"
              >
                Label
              </label>
              <input
                onChange={handleInput}
                value={formData.label || ''}
                name="label"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
