import { IAlbum } from "@bands/shared";


const album: IAlbum = {
  title: 'You should be at Church',
  date: new Date(2023, 1, 19),
  img: '/assets/img/men-bar.jpeg',
  tracks: [
    {
      title: 'Good Day',
      src: '/assets/songs/2023-02-19/good_day.mp3',
    },
    {
      title: 'Sky\'s the Limit',
      src: '/assets/songs/2023-02-19/skys_the_limit.mp3'
    },
    {
      title: 'Realization',
      src: '/assets/songs/2023-02-19/realization.mp3'
    },
    {
      title: 'No Covers',
      src: '/assets/songs/2023-02-19/no_covers.mp3'
    },
    {
      title: 'Bats in the Belfry',
      src: '/assets/songs/2023-02-19/bats_in_the_belfry.mp3',
    },
    {
      title: 'Needs',
      src: '/assets/songs/2023-02-19/needs.mp3',
    },
  ]
}
export default album;