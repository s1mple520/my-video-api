export default function handler(req, res) {
  // 全局跨域配置
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理预检OPTIONS请求
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // 仅允许GET请求
  if (req.method !== 'GET') {
    res.setHeader('Content-Type', 'application/json');
    return res.status(405).send(JSON.stringify({ msg: "仅支持GET请求" }, null, 2));
  }

  // 动漫动画视频素材列表
  const videos = [
    {
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      name: "大雄兔 开源卡通动画",
      duration: "9分56秒"
    },
    {
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      name: "大象之梦 复古动漫短片",
      duration: "1分53秒"
    },
    {
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      name: "辛特尔 奇幻3D动漫",
      duration: "14分48秒"
    },
    {
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      name: "钢铁之泪 科幻动画短片",
      duration: "12分14秒"
    }
  ];

  // 随机选取一条视频
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).send(JSON.stringify(randomVideo, null, 2));
}
