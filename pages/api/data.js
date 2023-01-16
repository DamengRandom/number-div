const baGua = [
  {
    id: 1,
    name: "qian",
  },
  {
    id: 2,
    name: "ze",
  },
  {
    id: 3,
    name: "li",
  },
  {
    id: 4,
    name: "zhen",
  },
  {
    id: 5,
    name: "xun",
  },
  {
    id: 6,
    name: "kan",
  },
  {
    id: 7,
    name: "gen",
  },
  {
    id: 8,
    name: "kun",
  },
];

export default function handler(req, res) {
  res.status(200).json({ result: baGua });
}
