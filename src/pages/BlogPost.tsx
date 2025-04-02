
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Tag, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [post, setPost] = useState<any | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const currentPosts = blogPosts[language];
    const foundPost = currentPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      document.title = `${foundPost.title} | KO Soluciones Generales`;
    } else {
      navigate('/blog');
    }
  }, [slug, language, navigate]);

  if (!post) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {language === "en" ? "Back to Blog" : "Volver al Blog"}
            </Link>
          </Button>
          
          <div className={`h-64 ${post.imageColor} rounded-xl mb-8 flex items-center justify-center`}>
            <div className="w-24 h-24 rounded-full bg-white/20 dark:bg-black/20"></div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 text-ko-secondary text-sm font-medium flex items-center">
              <Tag className="w-4 h-4 mr-1" /> {post.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-ko-primary/20 dark:bg-ko-primary/30 text-ko-primary text-sm font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> {post.date}
            </span>
            <span className="px-3 py-1 rounded-full bg-ko-accent/20 dark:bg-ko-accent/30 text-ko-accent text-sm font-medium flex items-center">
              <User className="w-4 h-4 mr-1" /> {language === "en" ? "KO Team" : "Equipo KO"}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl mb-8">{post.excerpt}</p>
            
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}

            {post.sections.map((section, idx) => (
              <div key={idx} className="my-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {section.paragraphs.map((paragraph, pidx) => (
                  <p key={pidx} className="mb-4">{paragraph}</p>
                ))}
              </div>
            ))}

            <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6">
              <Button variant="outline" size="sm" className="flex items-center">
                <Share2 className="mr-2 w-4 h-4" />
                {language === "en" ? "Share this article" : "Compartir este artículo"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
