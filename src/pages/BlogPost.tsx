import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Tag, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import type { BlogPost as BlogPostType, BlogSection } from "@/data/blogData";
import { toast } from "@/components/ui/use-toast";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | undefined>(undefined);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find post in current language or fallback
    let foundPost = blogPosts[language].find(p => p.slug === slug);
    let postLang = language;
    if (!foundPost) {
      const otherLang = language === 'en' ? 'es' : 'en';
      foundPost = blogPosts[otherLang].find(p => p.slug === slug);
      postLang = otherLang;
    }
    if (foundPost) {
      if (postLang !== language) setLanguage(postLang);
      setPost(foundPost);
      document.title = `${foundPost.title} | Inbloqs`;
    } else {
      navigate('/blog');
    }
  }, [slug, language, navigate, setLanguage]);

  // Share the article or copy link
  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: post!.title, text: post!.excerpt, url }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url)
        .then(() => {
          toast({ title: language === "en" ? "Link copied to clipboard" : "Enlace copiado al portapapeles" });
        })
        .catch(console.error);
    }
  };

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
            <span className="px-3 py-1 rounded-full bg-inbloqs-accent/20 dark:bg-inbloqs-accent/30 text-inbloqs-accent text-sm font-medium flex items-center">
              <User className="w-4 h-4 mr-1" /> {language === "en" ? "Inbloqs Team" : "Equipo Inbloqs"}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl mb-8">{post.excerpt}</p>
            
            {post.content.map((paragraph: string, idx: number) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}

            {post.sections.map((section: BlogSection, idx: number) => (
              <div key={idx} className="my-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {section.paragraphs.map((paragraph: string, pidx: number) => (
                  <p key={pidx} className="mb-4">{paragraph}</p>
                ))}
              </div>
            ))}

            <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6">
              <Button variant="outline" size="sm" className="flex items-center" onClick={handleShare}>
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
