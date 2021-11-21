import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Jumbotron from "../components/LandingSection/Jumbotron";
import AboutUs from "../components/LandingSection/AboutUs";
import Testimoni from "../components/LandingSection/Testimoni";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SemuaSama</title>
      </Head>

      <main>
        <Jumbotron />
        <AboutUs />
        <Testimoni />
      </main>
    </Layout>
  );
}
