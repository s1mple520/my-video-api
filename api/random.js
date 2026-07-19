export default function handler(req, res) {
  const videos = [
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.webm"
  ];
  const url = videos[Math.floor(Math.random() * videos.length)];
  res.status(200).json({ url });
}