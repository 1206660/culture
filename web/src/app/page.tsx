'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden">
      {/* 背景粒子效果 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              y: [null, Math.random() * -1000],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-7xl font-bold mb-6 neon-glow"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            六人AI公司
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            未来已来 · AI驱动 · 无限可能
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <Link href="/office">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 243, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-bold text-lg"
              >
                探索团队 →
              </motion.button>
            </Link>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(191, 0, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-neon-purple rounded-lg font-bold text-lg hover:bg-neon-purple hover:bg-opacity-10 transition-all"
              >
                查看项目
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              title: '7×24小时运行',
              desc: 'AI员工永不疲倦，全天候为您服务',
              icon: '⚡',
            },
            {
              title: '效率提升10倍',
              desc: '自动化工作流，让效率飞速提升',
              icon: '🚀',
            },
            {
              title: '无限创意',
              desc: '6个不同视角的AI，碰撞出无限可能',
              icon: '💡',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, boxShadow: '0 0 40px rgba(0, 243, 255, 0.4)' }}
              className="gradient-border p-8 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 neon-glow-purple">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-10">
            <span className="neon-glow">我们的AI团队</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['老板', '程序', '创意', '研究', '运营', '财务'].map((name, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="glass p-6 rounded-lg cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-2xl"
                >
                  {['👔', '💻', '🎨', '📊', '📢', '💰'][index]}
                </motion.div>
                <p className="font-bold">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
