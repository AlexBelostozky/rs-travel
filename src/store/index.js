import { createStore } from "vuex";

export default createStore({
  state: {
    rewievsData: [
      {
        authorName: "Наталия Полянская",
        city: "Барселона",
        theme: "О городе",
        text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
        photos: [
          "rewiev1.jpg",
          "rewiev2.jpg",
          "rewiev3.jpg",
          "rewiev4.jpg",
          "rewiev5.jpg",
          "rewiev6.jpg",
        ],
        date: "около 1 года назад",
        commentsCount: 9,
        likesCount: 9,
      },
      {
        authorName: "Elena Bulgakova",
        city: "Барселона",
        theme: "О городе",
        text: "Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...",
        photos: ["rewiev1.jpg", "rewiev2.jpg", "rewiev3.jpg", "rewiev4.jpg"],
        date: "5 месяцев назад",
        commentsCount: 3,
        likesCount: 7,
      },
      {
        authorName: "Анна Кюри",
        city: "Барселона",
        theme: "О городе",
        text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
        photos: [
          "rewiev1.jpg",
          "rewiev2.jpg",
          "rewiev3.jpg",
          "rewiev4.jpg",
          "rewiev5.jpg",
        ],
        date: "3 месяца назад",
        commentsCount: 9,
        likesCount: 11,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
