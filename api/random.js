export default function handler(req, res) {
  try {
    // 全局跨域配置
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 处理跨域预检请求
    if (req.method === 'OPTIONS') {
      res.setHeader('Content-Type','application/json');
      return res.status(204).end();
    }

    // 仅允许GET访问视频接口
    if (req.method !== 'GET') {
      res.setHeader('Content-Type','application/json');
      return res.status(405).send(JSON.stringify({ msg: "仅支持GET请求" }, null, 2));
    }

    // 全部开源动漫动画视频，无普通实拍素材
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

    const video = videos[Math.floor(Math.random() * videos.length)];
    // 格式化美观输出
    res.setHeader('Content-Type','application/json');
    res.status(200).send(JSON.stringify(video, null, 2));
  } catch (err)
    res.setHeader('Content-Type','application/json');
    res.status(500).send(JSON.stringify({ error: "接口服务异常", detail: err.message }, null, 2));
  }
}
