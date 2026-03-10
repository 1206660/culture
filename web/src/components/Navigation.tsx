'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const navItems = [
  { name: '首页', path: '/' },
  { name: '团队', path: '/office' },
  { name: '项目', path: '/products' },
  { name: '关于', path: '/about' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center"
            >
              <span className="text-xl font-bold">AI</span>
            </motion.div>
            <span className="text-lg font-bold neon-glow">六人AI公司</span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-4 py-2 cursor-pointer"
                  >
                    <span
                      className={clsx(
                        'font-medium transition-colors',
                        isActive ? 'text-neon-blue' : 'text-gray-300 hover:text-white'
                      )}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
