import Main from "../components/main/Main";
import axios from "axios";

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Main data={data} />
    </main>
  );
}

export async function getData() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/account/20169737",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWJjNzg5NmRkNDhjZGYzYWRlZWU4MGFmNjY3NGJhYiIsInN1YiI6IjY0Yjc2YTc0ZWVlMTg2MDBjNmQwZmNjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rMwrjyPnrvz3VoUEUKoHTx5aupI2320vfi0v4MAeFqk",
    },
  };
  try {
    const response = await axios(
      "https://api.themoviedb.org/3/discover/movie",
      options
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return { props: { data: null } };
  }
}
