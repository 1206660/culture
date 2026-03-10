'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  id: number
  name: string
  description: string
  status: '进行中' | '已完成' | '规划中'
  progress: number
  team: string[]
  icon: string
  color: string
  deadline: string
  features: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'AI智能助手',
    description: '基于大语言模型的智能对话系统，提供24/7客户服务',
    status: '进行中',
    progress: 75,
    team: ['程序', '研究', '运营'],
    icon: '🤖',
    color: '#00f3ff',
    deadline: '2024-03-15',
    features: ['自然语言理解', '多轮对话', '知识库集成', 'API接口'],
  },
  {
    id: 2,
    name: '数据可视化平台',
    description: '实时数据监控与可视化分析平台',
    status: '进行中',
    progress: 60,
    team: ['程序', '创意', '研究'],
    icon: '📊',
    color: '#bf00ff',
    deadline: '2024-04-01',
    features: ['实时监控', '图表生成', '报表导出', '自定义仪表盘'],
  },
  {
    id: 3,
    name: '营销内容生成器',
    description: 'AI驱动的营销文案和视觉内容自动生成工具',
    status: '进行中',
    progress: 90,
    team: ['创意', '运营', '老板'],
    icon: '✨',
    color: '#ff006e',
    deadline: '2024-02-28',
    features: ['文案生成', '图片设计', '多平台适配', 'A/B测试'],
  },
  {
    id: 4,
    name: '财务预测系统',
    description: '基于机器学习的财务数据分析和预测系统',
    status: '规划中',
    progress: 15,
    team: ['财务', '程序', '研究'],
    icon: '💰',
    color: '#00ff9f',
    deadline: '2024-06-01',
    features: ['趋势预测', '预算优化', '风险评估', '自动报告'],
  },
  {
    id: 5,
    name: '官网重构项目',
    description: '全新的公司官网，展示AI团队和产品',
    status: '已完成',
    progress: 100,
    team: ['程序', '创意'],
    icon: '🌐',
    color: '#ffd700',
    deadline: '2024-01-15',
    features: ['响应式设计', '炫酷动画', '性能优化', 'SEO友好'],
  },
]

export default function ProductsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'全部' | '进行中' | '已完成' | '规划中'>('全部')

  const filteredProjects = projects.filter(p => 
    filter === '全部' || p.status === filter
  )

  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold mb-4 neon-glow">产品项目</h1>
          <p className="text-xl text-gray-300 mb-6">探索我们正在打造的创新产品</p>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            {['全部', '进行中', '已完成', '规划中'].map((status) => (
              <motion.button
                key={status}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(status as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === status
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                    : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
                }`}
              >
                {status}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
              className="gradient-border p-6 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-5xl"
                >
                  {project.icon}
                </motion.div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === '已完成'
                      ? 'bg-green-500 bg-opacity-20 text-green-400'
                      : project.status === '进行中'
                      ? 'bg-blue-500 bg-opacity-20 text-blue-400'
                      : 'bg-gray-500 bg-opacity-20 text-gray-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">进度</span>
                  <span className="font-bold" style={{ color: project.color }}>
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }}
                  />
                </div>
              </div>

              {/* Team */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">团队:</span>
                <div className="flex -space-x-2">
                  {project.team.map((member, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-xs font-bold border-2 border-dark-bg"
                      title={member}
                    >
                      {member[0]}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-6xl mb-4">{selectedProject.icon}</div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.name}</h2>
                  <p className="text-gray-400">{selectedProject.description}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="text-3xl text-gray-400 hover:text-white"
                >
                  ✕
                </motion.button>
              </div>

              <div className="space-y-6">
                {/* Progress */}
                <div>
                  <h3 className="text-lg font-bold mb-2">项目进度</h3>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedProject.progress}%` }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${selectedProject.color}, ${selectedProject.color}80)` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400">
                    {selectedProject.progress}% 完成 · 截止日期: {selectedProject.deadline}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-bold mb-3">核心功能</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-neon-blue">✓</span>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div>
                  <h3 className="text-lg font-bold mb-3">项目团队</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.team.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-10 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-sm font-bold">
                          {member[0]}
                        </div>
                        <span className="text-sm">{member}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
