const breakingNews = [
  "Prime Minister announces new digital initiative for rural development",
  "Sensex crosses 75,000 mark for the first time, investors optimistic",
  "Indian cricket team wins series 3-1, captain praises team effort",
  "New climate policy framework launched to combat global warming",
  "Technology sector sees 15% growth, creating millions of new jobs",
];

export const BreakingNewsTicker = () => {
  return (
    <div className="bg-breaking border-b border-border overflow-hidden">
      <div className="flex items-center">
        <div className="bg-white text-breaking px-4 py-2 font-semibold text-sm whitespace-nowrap flex-shrink-0">
          BREAKING NEWS
        </div>
        <div className="flex-1 py-2 relative overflow-hidden">
          <div className="animate-ticker flex items-center space-x-12 whitespace-nowrap">
            {breakingNews.map((news, index) => (
              <span key={index} className="text-white text-sm font-medium">
                • {news}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};