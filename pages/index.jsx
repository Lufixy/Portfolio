import swr from "../lib/swr";
import Teach from "../components/skills";
import About from "../components/about";
import GithubCard from "../components/repositories";
import axios from "axios";
import config from "../config";

export default function Home({ data }) {

  const { data: me } = swr("api/v1/me");
  const _me = me ? me : {};
  const { data: github } = swr("api/v1/repos");
  const _github = github ? github : {};


  return (
    <>

    {me ? (

        <div className="mt-10 px-5">
          <About _me={_me} spotify={_me?.data?.spotify} />
            <div className="mt-40">
              <GithubCard data={_github.data} />
              <Teach data={data} />
            </div>  
        </div>
    ) : null
    }

    </>
  );
}


//server side props

export async function getServerSideProps() {
  const res  = await axios.get(config.meta.url +"/api/v1/teach");
  const data = await res.data;
  const datas =  JSON.stringify(data);
  return {
    props: {
      data,
    },
  };
}

