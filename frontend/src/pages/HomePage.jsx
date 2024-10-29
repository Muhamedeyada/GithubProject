import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import Search from "../components/Search";
import Repos from "../components/Repos";
import Spinner from "./Spinner";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("forks");

  const getUserProfileAndRepos = useCallback(async () => {
    setLoading(true);
    try {
      const UserRes = await fetch("https://api.github.com/users/burakorkmez");
      const userProfile = await UserRes.json();
      setUserProfile(userProfile);
      const RepoRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=${sortType}`
      );
      const repos = await RepoRes.json();
      setRepos(repos);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);
  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        <ProfileInfo userProfile={userProfile} />
        <Repos />
        <Spinner />
      </div>
    </div>
  );
};

export default HomePage;
