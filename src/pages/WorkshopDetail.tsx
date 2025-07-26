import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Check, QrCode } from 'lucide-react';
import { workshops } from '../data/workshops';

const WorkshopDetail = () => {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === id);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!workshop) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-sage-800">Workshop not found</h1>
      </div>
    );
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                {workshop.category}
              </span>
              <span className="bg-terracotta-100 text-terracotta-700 px-3 py-1 rounded-full text-sm font-medium">
                {workshop.difficulty}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sage-800 leading-tight">
              {workshop.title}
            </h1>
            <p className="text-lg text-sage-600 leading-relaxed">
              {workshop.fullDescription}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-sage-600">
                <Calendar className="h-5 w-5 mr-2 text-terracotta-600" />
                <span>{workshop.date}</span>
              </div>
              <div className="flex items-center text-sage-600">
                <Clock className="h-5 w-5 mr-2 text-terracotta-600" />
                <span>{workshop.time}</span>
              </div>
              <div className="flex items-center text-sage-600">
                <MapPin className="h-5 w-5 mr-2 text-terracotta-600" />
                <span>{workshop.location}</span>
              </div>
              <div className="flex items-center text-sage-600">
                <Users className="h-5 w-5 mr-2 text-terracotta-600" />
                <span>Max {workshop.maxParticipants} people</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-terracotta-600">
                ₹{workshop.price}
              </div>
              <div className="text-sm text-sage-500">
                Duration: {workshop.duration}
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={workshop.image} 
              alt={workshop.title}
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Agenda */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
                Workshop Agenda
              </h2>
              <div className="space-y-3">
                {workshop.agenda.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-terracotta-600">{index + 1}</span>
                    </div>
                    <span className="text-sage-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
                Materials Provided
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {workshop.materials.map((material, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-terracotta-600" />
                    <span className="text-sage-600">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Workshop Images */}
            {workshop.pastImages && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
                  Previous Workshop Highlights
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {workshop.pastImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Previous workshop ${index + 1}`}
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Registration Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {!showRegistration ? (
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-serif font-bold text-sage-800 mb-4">
                    Register for this Workshop
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sage-600">Price</span>
                      <span className="text-2xl font-bold text-terracotta-600">₹{workshop.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sage-600">Duration</span>
                      <span className="text-sage-800">{workshop.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sage-600">Available Spots</span>
                      <span className="text-sage-800">{workshop.maxParticipants} seats</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowRegistration(true)}
                    className="w-full bg-terracotta-600 text-white py-4 px-6 rounded-xl hover:bg-terracotta-700 transition-colors duration-200 font-medium text-lg"
                  >
                    Register Now
                  </button>
                </div>
              ) : !showPayment ? (
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-serif font-bold text-sage-800 mb-4">
                    Registration Form
                  </h3>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-sage-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sage-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sage-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sage-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                        placeholder="Any questions or special requirements?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-terracotta-600 text-white py-4 px-6 rounded-xl hover:bg-terracotta-700 transition-colors duration-200 font-medium"
                    >
                      Proceed to Payment
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-serif font-bold text-sage-800 mb-4">
                    Payment Information
                  </h3>
                  <div className="text-center space-y-4">
                    <div className="bg-sage-50 p-6 rounded-xl">
                      <QrCode className="h-32 w-32 mx-auto text-sage-400 mb-4" />
                      <p className="text-sm text-sage-600 mb-2">
                        Scan this QR code with any UPI app
                      </p>
                      <div className="text-lg font-semibold text-terracotta-600">
                        ₹{workshop.price}
                      </div>
                    </div>
                    <div className="text-left space-y-2">
                      <h4 className="font-semibold text-sage-800">Payment Instructions:</h4>
                      <ol className="text-sm text-sage-600 space-y-1 list-decimal list-inside">
                        <li>Scan the QR code with Google Pay, PhonePe, or Paytm</li>
                        <li>Pay ₹{workshop.price}</li>
                        <li>Take a screenshot of payment confirmation</li>
                        <li>Send the screenshot to <strong>ihabyhimani@gmail.com</strong></li>
                        <li>You'll receive a confirmation email within 24 hours</li>
                      </ol>
                    </div>
                    <div className="bg-terracotta-50 p-4 rounded-lg">
                      <p className="text-sm text-terracotta-800">
                        <strong>Note:</strong> Your spot is reserved for 24 hours pending payment confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopDetail;