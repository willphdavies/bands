import { IAlbum } from "@bands/shared";

const album: IAlbum = {
  title: 'Chiming in at Church',
  date: new Date(2023, 5, 18),
  img: '/assets/img/pirate.jpeg',
  tracks: [
    {
      title: 'Crow\'s Nest',
      src: '/assets/songs/2023-06-18/crows_nest.mp3',
    },
    {
      title: 'Three Gummy Worms Deep',
      src: '/assets/songs/2023-06-18/three_gummy_worms_deep.mp3',
    },
    {
      title: 'Ball of Yarn',
      src: '/assets/songs/2023-06-18/ball_of_yarn.mp3',
    },
    {
      title: 'Happy Father\'s Day',
      src: '/assets/songs/2023-06-18/happy_fathers_day.mp3',
    },
    {
      title: '7-Layer Dip',
      src: '/assets/songs/2023-06-18/seven_layer_dip.mp3',
    },
    {
      title: 'Double-Edged Sword',
      src: '/assets/songs/2023-06-18/double_edged_sword.mp3',
    },
    {
      title: 'You Got Me Good',
      src: '/assets/songs/2023-06-18/you_got_me_good.mp3',
    },
  ]
}
export default album;