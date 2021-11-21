import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../../components/Layout/LayoutDashboard";
import SearchJob from "../../components/SearchJob/SearchJob";
import SideBar from "../../components/SideBar/SideBar";

export default function Dashboard() {
  return (
    <Flex>
      <SideBar />
      <Layout>
        <Head>
          <title>SemuaSama | Dashboard</title>
        </Head>

        <main>
          <SearchJob />
        </main>
      </Layout>
    </Flex>
  );
}
