import Header from "@/components/Header";
import Head from "next/head";

function Search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      < Header />
      {/* <Search  Results /> */}
    </div>
  );
}
export default Search;

export async function getServerSideProps(context) {
  const useDummuData = false;
}