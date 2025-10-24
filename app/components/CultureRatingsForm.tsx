'use client';

import { useState } from 'react';

const RATING_ITEMS = [
  'Leadership',
  'Communication',
  'Work-Life Balance',
  'Diversity and Inclusion',
  'Growth and Development',
  'Compensation and Benefits',
  'Psychological Safety',
];

interface RatingItem {
  rating: number;
  comment: string;
}

interface CultureFormData {
  ratings: Record<string, RatingItem>;
}

export default function CultureRatingsForm() {
  const [formData, setFormData] = useState<CultureFormData>({
    ratings: RATING_ITEMS.reduce(
      (acc, item) => ({
        ...acc,
        [item]: { rating: 0, comment: '' },
      }),
      {}
    )
  });

  const handleStarClick = (item: string, rating: number) => {
    setFormData((prev) => ({
      ...prev,
      ratings: {
        ...prev.ratings,
        [item]: {
          ...prev.ratings[item],
          rating,
        },
      },
    }));
  };

  const handleCommentChange = (item: string, comment: string) => {
    setFormData((prev) => ({
      ...prev,
      ratings: {
        ...prev.ratings,
        [item]: {
          ...prev.ratings[item],
          comment,
        },
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Culture Form Data:', formData);
  };

  const renderStars = (item: string) => {
    const currentRating = formData.ratings[item]?.rating || 0;
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleStarClick(item, star)}
            className="text-2xl transition-all hover:scale-110 focus:outline-none"
            style={{
              color: star <= currentRating ? '#b9cd36' : '#538136',
              cursor: 'pointer',
            }}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="border-b pb-8 animate-fadeIn" style={{ borderColor: '#b9cd36' }}>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#f2fbfa' }}>
          Culture and Experience Ratings
        </h2>

        {/* Rating Items */}
        <div className="space-y-8 mb-8">
          {RATING_ITEMS.map((item) => (
            <div key={item} className="border-b pb-6" style={{ borderColor: '#538136' }}>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-3" style={{ color: '#b9cd36' }}>
                  {item}
                </label>
                {renderStars(item)}
              </div>

              <textarea
                placeholder="Add a comment (optional)"
                value={formData.ratings[item]?.comment || ''}
                onChange={(e) => handleCommentChange(item, e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 resize-none focus:scale-105 focus:shadow-lg cursor-text"
                rows={2}
                style={{
                  borderColor: '#b9cd36',
                  backgroundColor: '#f2fbfa',
                  color: '#28433e',
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </form>
  );
}
