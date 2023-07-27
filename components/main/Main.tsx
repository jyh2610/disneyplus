"use client";
import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Movie {
  name: string;
  id: string;
  // Add other properties specific to the movie object here
}

interface Props {
  data: {
    results: Movie[];
    // Add other properties if needed from the API response
  };
}
function Main(props: any) {
  // const [movies, setData] = useState<Movie[]>(props.data.results);
  const pathname = usePathname();
  console.log(props);
  return (
    <Grid>
      {/* {movies.map((movie, i) => (
        <div key={i}>
          <Link href="/detail/[id]" as={`/detail/${movie.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt="movie"
              width={150}
              height={200}
            />
          </Link>
        </div>
      ))} */}
    </Grid>
  );
}

export default Main;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
