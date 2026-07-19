export default function handler(req, res) {
  try {
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
      res.setHeader('Content-Type','application/json');
      return res.status(405).send(JSON.stringify({ msg: "仅支持GET请求" }, null, 2));
    }

    // 全部动漫短视频素材
    const videos = [
      {
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        name: "大雄兔 经典动漫短片",
        duration: "9m 56s"
      },
      {
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        name: "大象之梦 开源动画短片",
        duration: "1m 53s"
      },
      {
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        name: "辛特尔 奇幻动画短片",
        duration: "14m 48s"
      },
      {
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        name: "钢铁之泪 科幻动画短片",
        duration: "12m 14s"
      },
      {
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
        name: "动漫风景镜头素材",
        duration: "10s"
      }
    ];

    const video = videos[Math.floor(Math.random() * videos.length)];
    // 格式化美观输出
    res.setHeader('Content-Type','application/json');
    res.status(200).send(JSON.stringify(video, null, 2));
  } catch (err) {
    res.setHeader('Content-Type','application/json');
    res.status(500).send(JSON.stringify({ error: "接口服务异常", detail: err.message }, null, 2));
  }
}
