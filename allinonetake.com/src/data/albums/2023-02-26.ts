import { IAlbum } from "@bands/shared";


const album: IAlbum = {
  title: 'Church is Calling',
  date: new Date(2023, 1, 26),
  img: '/assets/img/guitarist.jpeg',
  tracks: [
    {
      title: 'Hopscotch',
      src: '/assets/songs/2023-02-26/hopscotch.mp3',
    },
    {
      title: 'Forward',
      src: '/assets/songs/2023-02-26/forward.mp3',
    },
    {
      title: 'Startup',
      src: '/assets/songs/2023-02-26/startup.mp3',
    },
  ]
}
export default album;