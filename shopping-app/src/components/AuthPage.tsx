import React, { useState, useEffect } from 'react';
import { User, Phone } from 'lucide-react';

interface AuthPageProps {
  onComplete: (userData: { name: string; surname: string; phone: string }) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    phone: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateName = (name: string) => {
    if (name.length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can only contain letters';
    return '';
  };

  const validateSurname = (surname: string) => {
    if (surname.length < 2) return 'Surname must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(surname)) return 'Surname can only contain letters';
    return '';
  };

  const validatePhone = (phone: string) => {
    if (phone.length < 10) return 'Phone number must be at least 10 digits';
    if (!/^\+?[\d\s\-\(\)]+$/.test(phone)) return 'Invalid phone number format';
    return '';
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Validate field
    let error = '';
    switch (field) {
      case 'name':
        error = validateName(value);
        break;
      case 'surname':
        error = validateSurname(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  useEffect(() => {
    const nameValid = formData.name.length >= 2 && validateName(formData.name) === '';
    const surnameValid = formData.surname.length >= 2 && validateSurname(formData.surname) === '';
    const phoneValid = formData.phone.length >= 10 && validatePhone(formData.phone) === '';
    
    setIsFormValid(nameValid && surnameValid && phoneValid);
  }, [formData]);

  const handleSubmit = () => {
    if (isFormValid) {
      onComplete(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-white to-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-brand-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-brand-white" />
            </div>
            <h2 className="text-2xl font-bold text-brand-black mb-2">Welcome</h2>
            <p className="text-gray-600">Please enter your details to continue</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.name 
                    ? 'border-red-500 focus:border-red-500' 
                    : formData.name && !errors.name
                    ? 'border-green-500 focus:border-green-500'
                    : 'border-gray-300 focus:border-brand-dark-blue'
                }`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Surname Field */}
            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">
                Surname
              </label>
              <input
                type="text"
                value={formData.surname}
                onChange={(e) => handleInputChange('surname', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.surname 
                    ? 'border-red-500 focus:border-red-500' 
                    : formData.surname && !errors.surname
                    ? 'border-green-500 focus:border-green-500'
                    : 'border-gray-300 focus:border-brand-dark-blue'
                }`}
                placeholder="Enter your surname"
              />
              {errors.surname && <p className="text-red-500 text-sm mt-1">{errors.surname}</p>}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-500' 
                      : formData.phone && !errors.phone
                      ? 'border-green-500 focus:border-green-500'
                      : 'border-gray-300 focus:border-brand-dark-blue'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-8">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform ${
                isFormValid
                  ? 'bg-brand-dark-blue text-brand-white hover:bg-brand-navy hover:scale-105 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-8 h-2 bg-brand-dark-blue rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;