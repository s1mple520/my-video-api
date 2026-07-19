export default function handler(req, res) {
  // 全局跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 预检OPTIONS请求直接结束
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // 仅允许GET
  if (req.method !== 'GET') {
    return res.status(405).json({ msg: "仅支持GET请求" });
  }

  const videos = [
    { url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm", name: "Flower", duration: "10s" },
    { url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4", name: "Friday", duration: "15s" }
  ];

  const randomItem = videos[Math.floor(Math.random() * videos.length)];
  res.status(200).json(randomItem);
}