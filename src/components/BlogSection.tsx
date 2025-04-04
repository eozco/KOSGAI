import { CalendarClock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";

const BlogPost = ({ 
  title, 
  category, 
  excerpt, 
  date, 
  imageColor,
  slug
}: { 
  title: string, 
  category: string, 
  excerpt: string, 
  date: string,
  imageColor: string,
  slug: string
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
      <div className={`h-48 ${imageColor} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-indigo-500/10 dark:from-violet-400/20 dark:via-purple-400/20 dark:to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-20 h-20 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-sm transform rotate-12 group-hover:rotate-45 transition-transform duration-300"></div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium">
            {category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <CalendarClock className="w-4 h-4 mr-2" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
        >
          {t("blog.read_more")} 
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const { t, language } = useLanguage();
  const currentPosts = blogPosts[language];

  return (
    <section id="blog" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {t("blog.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-900/50 hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <CalendarClock className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <span className="text-sm text-gray-300">{post.author.name}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
                  >
                    {t("blog.read_more")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
          >
            {t("blog.view_all_posts")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
