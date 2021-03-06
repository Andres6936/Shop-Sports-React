import dataUtils from "../src/modules/utils";

const data = [
  {
    id: 1000,
    parentId: 0,
    username: "Gregoriandoxies",
    text:
      "Really like this jacket I purchased the XL because I wanted an oversize jacket and it is definitely that. It was actually too big at first and fit more like a dress. But after washing it and partially drying it (I put it in the dryer until it was damp and then hung it on a drying rack) it is a good length to wear with boots and leggings For reference I am 5'4\" tall, around 155 lbs and a size 12. I purchased the grey in large and I think it will fit better initially but I will be careful not to put it into the dryer. The only reason I didnt give it 5 starts is because I expected the ribbed bottom to go all the way around and it doesn't - the cable knit is to the bottom in the back. Will also wear with jeans and flats.",
    date: "2018-07-08",
    rating: 5,
    userYes: 2,
    userNo: 0
  },
  {
    id: 1001,
    parentId: 0,
    username: "Solneeshka",
    text:
      "Love the jacket. It's very comfy, color doesn't run, great for a snuggly feel. I'm giving it 4 stars because it shrank a ton after I washed it the first time, and again after I washed it the second time. I had bought a size up so it would fit big, I had to roll the sleeves once at the wrist, which is exactly what I was going for (like the fit in the picture). Now, the sleeves come up above my wrists a bit. Just be aware, it will shrink. Other than that, love it and foresee wearing it a ton this winter!",
    date: "2018-07-08",
    rating: 4,
    userYes: 1,
    userNo: 0
  },
  {
    id: 1002,
    parentId: 0,
    username: "Aly Cox",
    text:
      "The overall quality is good but the knit itself is a bit thin. Since I bought this as a layering piece, I'm fine with that. You'll definitely want to put something under this unless you're OK with flashing your goodies around the office. It's not scratchy. The color is true to the photo, at least for the olive green. The sleeves are thick enough but the cables on the front are an issue. The cables themselves are fine. The area between them is the problem and that's where this jacket thins out.",
    date: "2018-07-09",
    rating: 3,
    userYes: 1,
    userNo: 0
  },
  {
    id: 1003,
    parentId: 0,
    username: "Gregoriandoxies",
    text:
      "I like it but gave 4 stars because it's snug in the arms. I purchased a large, due to bust size, and sometimes think if I go extra large the arms will hang. They won't with this because of the banding on the lower arms that can be rolled up. I wasn't sure if it would stretch out either after wear all day, and one other reason why I went with large. It's not light, or very heavy, would do on a cold day. I'll wear it and see how it goes, and if so I'll go up a size. It does cover right over the buttocks and if want to wear leggings, a size up would probably be best.",
    date: "2018-07-09",
    rating: 4,
    userYes: 3,
    userNo: 0
  },
  {
    id: 1004,
    parentId: 0,
    username: "amandawind922",
    text:
      "Love this jacket! But runs large. I ordered a medium, I normally wear a large or xl. 158 lbs 38d 5'5... comes past my butt, doesn't make me look square. Next time I'll order a small",
    date: "2018-07-10",
    rating: 5,
    userYes: 3,
    userNo: 0
  },
  {
    id: 1005,
    parentId: 1000,
    username: "Renee",
    text: "I have already worn it a few times and did not want to take it off.",
    date: "2018-07-10",
    rating: 0,
    userYes: 1,
    userNo: 0
  },
  {
    id: 1006,
    parentId: 1005,
    username: "Gregoriandoxies",
    text: "Yes, I too ))",
    date: "2018-07-10",
    rating: 0,
    userYes: 2,
    userNo: 0
  },
  {
    id: 1007,
    parentId: 1004,
    username: "Jessielead63",
    text: "This is currently my favorite jacket.",
    date: "2018-07-10",
    rating: 0,
    userYes: 0,
    userNo: 0
  }
];

export default dataUtils.nestedArray(data, { rootNodeVal: 0, childrenKey: "replies" });
