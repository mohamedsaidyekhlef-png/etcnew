import { BLOG_POSTS } from '../data/content';
import { motion } from 'framer-motion';

export const Blog = () => {
  return (
    <div className="pt-32 pb-24 bg-void min-h-screen text-white font-sans selection:bg-brand-orange selection:text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Insights</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts on leadership, culture, and the art of executive presence.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Executive Presence', 'Team Dynamics', 'Culture', 'Curiosity'].map(cat => (
                <button key={cat} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-orange hover:text-brand-orange transition-all text-sm font-medium text-gray-300">
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-panel border border-white/10 rounded-2xl overflow-hidden hover:border-brand-orange/50 transition-all group cursor-pointer shadow-lg"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="text-brand-orange">{post.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-white font-medium text-sm border-b border-brand-orange/50 pb-0.5 group-hover:border-brand-orange transition-colors">Read Article</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
