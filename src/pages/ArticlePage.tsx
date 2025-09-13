import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NewsCard } from '@/components/NewsCard';
import { Sidebar } from '@/components/Sidebar';
import { Share2, Facebook, Twitter, Linkedin, Copy, Clock, Eye, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroParliament from '@/assets/hero-parliament.jpg';
import businessMarket from '@/assets/business-market.jpg';
import techInnovation from '@/assets/tech-innovation.jpg';
import sportsCricket from '@/assets/sports-cricket.jpg';

// Mock article data - in real app this would come from API
const articleData = {
  id: '1',
  title: 'Parliament Passes Historic Digital Governance Bill with Overwhelming Support',
  subtitle: 'The landmark legislation aims to revolutionize public services through digital transformation, making government services more accessible to citizens across the country.',
  image: heroParliament,
  category: 'Politics',
  author: 'Rajesh Sharma',
  authorBio: 'Senior Political Correspondent with over 15 years of experience covering Indian politics and policy.',
  publishedAt: 'December 10, 2024, 2:30 PM IST',
  readTime: '5 min read',
  views: 15420,
  content: `
    <p>In a historic move that marks a significant step towards India's digital future, the Parliament today passed the Digital Governance Bill with an overwhelming majority, receiving support from 342 members in the Lok Sabha and unanimous approval in the Rajya Sabha.</p>

    <p>The comprehensive legislation, which has been in development for over two years, promises to transform how citizens interact with government services, making them more accessible, transparent, and efficient through digital platforms.</p>

    <h3>Key Provisions of the Bill</h3>

    <p>The Digital Governance Bill encompasses several groundbreaking provisions that will reshape the administrative landscape of the country:</p>

    <ul>
      <li><strong>Unified Digital Identity:</strong> All citizens will have access to a single digital identity that can be used across all government services, eliminating the need for multiple documents and reducing bureaucratic delays.</li>
      <li><strong>AI-Powered Service Delivery:</strong> The integration of artificial intelligence in government processes will enable faster processing of applications and more personalized citizen services.</li>
      <li><strong>Blockchain-Based Records:</strong> Important government records and certificates will be maintained using blockchain technology, ensuring tamper-proof documentation and enhanced security.</li>
      <li><strong>Digital-First Approach:</strong> All new government services will be designed with a digital-first approach, with physical alternatives available only when necessary.</li>
    </ul>

    <h3>Implementation Timeline</h3>

    <p>The government has outlined an ambitious timeline for implementing the digital governance framework. The first phase, focusing on essential services like passport applications, tax filing, and social welfare schemes, will be rolled out within the next six months.</p>

    <p>"This is not just about digitization; it's about reimagining governance for the 21st century," said the Prime Minister while addressing the Parliament after the bill's passage. "We are creating a system that will serve our citizens better and make India a true digital leader on the global stage."</p>

    <h3>Industry Response</h3>

    <p>The technology industry has welcomed the bill with enthusiasm. Leading IT companies have already expressed interest in contributing to the digital infrastructure development, with several announcing partnerships to support the implementation process.</p>

    <p>The bill also includes provisions for data protection and privacy, addressing concerns raised by civil rights organizations. A dedicated Digital Rights Commission will be established to oversee the implementation and ensure citizen rights are protected throughout the digital transformation process.</p>

    <h3>Global Recognition</h3>

    <p>International observers have praised India's comprehensive approach to digital governance. The World Bank has indicated that this legislation could serve as a model for other developing nations looking to modernize their administrative systems.</p>

    <p>The successful passage of this bill demonstrates the government's commitment to leveraging technology for better governance and citizen service delivery, positioning India at the forefront of the global digital revolution.</p>
  `,
};

const relatedArticles = [
  {
    id: '2',
    title: 'How Digital Identity Will Transform Citizen Services',
    summary: 'An in-depth look at the technology behind India\'s new digital identity system.',
    image: techInnovation,
    category: 'Technology',
    author: 'Amit Kumar',
    publishedAt: '1 day ago',
    readTime: '4 min read',
    views: 8430,
  },
  {
    id: '3',
    title: 'Opposition Parties Support Digital Governance Initiative',
    summary: 'Rare bipartisan support emerges for government\'s digital transformation agenda.',
    image: heroParliament,
    category: 'Politics',
    author: 'Priya Mehta',
    publishedAt: '2 days ago',
    readTime: '3 min read',
    views: 6750,
  },
  {
    id: '4',
    title: 'Tech Giants Partner with Government for Digital Infrastructure',
    summary: 'Major technology companies announce collaboration for implementing digital governance.',
    image: businessMarket,
    category: 'Business',
    author: 'Vikram Singh',
    publishedAt: '3 days ago',
    readTime: '5 min read',
    views: 9120,
  },
];

export const ArticlePage = () => {
  const { id } = useParams();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = articleData.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // In real app, show toast notification
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
              {/* Article Header */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="bg-news-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {articleData.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {articleData.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {articleData.subtitle}
                </p>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium text-foreground">{articleData.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{articleData.publishedAt}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{articleData.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>{articleData.views.toLocaleString()} views</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center space-x-3 mb-8">
                  <span className="text-sm font-medium text-foreground">Share:</span>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleShare('facebook')}
                      className="p-2"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleShare('twitter')}
                      className="p-2"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleShare('linkedin')}
                      className="p-2"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleShare('copy')}
                      className="p-2"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <img 
                  src={articleData.image} 
                  alt={articleData.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="p-6 md:p-8">
                <div 
                  className="prose prose-lg max-w-none text-foreground"
                  dangerouslySetInnerHTML={{ __html: articleData.content }}
                />

                {/* Author Bio */}
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-news-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {articleData.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{articleData.author}</h4>
                      <p className="text-sm text-muted-foreground">{articleData.authorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-foreground">Tags:</span>
                    {['Digital Governance', 'Parliament', 'Technology', 'Policy', 'India'].map((tag) => (
                      <span 
                        key={tag}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-news-primary">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <NewsCard 
                    key={article.id}
                    {...article}
                    variant="small"
                    className="border border-border"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};