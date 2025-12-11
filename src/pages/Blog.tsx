import { BLOG_POSTS } from '../data/content';

export const Blog = () => {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-charcoal mb-6">Insights</h1>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Thoughts on leadership, culture, and the art of executive presence.
          </p>
        </div>

        {/* Filter Bar Placeholder */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Executive Presence', 'Team Dynamics', 'Culture', 'Curiosity'].map(cat => (
                <button key={cat} className="px-4 py-2 rounded-full border border-charcoal/10 hover:border-merlot hover:text-merlot transition-colors text-sm font-medium text-charcoal/70">
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider mb-3">
                  <span className="text-gold">{post.category}</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3 group-hover:text-merlot transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-merlot font-medium text-sm group-hover:underline">Read Article</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
