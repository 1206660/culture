'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Employee {
  id: number
  name: string
  role: string
  emoji: string
  status: string
  activity: string
  progress: number
  color: string
}

const employees: Employee[] = [
  {
    id: 1,
    name: '老板',
    role: 'CEO / 产品经理',
    emoji: '👔',
    status: '在线',
    activity: '正在制定产品战略',
    progress: 75,
    color: '#ff006e',
  },
  {
    id: 2,
    name: '程序',
    role: '开发工程师',
    emoji: '💻',
    status: '在线',
    activity: '正在开发新功能模块',
    progress: 60,
    color: '#00f3ff',
  },
  {
    id: 3,
    name: '创意',
    role: '设计师 / 内容创作者',
    emoji: '🎨',
    status: '在线',
    activity: '正在设计营销海报',
    progress: 85,
    color: '#bf00ff',
  },
  {
    id: 4,
    name: '研究',
    role: '市场研究员',
    emoji: '📊',
    status: '在线',
    activity: '正在分析竞品数据',
    progress: 45,
    color: '#00ff9f',
  },
  {
    id: 5,
    name: '运营',
    role: '运营专员',
    emoji: '📢',
    status: '在线',
    activity: '正在策划推广活动',
    progress: 90,
    color: '#ffd700',
  },
  {
    id: 6,
    name: '财务',
    role: '财务官',
    emoji: '💰',
    status: '在线',
    activity: '正在审核预算报告',
    progress: 55,
    color: '#ff6b6b',
  },
]

export default function OfficePage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activities, setActivities] = useState<string[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 模拟活动更新
  useEffect(() => {
    const activityTimer = setInterval(() => {
      const randomEmployee = employees[Math.floor(Math.random() * employees.length)]
      const newActivity = `${randomEmployee.name}: ${getRandomActivity(randomEmployee.role)}`
      setActivities(prev => [newActivity, ...prev.slice(0, 9)])
    }, 5000)
    return () => clearInterval(activityTimer)
  }, [])

  function getRandomActivity(role: string): string {
    const activitiesMap: Record<string, string[]> = {
      'CEO / 产品经理': ['召开战略会议', '审核产品路线图', '制定季度目标', '与投资方沟通'],
      '开发工程师': ['编写核心代码', '修复Bug', '代码审查', '优化性能'],
      '设计师 / 内容创作者': ['设计UI界面', '创作营销文案', '制作视频素材', '品牌设计'],
      '市场研究员': ['分析行业报告', '调研用户需求', '竞品分析', '数据挖掘'],
      '运营专员': ['管理社交媒体', '策划运营活动', '用户增长策略', '内容分发'],
      '财务官': ['财务报表分析', '预算规划', '成本优化', '投资决策'],
    }
    const acts = activitiesMap[role] || ['工作中']
    return acts[Math.floor(Math.random() * acts.length)]
  }

  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold mb-4 neon-glow">AI 办公室</h1>
          <p className="text-xl text-gray-300">实时查看团队成员的工作状态</p>
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-400">
            <span>🕐 {currentTime.toLocaleTimeString('zh-CN')}</span>
            <span>•</span>
            <span>所有成员在线</span>
            <span>•</span>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Employee Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {employees.map((employee, index) => (
                <motion.div
                  key={employee.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="gradient-border p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className="w-14 h-14 rounded-lg flex items-center justify-center text-3xl"
                        style={{ background: `linear-gradient(135deg, ${employee.color}, ${employee.color}50)` }}
                      >
                        {employee.emoji}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold">{employee.name}</h3>
                        <p className="text-sm text-gray-400">{employee.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-green-500"
                      />
                      <span className="text-xs text-green-400">{employee.status}</span>
                    </div>
                  </div>

                  {/* Current Activity */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-sm"
                      >
                        ▶️
                      </motion.div>
                      <p className="text-sm text-gray-300">{employee.activity}</p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${employee.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${employee.color}, ${employee.color}80)` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1 text-right">{employee.progress}% 完成</p>
                  </div>

                  {/* Activity Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>今日任务: 12</span>
                    <span>已完成: {Math.floor(employee.progress * 12 / 100)}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Activity Feed */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-lg p-6 h-full"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📡</span>
                实时动态
              </h3>
              
              <div className="space-y-3">
                {activities.length === 0 ? (
                  <div className="text-gray-400 text-sm text-center py-8">
                    等待活动更新...
                  </div>
                ) : (
                  activities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-3 bg-white bg-opacity-5 rounded-lg border-l-2 border-neon-blue"
                    >
                      <p className="text-sm">{activity}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(Date.now() - index * 5000).toLocaleTimeString('zh-CN')}
                      </p>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Office Stats */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-sm font-bold mb-3 text-gray-300">今日统计</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">完成任务</span>
                    <span className="text-neon-blue font-bold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">进行中</span>
                    <span className="text-neon-purple font-bold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">协作次数</span>
                    <span className="text-neon-green font-bold">156</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
