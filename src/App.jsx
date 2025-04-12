import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const content = {
  zh: {
    siteTitle: 'JiouHao 的技術遊樂場',
    subtitle: '一個結合創意與程式的場域',
    aboutTitle: '👨‍💻 關於我',
    aboutText:
      '我是久豪，一位擁有設計背景並成功轉職的全端工程師，對資料分析、AI應用及自動化充滿熱情。我曾參與半導體、自動化專案，亦熱衷於開發結合使用者體驗與資料驅動的 side projects。技術之外，我重視溝通、合作與產品思維，期待未來走向技術 PM 或資料產品管理的職涯發展。',
    projectTitle: '🚀 專案展示'
  },
  en: {
    siteTitle: "JiouHao’s Tech Playground",
    subtitle: 'A playground where code meets creativity.',
    aboutTitle: '👨‍💻 About Me',
    aboutText:
      'I’m JiouHao, a full-stack engineer with a design background, passionate about data, AI, and automation. I’ve worked in the semiconductor and automation industries and enjoy building side projects driven by user experience and data. I value communication, collaboration, and product thinking, aiming to grow into a technical PM or product leader in data-related fields.',
    projectTitle: '🚀 Projects'
  }
};

const projects = [
  {
    title: {
      zh: '球鞋發售時間與庫存查詢系統',
      en: 'Sneaker Release & Stock Checker'
    },
    description: {
      zh: '即時查詢球鞋資訊與抽籤連結，支援登入、過濾與自動通知。',
      en: 'Real-time sneaker info and raffle links with login, filter, and alerts.'
    },
    tech: ['Node.js', 'React', 'MongoDB', 'Discord API'],
    images: ['/sneaker-stock-1.png', '/sneaker-stock-2.png']
  },
  {
    title: {
      zh: 'Twitter 即時資訊擷取 Chatbot',
      en: 'Twitter Real-Time Info Chatbot'
    },
    description: {
      zh: '支援多帳號、指令操作、自動 follow/unfollow 與即時通知功能。',
      en: 'Supports multiple accounts, commands, auto-follow/unfollow and instant alerts.'
    },
    tech: ['Python', 'Discord Bot', 'Twitter API'],
    images: ['/twitter-bot-1.png', '/twitter-bot-2.png']
  },
  {
    title: {
      zh: 'Discord 資訊擷取系統',
      en: 'Discord Info Grabber Tool'
    },
    description: {
      zh: 'Electron 桌面工具，支援 Discord 登入與自動化訊息管理。',
      en: 'Electron desktop tool for Discord login and automated message management.'
    },
    tech: ['Electron', 'React', 'Bootstrap'],
    images: ['/discord-tool-1.png', '/discord-tool-2.png']
  },
  {
    title: {
      zh: '口罩庫存查詢系統',
      en: 'Mask Stock Inquiry Bot'
    },
    description: {
      zh: '透過 Discord Bot 查詢藥局庫存，自動顯示地圖與回應使用者需求。',
      en: 'Query pharmacy stock via Discord Bot with location map and response.'
    },
    tech: ['Python', 'Discord API'],
    images: ['/mask-stock.png']
  },
  {
    title: {
      zh: 'SecsGem 設備連接程式',
      en: 'SecsGem Equipment Connector'
    },
    description: {
      zh: '支援主動/被動連線並整合 Flask 與 GUI 顯示連線狀態。',
      en: 'Supports active/passive connection with Flask and GUI for connection status.'
    },
    tech: ['Flask', 'PyQt', 'SEMI Protocol'],
    images: ['/secs-connector.png']
  }
];

export default function JiouHaoTechPlayground() {
    const [lang, setLang] = useState('zh');
    const t = content[lang];
    const [modalImg, setModalImg] = useState(null);
  
    return (
      <main className="dark p-6 max-w-5xl mx-auto transition-colors duration-300 bg-zinc-900 text-white min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-center w-full">{t.siteTitle}</h1>
          <div className="absolute top-6 right-6">
            <button
              className="px-3 py-1 rounded-xl text-sm border"
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            >
              {lang === 'zh' ? 'English' : '中文'}
            </button>
          </div>
        </div>
  
        <p className="text-center text-gray-400 mb-10">{t.subtitle}</p>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">{t.aboutTitle}</h2>
          <p className="leading-relaxed text-gray-300">{t.aboutText}</p>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-6">{t.projectTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="transition-transform"
              >
                <div className="rounded-2xl shadow-md border border-gray-700 bg-zinc-800 overflow-hidden">
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={4000}
                    className="bg-zinc-900"
                  >
                    {proj.images.map((img, idx) => (
                      <div key={idx} onClick={() => setModalImg(`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`)} className="cursor-pointer">
                        <img
                          src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`}
                          alt={`${proj.title[lang]} ${idx + 1}`}
                          className="object-cover h-48 w-full"
                        />
                      </div>
                    ))}
                  </Carousel>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{proj.title[lang]}</h2>
                    <p className="text-sm mb-3 text-gray-300">{proj.description[lang]}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-1 border rounded-full text-gray-200 border-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
  
        {modalImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setModalImg(null)}
          >
            <img src={modalImg} alt="preview" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
          </div>
        )}
      </main>
    );
  }
  
