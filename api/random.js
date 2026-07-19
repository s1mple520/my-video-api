export default function handler(req, res) {
  // 全局跨域配置
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理跨域预检请求
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // 仅允许GET访问视频接口
  if (req.method !== 'GET') {
    return res.status(405).json({ msg: "仅支持GET请求" });
  }

  const videos = [
    {
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      name: "Flower",
      duration: "10s"
    },
    {
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.webm",
      name: "Bee",
      duration: "10s"
    },
    {
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/elephant-617.mp4",
      name: "Elephant",
      duration: "6s"
    },
    {
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/motion.mp4",
      name: "Motion",
      duration: "8s"
    },
    {
      url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720p/Big_Buck_Bunny_720_10s_1MB.mp4",
      name: "Big Buck Bunny",
      duration: "10s"
    },
    {
      url: "https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/720p/Big_Buck_Bunny_720_10s_2MB.webm",
      name: "Big Buck Bunny (WebM)",
      duration: "10s"
    },
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4",
      name: "For Bigger Blazes",
      duration: "16s"
    },
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4",
      name: "Elephants Dream",
      duration: "1m 53s"
    },
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4",
      name: "Big Buck Bunny (Full)",
      duration: "9m 56s"
    },
    {
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      name: "Big Buck Bunny Sample",
      duration: "25s"
    }
  ];

  const video = videos[Math.floor(Math.random() * videos.length)];
  res.status(200).type('application/json').send(JSON.stringify(video, null, 2));
}