import { Reviews } from '../types/reviews';

export const reviews: Reviews =
    [
      {
        id: 1,
        user:{
          id:12,
          isPro:true,
          name:'Isaac',
          avatarUrl: 'https://10.react.pages.academy/static/avatar/3.jpg'
        },
        rating:4,
        comment:'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',date:'2022-06-13T12:25:36.938Z'
      },
      {
        id: 11,
        user:{
          id:18,
          isPro:true,
          name:'Sophie',
          avatarUrl:'https://10.react.pages.academy/static/avatar/9.jpg'
        },
        rating:4,
        comment:'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
        date:'2022-05-25T12:25:36.939Z'
      },
      {
        id: 2,
        user:{
          id:18,
          isPro:true,
          name:'Sophie',
          avatarUrl:'https://10.react.pages.academy/static/avatar/9.jpg'
        },
        rating:5,
        comment:'I stayed here for one night and it was an unpleasant experience.',
        date:'2022-05-25T12:25:36.939Z'
      },
      {
        id: 12,
        user:{
          id:11,
          isPro:false,
          name:'Jack',
          avatarUrl:'https://10.react.pages.academy/static/avatar/2.jpg'
        },
        rating:3,
        comment:'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
        date:'2022-06-05T12:25:36.939Z'
      },
      {
        id: 21,
        user:{
          id:13,
          isPro:false,
          name:'Zak',
          avatarUrl:'https://10.react.pages.academy/static/avatar/4.jpg'
        },
        rating:3,
        comment:'Bathed in the nature. Completely unplugged. Unforgettable.',
        date:'2022-06-05T12:25:36.939Z'
      },
      {
        id: 15,
        user: {
          id:17,
          isPro:false,
          name:'Emely',
          avatarUrl:'https://10.react.pages.academy/static/avatar/8.jpg'
        },
        rating:4,
        comment:'Bathed in the nature. Completely unplugged. Unforgettable.',
        date:'2022-06-13T12:25:36.939Z'
      }
    ];


