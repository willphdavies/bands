import { IAlbum } from "@bands/shared";


const album: IAlbum = {
  title: 'Let there be Church',
  date: new Date(2023, 1, 9),
  img: '/assets/img/crossroads-devil.jpeg',
  tracks: [
    {
      title: 'Breakthrough',
      src: '/assets/songs/2023-02-12/breakthrough.mp3',
    },
    {
      title: 'Bring It',
      src: '/assets/songs/2023-02-12/bring_it.mp3',
    },
    {
      title: 'Mouth Horn Jazz',
      src: '/assets/songs/2023-02-12/mouth_horn_jazz.mp3',
    },
    {
      title: 'Take me there',
      src: '/assets/songs/2023-02-12/take_me_there.mp3'
    }
  ]
}
export default album;