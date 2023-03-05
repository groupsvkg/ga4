import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Analytics</title>
        <meta name="description" content="Google Analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-red-800 hover:text-green-800">
          Hello Google Analytics
        </h1>
      </main>
    </>
  );
}
