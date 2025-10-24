'use client';

import { useState } from 'react';

type VerificationMethod = 'email' | 'linkedin' | 'upload' | 'skip' | '';

interface VerificationData {
  method: VerificationMethod;
  email: string;
  uploadedFile: File | null;
  emailSent: boolean;
}

export default function VerificationStep() {
  const [verificationData, setVerificationData] = useState<VerificationData>({
    method: '',
    email: '',
    uploadedFile: null,
    emailSent: false,
  });

  const handleMethodChange = (method: VerificationMethod) => {
    setVerificationData((prev) => ({
      ...prev,
      method,
      email: '',
      uploadedFile: null,
      emailSent: false,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVerificationData((prev) => ({
        ...prev,
        uploadedFile: file,
      }));
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationData.email) {
      console.log('Sending verification email to:', verificationData.email);
      setVerificationData((prev) => ({
        ...prev,
        emailSent: true,
      }));
    }
  };

  const handleLinkedInLogin = () => {
    console.log('Redirecting to LinkedIn OAuth');
    // In a real app, this would redirect to LinkedIn OAuth
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verification Data:', verificationData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="border-b pb-8 animate-fadeIn" style={{ borderColor: '#b9cd36' }}>
        <h2 className="text-2xl font-semibold mb-2" style={{ color: '#f2fbfa' }}>
          Verification
        </h2>

        {/* Disclaimer */}
        <div className="mb-8 p-4 rounded-lg border-l-4" style={{ borderLeftColor: '#b9cd36', backgroundColor: 'rgba(185, 205, 54, 0.1)' }}>
          <p className="text-sm" style={{ color: '#f2fbfa' }}>
            <span className="font-semibold" style={{ color: '#b9cd36' }}>⚠️ Important:</span> The verification information you provide in this section will <strong>NOT</strong> be saved in our database. It is used only to confirm that your review is legitimate and that you have genuine work experience at this company.
          </p>
        </div>

        <p className="text-sm mb-6" style={{ color: '#b9cd36' }}>
          How would you like to verify your employment?
        </p>

        {/* Verification Options */}
        <div className="space-y-4 mb-8">
          {/* Company Email Option */}
          <div
            className="border-2 rounded-lg p-4 transition-all duration-300 cursor-pointer hover:shadow-lg"
            style={{
              borderColor: verificationData.method === 'email' ? '#b9cd36' : '#538136',
              backgroundColor: verificationData.method === 'email' ? 'rgba(185, 205, 54, 0.1)' : 'transparent',
            }}
            onClick={() => handleMethodChange('email')}
          >
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="verification"
                value="email"
                checked={verificationData.method === 'email'}
                onChange={() => handleMethodChange('email')}
                className="mt-1"
                style={{ accentColor: '#b9cd36' }}
              />
              <div className="flex-1">
                <label className="block font-medium mb-2" style={{ color: '#b9cd36' }}>
                  📧 Company Email Verification
                </label>
                <p className="text-sm" style={{ color: '#f2fbfa' }}>
                  We'll send a verification email to your company email address
                </p>

                {verificationData.method === 'email' && (
                  <div className="mt-4 space-y-3 animate-slideUp">
                    <input
                      type="email"
                      placeholder="your.email@company.com"
                      value={verificationData.email}
                      onChange={handleEmailChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg cursor-text"
                      style={{
                        borderColor: '#b9cd36',
                        backgroundColor: '#f2fbfa',
                        color: '#28433e',
                      }}
                      required={verificationData.method === 'email' && !verificationData.emailSent}
                    />
                    {!verificationData.emailSent && (
                      <button
                        type="button"
                        onClick={handleSendEmail}
                        className="w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                        style={{
                          backgroundColor: '#b9cd36',
                          color: '#28433e',
                        }}
                      >
                        Send Verification Email
                      </button>
                    )}
                    {verificationData.emailSent && (
                      <div
                        className="p-3 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: 'rgba(185, 205, 54, 0.2)',
                          color: '#b9cd36',
                        }}
                      >
                        ✓ Email sent! Check your inbox for verification link
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* LinkedIn Option */}
          <div
            className="border-2 rounded-lg p-4 transition-all duration-300 cursor-pointer hover:shadow-lg"
            style={{
              borderColor: verificationData.method === 'linkedin' ? '#b9cd36' : '#538136',
              backgroundColor: verificationData.method === 'linkedin' ? 'rgba(185, 205, 54, 0.1)' : 'transparent',
            }}
            onClick={() => handleMethodChange('linkedin')}
          >
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="verification"
                value="linkedin"
                checked={verificationData.method === 'linkedin'}
                onChange={() => handleMethodChange('linkedin')}
                className="mt-1"
                style={{ accentColor: '#b9cd36' }}
              />
              <div className="flex-1">
                <label className="block font-medium mb-2" style={{ color: '#b9cd36' }}>
                  💼 LinkedIn Verification
                </label>
                <p className="text-sm" style={{ color: '#f2fbfa' }}>
                  Connect with your LinkedIn account to verify your employment
                </p>

                {verificationData.method === 'linkedin' && (
                  <div className="mt-4 animate-slideUp">
                    <button
                      type="button"
                      onClick={handleLinkedInLogin}
                      className="w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-white"
                      style={{ backgroundColor: '#0a66c2' }}
                    >
                      Continue with LinkedIn
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* File Upload Option */}
          <div
            className="border-2 rounded-lg p-4 transition-all duration-300 cursor-pointer hover:shadow-lg"
            style={{
              borderColor: verificationData.method === 'upload' ? '#b9cd36' : '#538136',
              backgroundColor: verificationData.method === 'upload' ? 'rgba(185, 205, 54, 0.1)' : 'transparent',
            }}
            onClick={() => handleMethodChange('upload')}
          >
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="verification"
                value="upload"
                checked={verificationData.method === 'upload'}
                onChange={() => handleMethodChange('upload')}
                className="mt-1"
                style={{ accentColor: '#b9cd36' }}
              />
              <div className="flex-1">
                <label className="block font-medium mb-2" style={{ color: '#b9cd36' }}>
                  📄 Upload Proof
                </label>
                <p className="text-sm" style={{ color: '#f2fbfa' }}>
                  Upload a payslip, offer letter, or employment contract
                </p>

                {verificationData.method === 'upload' && (
                  <div className="mt-4 animate-slideUp">
                    <label className="block">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <div
                        className="px-4 py-8 border-2 border-dashed rounded-lg text-center transition-all duration-300 cursor-pointer hover:scale-105"
                        style={{
                          borderColor: '#b9cd36',
                          backgroundColor: 'rgba(185, 205, 54, 0.05)',
                        }}
                      >
                        <p style={{ color: '#b9cd36' }} className="font-medium">
                          {verificationData.uploadedFile ? '✓ File Selected' : '📁 Click to upload or drag and drop'}
                        </p>
                        <p className="text-sm" style={{ color: '#f2fbfa' }}>
                          {verificationData.uploadedFile ? verificationData.uploadedFile.name : 'PDF, JPG, PNG (Max 10MB)'}
                        </p>
                      </div>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Skip Option */}
          <div
            className="border-2 rounded-lg p-4 transition-all duration-300 cursor-pointer hover:shadow-lg"
            style={{
              borderColor: verificationData.method === 'skip' ? '#b9cd36' : '#538136',
              backgroundColor: verificationData.method === 'skip' ? 'rgba(185, 205, 54, 0.1)' : 'transparent',
            }}
            onClick={() => handleMethodChange('skip')}
          >
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="verification"
                value="skip"
                checked={verificationData.method === 'skip'}
                onChange={() => handleMethodChange('skip')}
                className="mt-1"
                style={{ accentColor: '#b9cd36' }}
              />
              <div className="flex-1">
                <label className="block font-medium mb-2" style={{ color: '#b9cd36' }}>
                  ⏭️ Skip Verification
                </label>
                <p className="text-sm" style={{ color: '#f2fbfa' }}>
                  Continue without verification (your review may be marked as unverified)
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  );
}
