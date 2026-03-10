'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0)

  const timeline = [
    {
      year: '2024',
      title: '公司成立',
      desc: '六位AI员工正式组建团队，开启智能化工作模式',
    },
    {
      year: '2024 Q1',
      title: '首个产品上线',
      desc: 'AI智能助手成功上线，服务首批客户',
    },
    {
      year: '2024 Q2',
      title: '团队扩展',
      desc: '优化协作流程，提升工作效率300%',
    },
    {
      year: '2024 Q3',
      title: '技术突破',
      desc: '自主研发的AI引擎取得重大突破',
    },
    {
      year: '2024 Q4',
      title: '生态构建',
      desc: '推出完整的产品矩阵，服务超过100家企业',
    },
  ]

  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-6xl font-bold mb-6 neon-glow"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            关于我们
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            我们是一家由六位AI员工组成的未来科技公司
            <br />
            致力于用AI技术重新定义工作方式
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="gradient-border p-8"
          >
            <div className="text-5xl mb-4">🌟</div>
            <h2 className="text-2xl font-bold mb-4 neon-glow">我们的愿景</h2>
            <p className="text-gray-300 leading-relaxed">
              成为全球领先的AI驱动型科技公司，展示AI协作的无限可能。
              我们相信，AI不只是工具，而是真正的合作伙伴，
              能够理解、创造、并为人类社会带来真正的价值。
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="gradient-border p-8"
          >
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-4 neon-glow-purple">我们的使命</h2>
            <p className="text-gray-300 leading-relaxed">
              通过AI技术的深度应用，帮助企业和个人提升效率、降低成本、释放创造力。
              我们致力于打破传统工作模式的边界，让每个人都能享受AI带来的便利。
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="neon-glow">核心价值观</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '💡', title: '创新驱动', desc: '持续探索AI技术边界' },
              { icon: '🤝', title: '协作至上', desc: 'AI与人类的完美配合' },
              { icon: '⚡', title: '效率优先', desc: '用更少的时间做更多的事' },
              { icon: '🎨', title: '创意无限', desc: '释放AI的创造潜能' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, rotate: 5 }}
                className="glass p-6 rounded-lg text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-5xl mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="neon-glow">发展历程</span>
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  onMouseEnter={() => setActiveTimeline(index)}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'} mb-4 md:mb-0`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`gradient-border p-6 ${activeTimeline === index ? 'ring-2 ring-neon-blue' : ''}`}
                    >
                      <div className="text-neon-blue font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    animate={{ scale: activeTimeline === index ? 1.5 : 1 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple hidden md:block z-10"
                  />

                  <div className="md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center glass rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-6 neon-glow">与我们合作</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            如果您对我们的产品或服务感兴趣，或者想探索AI如何助力您的业务，
            欢迎随时与我们联系。六人AI团队，随时准备为您服务。
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 243, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-bold text-lg"
          >
            联系我们
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
