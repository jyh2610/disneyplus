import Main from "../components/main/Main";
import axios from "axios";

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <Main data={data} />
    </main>
  );
}
interface Genre {
  id: number;
  title: string;
}
export async function getData() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWJjNzg5NmRkNDhjZGYzYWRlZWU4MGFmNjY3NGJhYiIsInN1YiI6IjY0Yjc2YTc0ZWVlMTg2MDBjNmQwZmNjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rMwrjyPnrvz3VoUEUKoHTx5aupI2320vfi0v4MAeFqk",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const data: Genre[] = response.data;
      data.map((item: Genre) => {
        const genre = item.id;
        const options = {
          method: "GET",
          url: "https://api.themoviedb.org/3/discover/movie",
          params: { with_genres: genre },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWJjNzg5NmRkNDhjZGYzYWRlZWU4MGFmNjY3NGJhYiIsInN1YiI6IjY0Yjc2YTc0ZWVlMTg2MDBjNmQwZmNjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rMwrjyPnrvz3VoUEUKoHTx5aupI2320vfi0v4MAeFqk",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.error(error);
          });
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}
// https://developer.themoviedb.org/reference/discover-movie
