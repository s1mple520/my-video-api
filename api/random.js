export default function handler(req, res) {
  const videos = [
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.webm",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/elephant-617.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/motion.mp4",
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720p/Big_Buck_Bunny_720_10s_1MB.mp4",
    "https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/720p/Big_Buck_Bunny_720_10s_2MB.webm",
    "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4"
  ];
  const url = videos[Math.floor(Math.random() * videos.length)];
  res.status(200).json({ url });
}