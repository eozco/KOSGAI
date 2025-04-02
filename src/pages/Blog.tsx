
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = "Blog | KO Soluciones Generales";
    window.scrollTo(0, 0);
  }, []);

  const currentPosts = blogPosts[language];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("blog_title")}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("blog_subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <div key={index} className="bg-white/50 dark:bg-ko-dark/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                <div className={`h-48 ${post.imageColor} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-black/20"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 text-ko-secondary text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-ko-secondary hover:text-ko-primary transition-colors text-sm font-medium">
                    {t("read_more")} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="mx-auto">
              <Link to="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                {language === "en" ? "Back to Home" : "Volver al Inicio"}
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
