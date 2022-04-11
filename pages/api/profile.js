// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Dea Afrizal",
      job: "Tech Influencer",
      greeting: "Halo bro semua!",
      photo: "image-1.png",
    },
    {
      id: 2,
      name: "Aditya",
      job: "Buronan Masal",
      greeting: "Hello hehe mantap",
      photo: "image-2.png",
    },
    {
      id: 3,
      name: "Lucinta Luna",
      job: "Incubator",
      greeting: "Hay sayang, muahhh",
      photo: "image-3.png",
    },
    {
      id: 4,
      name: "Ariel Tatum",
      job: "Pacar Dea",
      greeting: "Hay Baby, Love U",
      photo: "image-4.png",
    },
  ]);
}
