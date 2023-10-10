import { Box } from '@mui/system';
import { Album } from '../../common';
import './Home.scss';
import { useAppState } from '../../data';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface HomeProps {
  hero: ReactNode;
}
export function Home(props: HomeProps) {
  const { hero } = props;
  const { albums } = useAppState();
  return (
    <Box className="page-home">
      <Box className="home__hero -flex -space-between">{hero}</Box>
      <Box className="home__albums -flex -space-between">
        {albums.slice(0, 2).map((album, index) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Album key={`album-${album.title}`} album={album} />
          </Box>
        ))}
        {albums.slice(2).map((album, index) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Link to={`/session/${album.dateSlug}`}>
              <Album key={`album-${album.title}`} album={album} imageOnly />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
