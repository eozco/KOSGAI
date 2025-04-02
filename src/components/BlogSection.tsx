
import { CalendarClock } from "lucide-react";
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
    <div className="bg-white/50 dark:bg-ko-dark/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
      <div className={`h-48 ${imageColor} flex items-center justify-center`}>
        <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-black/20"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 text-ko-secondary text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <CalendarClock className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="text-ko-secondary hover:text-ko-primary transition-colors text-sm font-medium">
          {t("read_more")} →
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const { t, language } = useLanguage();
  const currentPosts = blogPosts[language];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-ko-accent/10 dark:bg-ko-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("blog_title")} <span className="text-gradient">Insights Hub</span></h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t("blog_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {currentPosts.slice(0, 3).map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              category={post.category}
              excerpt={post.excerpt}
              date={post.date}
              imageColor={post.imageColor}
              slug={post.slug}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">{t("view_all_posts")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
