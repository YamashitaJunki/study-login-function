type getPhotoListOut = Array<{
  title: string;
  src: string;
}>;

export const getPhotoList = (): getPhotoListOut => {
  const photoList = [
    {
      title: "猫〜クリスマス〜",
      src: "/photo1.jpg",
    },
    {
      title: "猫の休日",
      src: "/photo2.jpg",
    },
    {
      title: "猫の覚醒",
      src: "/photo3.png",
    },
  ];
  return photoList;
};
