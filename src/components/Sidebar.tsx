import { TrendingUp, Clock, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const trendingNews = [
  { id: '1', title: 'Parliament passes landmark digital governance bill', views: 15420 },
  { id: '2', title: 'Startup ecosystem reaches $100 billion valuation milestone', views: 12350 },
  { id: '3', title: 'Renewable energy projects get major policy boost', views: 9870 },
  { id: '4', title: 'Education reform brings coding to primary curriculum', views: 8650 },
  { id: '5', title: 'Healthcare infrastructure gets ₹50,000 crore investment', views: 7240 },
];

const latestNews = [
  { 
    id: '6', 
    title: 'Economic survey predicts 7% GDP growth this fiscal', 
    time: '2 min ago',
    category: 'Business' 
  },
  { 
    id: '7', 
    title: 'Space mission successfully launches communication satellite', 
    time: '15 min ago',
    category: 'Technology' 
  },
  { 
    id: '8', 
    title: 'Climate summit addresses urgent environmental concerns', 
    time: '32 min ago',
    category: 'World' 
  },
  { 
    id: '9', 
    title: 'Sports minister announces new Olympic training facilities', 
    time: '1 hour ago',
    category: 'Sports' 
  },
  { 
    id: '10', 
    title: 'Cultural festival celebrates diversity and unity', 
    time: '2 hours ago',
    category: 'Lifestyle' 
  },
];

const mostRead = [
  { id: '11', title: 'Understanding the new tax reforms and their impact', reads: 45230 },
  { id: '12', title: 'Tech revolution: How AI is changing daily life', reads: 38750 },
  { id: '13', title: 'Investment guide for the modern Indian investor', reads: 32110 },
  { id: '14', title: 'Sustainable living: Green choices for urban families', reads: 28940 },
  { id: '15', title: 'Career opportunities in the digital economy', reads: 24680 },
];

export const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Newsletter Signup */}
      <Card className="border-news-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <span>📧</span>
            <span>Daily Newsletter</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Get the day's top headlines delivered to your inbox
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input 
            placeholder="Enter your email"
            className="border-border focus:border-news-primary"
          />
          <Button className="w-full bg-news-primary hover:bg-news-primary/90">
            Subscribe Now
          </Button>
        </CardContent>
      </Card>

      {/* Trending News */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-trending" />
            <span>Trending Now</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingNews.map((news, index) => (
            <Link 
              key={news.id}
              to={`/article/${news.id}`}
              className="block group"
            >
              <div className="flex items-start space-x-3 p-2 rounded hover:bg-muted/50 transition-colors">
                <span className="text-news-primary font-bold text-sm flex-shrink-0 mt-1">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-news-primary transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="flex items-center space-x-1 mt-1">
                    <Eye className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {news.views.toLocaleString()} views
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Latest News */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>Latest Updates</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {latestNews.map((news) => (
            <Link 
              key={news.id}
              to={`/article/${news.id}`}
              className="block group"
            >
              <div className="p-2 rounded hover:bg-muted/50 transition-colors">
                <h4 className="text-sm font-medium text-foreground group-hover:text-news-primary transition-colors line-clamp-2 mb-1">
                  {news.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="bg-accent px-2 py-0.5 rounded">
                    {news.category}
                  </span>
                  <span>{news.time}</span>
                </div>
              </div>
            </Link>
          ))}
          <Button variant="ghost" size="sm" className="w-full mt-3">
            View All Updates
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </CardContent>
      </Card>

      {/* Most Read */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Eye className="h-5 w-5 text-green-600" />
            <span>Most Read</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {mostRead.map((news, index) => (
            <Link 
              key={news.id}
              to={`/article/${news.id}`}
              className="block group"
            >
              <div className="flex items-start space-x-3 p-2 rounded hover:bg-muted/50 transition-colors">
                <span className="text-green-600 font-bold text-sm flex-shrink-0 mt-1">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-news-primary transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {news.reads.toLocaleString()} reads
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Advertisement Placeholder */}
      <Card className="bg-muted/30">
        <CardContent className="p-6 text-center">
          <div className="bg-muted rounded-lg h-32 flex items-center justify-center mb-3">
            <span className="text-muted-foreground text-sm">Advertisement</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Sponsored Content
          </p>
        </CardContent>
      </Card>
    </div>
  );
};