import { Link } from 'react-router-dom';
import { Clock, Eye } from 'lucide-react';
import { useTranslation } from "react-i18next";

interface NewsCardProps {
  id: string;
  title: string;
  summary?: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  views?: number;
  variant?: 'default' | 'hero' | 'small' | 'horizontal';
  className?: string;
}

export const NewsCard = ({ 
  id,
  title, 
  summary, 
  image, 
  category, 
  author, 
  publishedAt, 
  readTime, 
  views,
  variant = 'default',
  className = ''
}: NewsCardProps) => {
  const baseClasses = "bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group";
  const { t } = useTranslation();

  const variantClasses = {
    default: "flex flex-col",
    hero: "flex flex-col md:flex-row md:items-center gap-6",
    small: "flex flex-col",
    horizontal: "flex flex-row gap-4 items-start"
  };

  const imageClasses = {
    default: "w-full h-48 object-cover",
    hero: "w-full md:w-1/2 h-64 md:h-80 object-cover",
    small: "w-full h-32 object-cover", 
    horizontal: "w-24 h-24 object-cover rounded flex-shrink-0"
  };

  const contentClasses = {
    default: "p-4 flex-1",
    hero: "p-6 md:w-1/2 flex-1",
    small: "p-3 flex-1",
    horizontal: "flex-1 min-w-0"
  };

  const readTimeValue = readTime.match(/\d+/)?.[0] || readTime;

  return (
    <Link 
      to={`/article/${id}`}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} // Assuming title is pre-translated or needs separate handling
          className={`${imageClasses[variant]} group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-news-primary text-white px-2 py-1 rounded text-xs font-medium">
            {t(`categories.${category.toLowerCase()}`, category)}
          </span>
        </div>
      </div>
      
      <div className={contentClasses[variant]}>
        <h3 className={`font-semibold text-foreground group-hover:text-news-primary transition-colors line-clamp-2 mb-2 ${
          variant === 'hero' ? 'text-xl md:text-2xl' : 
          variant === 'small' ? 'text-sm' : 'text-lg'
        }`}>
          {title} {/* Assuming title is pre-translated or needs separate handling */}
        </h3>
        
        {summary && variant !== 'small' && variant !== 'horizontal' && (
          <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
            {summary} {/* Assuming summary is pre-translated or needs separate handling */}
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-3">
            <span className="font-medium">{author}</span> {/* Assuming author is pre-translated */}
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{publishedAt}</span> {/* Assuming publishedAt is pre-translated */}
            </div>
            <span>•</span>
            <span>{t('categories.readTime', { time: readTimeValue })}</span>
          </div>
          {views && (
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{views.toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};