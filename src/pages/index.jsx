
import Teach from "../components/global/skills";
import About from "../components/global/about";
import SpotifyCard from "../components/global/spotifyCard";
import VscCard from "../components/global/vscCard";
import GithubCard from "../components/global/repositories";


export default function Home() {

  return (
    <>
     
        <div className="mt-10 px-5">
          <About  />
          <SpotifyCard  />
          <VscCard  />
          <div className="mt-10">
          <GithubCard />
          <Teach />
          </div>
        </div>
      
    </>
  );
}



