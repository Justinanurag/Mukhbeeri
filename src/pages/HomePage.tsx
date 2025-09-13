import { Header } from '@/components/Header';
import { BreakingNewsTicker } from '@/components/BreakingNewsTicker';
import { NewsCard } from '@/components/NewsCard';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import heroParliament from '@/assets/hero-parliament.jpg';
import businessMarket from '@/assets/business-market.jpg';
import techInnovation from '@/assets/tech-innovation.jpg';
import sportsCricket from '@/assets/sports-cricket.jpg';
import environmentEnergy from '@/assets/environment-energy.jpg';

const heroStories = [
  {
    id: '1',
    title: 'Parliament Passes Historic Digital Governance Bill with Overwhelming Support',
    summary: 'The landmark legislation aims to revolutionize public services through digital transformation, making government services more accessible to citizens across the country.',
    image: heroParliament,
    category: 'Politics',
    author: 'Rajesh Sharma',
    publishedAt: '2 hours ago',
    readTime: '5 min read',
    views: 15420,
  },
];

const topStories = [
  {
    id: '2',
    title: 'Indian Startup Ecosystem Reaches $100 Billion Valuation Milestone',
    summary: 'The Indian startup ecosystem has achieved a significant milestone with combined valuations crossing $100 billion, driven by fintech and e-commerce sectors.',
    image: businessMarket,
    category: 'Business',
    author: 'Priya Mehta',
    publishedAt: '4 hours ago',
    readTime: '3 min read',
    views: 12350,
  },
  {
    id: '3',
    title: 'Revolutionary AI Research Center Opens in Bangalore',
    summary: 'The new research facility will focus on developing AI solutions for healthcare, education, and sustainable development, attracting global tech talent.',
    image: techInnovation,
    category: 'Technology',
    author: 'Amit Kumar',
    publishedAt: '6 hours ago',
    readTime: '4 min read',
    views: 9870,
  },
  {
    id: '4',
    title: 'Indian Cricket Team Wins Historic Series Against Australia',
    summary: 'In a thrilling finale, India secured a 3-1 series victory, marking their best performance on Australian soil in decades.',
    image: sportsCricket,
    category: 'Sports',
    author: 'Vikram Singh',
    publishedAt: '8 hours ago',
    readTime: '2 min read',
    views: 18750,
  },
  {
    id: '5',
    title: 'India Launches Ambitious Renewable Energy Initiative',
    summary: 'The government unveiled a comprehensive plan to achieve 500 GW renewable energy capacity by 2030, positioning India as a global climate leader.',
    image: environmentEnergy,
    category: 'Environment',
    author: 'Kavitha Reddy',
    publishedAt: '10 hours ago',
    readTime: '6 min read',
    views: 8640,
  },
];

const categoryNews = {
  india: [
    {
      id: '6',
      title: 'New Education Policy Shows Promising Results in Rural Schools',
      summary: 'Student enrollment and learning outcomes improve significantly in rural areas.',
      image: techInnovation,
      category: 'India',
      author: 'Anjali Gupta',
      publishedAt: '12 hours ago',
      readTime: '4 min read',
      views: 5420,
    },
    {
      id: '7',
      title: 'Urban Development Projects Transform Tier-2 Cities',
      summary: 'Smart city initiatives bring modern infrastructure to emerging urban centers.',
      image: businessMarket,
      category: 'India',
      author: 'Suresh Patel',
      publishedAt: '14 hours ago',
      readTime: '3 min read',
      views: 4320,
    },
  ],
  world: [
    {
      id: '8',
      title: 'Global Climate Summit Reaches Breakthrough Agreement',
      summary: 'World leaders commit to accelerated carbon reduction targets.',
      image: environmentEnergy,
      category: 'World',
      author: 'Maria Garcia',
      publishedAt: '1 day ago',
      readTime: '5 min read',
      views: 7890,
    },
    {
      id: '9',
      title: 'International Trade Relations Show Signs of Recovery',
      summary: 'Emerging markets benefit from renewed global cooperation.',
      image: businessMarket,
      category: 'World',
      author: 'James Wilson',
      publishedAt: '1 day ago',
      readTime: '4 min read',
      views: 6210,
    },
  ],
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingNewsTicker />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-news-primary">
                Top Story
              </h2>
              <div className="mb-8">
                {heroStories.map((story) => (
                  <NewsCard 
                    key={story.id}
                    {...story}
                    variant="hero"
                    className="border border-border"
                  />
                ))}
              </div>
            </section>

            {/* Featured Stories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-news-primary">
                Featured Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topStories.map((story) => (
                  <NewsCard 
                    key={story.id}
                    {...story}
                    className="border border-border"
                  />
                ))}
              </div>
            </section>

            {/* Category Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border flex items-center">
                  <span className="w-1 h-6 bg-categories-india mr-3"></span>
                  India News
                </h2>
                <div className="space-y-4">
                  {categoryNews.india.map((story) => (
                    <NewsCard 
                      key={story.id}
                      {...story}
                      variant="horizontal"
                      className="border-b border-border pb-4 last:border-b-0"
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border flex items-center">
                  <span className="w-1 h-6 bg-categories-world mr-3"></span>
                  World News
                </h2>
                <div className="space-y-4">
                  {categoryNews.world.map((story) => (
                    <NewsCard 
                      key={story.id}
                      {...story}
                      variant="horizontal"
                      className="border-b border-border pb-4 last:border-b-0"
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-news-primary text-white px-8 py-3 rounded-md hover:bg-news-primary/90 transition-colors font-medium">
                Load More Stories
              </button>
            </div>
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