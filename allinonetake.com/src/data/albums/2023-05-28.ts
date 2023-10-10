import { IAlbum } from "@bands/shared";


const album: IAlbum = {
  title: 'Chippin\' Away at Church',
  date: new Date(2023, 4, 28),
  img: '/assets/img/jellyfish.jpeg',
  tracks: [
    {
      title: 'Smell The Funk',
      src: '/assets/songs/2023-05-28/smell_the_funk.mp3',
    },
    {
      title: '7 Days a Week',
      src: '/assets/songs/2023-05-28/seven_days_a_week.mp3',
    },
    {
      title: 'Jellyfish',
      src: '/assets/songs/2023-05-28/jellyfish.mp3',
    },
    {
      title: 'Alchemist\'s Lab',
      src: '/assets/songs/2023-05-28/alchemists_lab.mp3',
    },
    {
      title: 'Dreamscape Ballroom',
      src: '/assets/songs/2023-05-28/dreamscape_ballroom.mp3',
    },
    {
      title: 'Another Sunday Afternoon',
      src: '/assets/songs/2023-05-28/another_sunday_afternoon.mp3',
    },
    {
      title: 'The Lorian Mando',
      src: '/assets/songs/2023-05-28/the_lorian_mando.mp3',
    },
  ]
}
export default album;