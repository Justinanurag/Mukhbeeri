import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = { pathname: window.location.pathname };

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-news-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
            <p className="text-muted-foreground">
              Sorry, the page you're looking for doesn't exist or may have been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="bg-news-primary hover:bg-news-primary/90">
              <Link to="/">
                Return to Homepage
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              <p>Or browse our latest news:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link to="/category/india" className="hover:text-news-primary transition-colors">
                  India
                </Link>
                <Link to="/category/world" className="hover:text-news-primary transition-colors">
                  World
                </Link>
                <Link to="/category/business" className="hover:text-news-primary transition-colors">
                  Business
                </Link>
                <Link to="/category/sports" className="hover:text-news-primary transition-colors">
                  Sports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
