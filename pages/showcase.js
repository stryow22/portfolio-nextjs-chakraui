import { useState, useEffect } from "react";
import ShowCase from "../components/ShowSase";
import useSWR from "swr";
import axios from "axios";
import DarkMode from "../components/DarkMode";

const fetching = (url) => axios.get(`http://localhost:3000/${url}`);

const Showcase = () => {
  const [getProfile, setProfile] = useState([]);
  const { data, error } = useSWR("api/showcase", fetching);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile")
      .then((response) => setProfile(response));
  }, []);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <ShowCase showcase={data.data} />
      <DarkMode />
    </div>
  );
};

export default Showcase;
