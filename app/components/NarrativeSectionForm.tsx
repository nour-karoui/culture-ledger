'use client';

import { useState } from 'react';


interface CultureFormData {
  pros: string;
  cons: string;
  adviceToLeadership: string;
  recommendToWork: 'yes' | 'no' | 'maybe' | '';
}

export default function NarrativeSectionForm() {
  const [formData, setFormData] = useState<CultureFormData>({
    pros: '',
    cons: '',
    adviceToLeadership: '',
    recommendToWork: '',
  });

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecommendationChange = (value: 'yes' | 'no' | 'maybe') => {
    setFormData((prev) => ({
      ...prev,
      recommendToWork: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Culture Form Data:', formData);
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="border-b pb-8 animate-fadeIn" style={{ borderColor: '#b9cd36' }}>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#f2fbfa' }}>
          Narrative Section
        </h2>

        {/* Pros */}
        <div className="mb-6">
          <label htmlFor="pros" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            Pros
          </label>
          <textarea
            id="pros"
            name="pros"
            value={formData.pros}
            onChange={handleTextFieldChange}
            placeholder="What did you like about working here?"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 resize-none focus:scale-105 focus:shadow-lg cursor-text"
            rows={4}
            style={{
              borderColor: '#b9cd36',
              backgroundColor: '#f2fbfa',
              color: '#28433e',
            }}
          />
        </div>

        {/* Cons */}
        <div className="mb-6">
          <label htmlFor="cons" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            Cons
          </label>
          <textarea
            id="cons"
            name="cons"
            value={formData.cons}
            onChange={handleTextFieldChange}
            placeholder="What could be improved?"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 resize-none focus:scale-105 focus:shadow-lg cursor-text"
            rows={4}
            style={{
              borderColor: '#b9cd36',
              backgroundColor: '#f2fbfa',
              color: '#28433e',
            }}
          />
        </div>

        {/* Advice to Leadership */}
        <div className="mb-6">
          <label htmlFor="adviceToLeadership" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            Advice to Leadership
          </label>
          <textarea
            id="adviceToLeadership"
            name="adviceToLeadership"
            value={formData.adviceToLeadership}
            onChange={handleTextFieldChange}
            placeholder="Any advice or suggestions for the leadership team?"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 resize-none focus:scale-105 focus:shadow-lg cursor-text"
            rows={4}
            style={{
              borderColor: '#b9cd36',
              backgroundColor: '#f2fbfa',
              color: '#28433e',
            }}
          />
        </div>

        {/* Would you recommend working here */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-4" style={{ color: '#b9cd36' }}>
            Would you recommend working here?
          </label>
          <div className="flex gap-6">
            {(['yes', 'no', 'maybe'] as const).map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`recommend-${option}`}
                  name="recommendToWork"
                  value={option}
                  checked={formData.recommendToWork === option}
                  onChange={() => handleRecommendationChange(option)}
                  className="h-4 w-4 focus:outline-none"
                  style={{
                    accentColor: '#b9cd36',
                  }}
                />
                <label
                  htmlFor={`recommend-${option}`}
                  className="ml-2 text-sm font-medium capitalize"
                  style={{ color: '#f2fbfa' }}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
