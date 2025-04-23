import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Homes from "@/components/Homes";
import Relators from "@/components/Relators";
import Sidebar from "@/components/Sidebar";
import StoryContent from "@/components/StoryContent";
import StoryPictures from "@/components/StoryPictures";

export default function Home() {
  return (
    <>
    <Sidebar />
    <Header />
    <Relators />
    <Features />
    <StoryPictures />
    <StoryContent />
    <Homes />
    <Gallery />
    </>
  );
}
