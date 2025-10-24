'use client';

import { useRef } from 'react';
import CompanyRoleForm from './CompanyRoleForm';
import CultureRatingsForm from './CultureRatingsForm';
import VerificationStep from './VerificationStep';
import NarrativeSectionForm from './NarrativeSectionForm';

export default function FormWrapper() {
  const companyFormRef = useRef<HTMLFormElement>(null);
  const cultureFormRef = useRef<HTMLFormElement>(null);
  const narrativeSectionRef = useRef<HTMLFormElement>(null);
  const verificationFormRef = useRef<HTMLFormElement>(null);

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Get the form elements inside the divs
      const companyForm = companyFormRef.current?.querySelector('form') as HTMLFormElement;
      const cultureForm = cultureFormRef.current?.querySelector('form') as HTMLFormElement;
      const verificationForm = verificationFormRef.current?.querySelector('form') as HTMLFormElement;

      // Convert FormData to objects
      const companyData = companyForm ? Object.fromEntries(new FormData(companyForm)) : {};
      const cultureData = cultureForm ? Object.fromEntries(new FormData(cultureForm)) : {};
      const verificationData = verificationForm ? Object.fromEntries(new FormData(verificationForm)) : {};

      const payload = {
        companyRole: companyData,
        cultureRatings: cultureData,
        verification: verificationData,
      };

      console.log('All Form Data Submitted:', payload);

      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Success:', result);
        alert('Review submitted successfully!');
      } else {
        console.error('Error:', result);
        alert('Error: ' + (result.error || 'Failed to submit review'));
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit review');
    }
  };

  return (
    <form onSubmit={handleFinalSubmit} className="space-y-16">
      <div ref={companyFormRef}>
        <CompanyRoleForm />
      </div>
      <div ref={cultureFormRef}>
        <CultureRatingsForm />
      </div>
      <div ref={narrativeSectionRef}>
        <NarrativeSectionForm/>
      </div>
      <div ref={verificationFormRef}>
        <VerificationStep />
      </div>

      {/* Final Submit Button */}
      <div className="border-t pt-8" style={{ borderColor: '#b9cd36' }}>
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            className="px-8 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl cursor-pointer border-2"
            style={{
              borderColor: '#b9cd36',
              color: '#f2fbfa',
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl cursor-pointer text-lg"
            style={{
              backgroundColor: '#b9cd36',
              color: '#28433e',
            }}
          >
            Submit Review
          </button>
        </div>
      </div>
    </form>
  );
}
