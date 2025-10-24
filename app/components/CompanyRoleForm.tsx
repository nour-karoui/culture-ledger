'use client';

import { useState } from 'react';

const EMPLOYMENT_TYPES = [
  { value: 'part-time', label: 'Part Time' },
  { value: 'full-time', label: 'Full Time' },
  { value: 'internship', label: 'Internship' },
  { value: 'freelance', label: 'Freelance' },
];

const DEPARTMENTS = [
  'Marketing',
  'Human Resources',
  'Information Technology',
  'Sales',
  'Finance',
  'Operations',
  'Product',
  'Engineering',
  'Design',
  'Customer Support',
  'Legal',
  'Administration',
];

const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

interface FormData {
  companyName: string;
  employmentType: string;
  jobTitle: string;
  department: string;
  workDuration: string;
  startDate: string;
  endDate: string;
  isRemote: boolean;
  country: string;
  city: string;
}

export default function CompanyRoleForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    employmentType: '',
    jobTitle: '',
    department: '',
    workDuration: '',
    startDate: '',
    endDate: '',
    isRemote: false,
    country: '',
    city: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
      ...(checked && name === 'isRemote' && { country: '', city: '' }),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="border-b pb-8 animate-fadeIn" style={{ borderColor: '#b9cd36' }}>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#f2fbfa' }}>Company Role and Info</h2>

        {/* Company Name */}
        <div className="mb-6">
          <label htmlFor="companyName" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Enter company name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg cursor-text"
            style={{
              borderColor: '#b9cd36',
              backgroundColor: '#f2fbfa',
              color: '#28433e',
            }}
            required
          />
        </div>

        {/* Employment Type */}
        <div className="mb-6">
          <label htmlFor="employmentType" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            Employment Type
          </label>
          <select
            id="employmentType"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg cursor-pointer"
            style={{
              borderColor: '#b9cd36',
              backgroundColor: '#f2fbfa',
              color: '#28433e',
            }}
            required
          >
            <option value="">Select employment type</option>
            {EMPLOYMENT_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Job Title */}
        <div className="mb-6">
          <label htmlFor="jobTitle" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            placeholder="Enter job title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg cursor-text"
            style={{
              borderColor: '#b9cd36',
              backgroundColor: '#f2fbfa',
              color: '#28433e',
            }}
            required
          />
        </div>

        {/* Department */}
        <div className="mb-6">
          <label htmlFor="department" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg cursor-pointer"
            style={{
              borderColor: '#b9cd36',
              backgroundColor: '#f2fbfa',
              color: '#28433e',
            }}
            required
          >
            <option value="">Select department</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Work Duration */}
        <div className="mb-6">
          <label htmlFor="workDuration" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            Work Duration
          </label>
          <input
            type="text"
            id="workDuration"
            name="workDuration"
            value={formData.workDuration}
            onChange={handleInputChange}
            placeholder="e.g., 2 years 3 months"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg cursor-text"
            style={{
              borderColor: '#b9cd36',
              backgroundColor: '#f2fbfa',
              color: '#28433e',
            }}
          />
        </div>

        {/* When You Worked There - Date Pickers */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
            When You Worked There
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-xs font-medium mb-1" style={{ color: '#f2fbfa' }}>
                From
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg cursor-pointer"
                style={{
                  borderColor: '#b9cd36',
                  backgroundColor: '#f2fbfa',
                  color: '#28433e',
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-xs font-medium mb-1" style={{ color: '#f2fbfa' }}>
                To
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg cursor-pointer"
                style={{
                  borderColor: '#b9cd36',
                  backgroundColor: '#f2fbfa',
                  color: '#28433e',
                }}
                required
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="isRemote"
              name="isRemote"
              checked={formData.isRemote}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded focus:outline-none"
              style={{
                accentColor: '#b9cd36',
              }}
            />
            <label htmlFor="isRemote" className="ml-2 text-sm font-medium" style={{ color: '#b9cd36' }}>
              Remote Work
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
                Country
              </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  disabled={formData.isRemote}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  style={{
                    borderColor: '#b9cd36',
                    backgroundColor: '#f2fbfa',
                    color: '#28433e',
                  }}
                  required={!formData.isRemote}
                >
                  <option value="">Select country</option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2" style={{ color: '#b9cd36' }}>
                City
              </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  disabled={formData.isRemote}
                  placeholder="Enter city"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-text"
                  style={{
                    borderColor: '#b9cd36',
                    backgroundColor: '#f2fbfa',
                    color: '#28433e',
                  }}
                  required={!formData.isRemote}
                />
            </div>
          </div>
        </div>

      </div>
    </form>
  );
}
