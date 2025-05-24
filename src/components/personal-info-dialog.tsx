"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, MapPin, Check, Mail, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PersonalInfoDialog() {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthday: "",
    location: "",
  })

  const [professionalData, setProfessionalData] = useState({
    occupation: "",
    experience: "",
  })

  const [coachingGoalsData, setCoachingGoalsData] = useState({
    interest: "",
    additionalInfo: "",
  })

  const [communicationData, setCommunicationData] = useState({
    preferences: [] as string[],
  })

  const steps = [
    { id: 1, label: "Personal Details", shortLabel: "Personal", completed: currentStep > 1, active: currentStep === 1 },
    {
      id: 2,
      label: "Professional Background",
      shortLabel: "Professional",
      completed: currentStep > 2,
      active: currentStep === 2,
    },
    { id: 3, label: "Coaching Goals", shortLabel: "Goals", completed: currentStep > 3, active: currentStep === 3 },
    {
      id: 4,
      label: "Communication Preferences",
      shortLabel: "Communication",
      completed: currentStep > 4,
      active: currentStep === 4,
    },
  ]

  const communicationOptions = [
    { id: "email", label: "My active email", icon: Mail },
    { id: "facebook", label: "My Facebook Messenger", icon: MessageCircle },
    { id: "whatsapp", label: "My WhatsApp number", icon: MessageCircle },
    { id: "phone", label: "Call me on my phone", icon: Phone },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleProfessionalDataChange = (field: string, value: string) => {
    setProfessionalData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCoachingGoalsDataChange = (field: string, value: string) => {
    setCoachingGoalsData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCommunicationPreferenceToggle = (preference: string) => {
    setCommunicationData((prev) => ({
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter((p) => p !== preference)
        : [...prev.preferences, preference],
    }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Handle form submission
      console.log("Form submitted:", {
        formData,
        professionalData,
        coachingGoalsData,
        communicationData,
      })
      setOpen(false)
      // Reset form or show success message
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    } else {
      setOpen(false)
    }
  }

  const isStep1Valid = formData.fullName && formData.email && formData.phone && formData.birthday && formData.location
  const isStep2Valid = professionalData.occupation && professionalData.experience
  const isStep3Valid = coachingGoalsData.interest.trim() !== ""
  const isStep4Valid = communicationData.preferences.length > 0
  const isCurrentStepValid =
    currentStep === 1
      ? isStep1Valid
      : currentStep === 2
        ? isStep2Valid
        : currentStep === 3
          ? isStep3Valid
          : currentStep === 4
            ? isStep4Valid
            : true

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="cursor-pointer py-2 px-4 sm:py-2 sm:px-6 bg-[#243B2D] rounded-full text-white hover:bg-[#1a2b1f] transition-all duration-200 transform hover:scale-105 text-sm sm:text-base">
          Get Started
        </button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[500px] h-[95vh] sm:h-auto sm:max-h-[90vh] p-0 gap-0 overflow-y-auto">
        <DialogHeader className="p-4 sm:p-6 pb-3 sm:pb-4 space-y-2 sm:space-y-3 sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-gray-100 transition-colors flex-shrink-0"
              onClick={handleBack}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="text-center flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground truncate">Personal Information Form</p>
              <DialogTitle className="text-base sm:text-lg font-semibold text-cyan-500 truncate">
                First Bundle
              </DialogTitle>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Digital Products</h2>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Coaching</h3>
          </div>
        </DialogHeader>

        <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex-1">
          {/* Enhanced Progress Steps - Responsive */}
          <div className="mb-6 sm:mb-8">
            {/* Mobile Progress - Horizontal Scroll */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:hidden">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${step.completed
                          ? "bg-green-600 text-white shadow-lg"
                          : step.active
                            ? "bg-cyan-500 text-white shadow-lg ring-2 ring-cyan-100"
                            : "bg-gray-300 text-gray-600"
                        }`}
                    >
                      {step.completed ? <Check className="h-3 w-3" /> : step.id}
                    </div>
                    <span
                      className={`text-xs mt-1 transition-colors duration-300 whitespace-nowrap ${step.active ? "text-cyan-600 font-medium" : "text-gray-600"
                        }`}
                    >
                      {step.shortLabel}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gray-300 mx-1">
                      <div
                        className={`h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-500 ${step.completed ? "w-full" : "w-0"
                          }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Progress - Full Layout */}
            <div className="hidden sm:flex items-center justify-between relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${step.completed
                          ? "bg-green-600 text-white shadow-lg"
                          : step.active
                            ? "bg-cyan-500 text-white shadow-lg ring-4 ring-cyan-100"
                            : "bg-gray-300 text-gray-600"
                        }`}
                    >
                      {step.completed ? <Check className="h-4 w-4" /> : step.id}
                    </div>
                    <span
                      className={`text-xs mt-2 transition-colors duration-300 text-center max-w-[80px] ${step.active ? "text-cyan-600 font-medium" : "text-gray-600"
                        }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute left-10 top-5 w-full h-0.5 -z-10">
                      <div className="h-full bg-gray-300 rounded-full">
                        <div
                          className={`h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-500 ${step.completed ? "w-full" : "w-0"
                            }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          {currentStep === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h4 className="text-lg font-semibold text-gray-900">Personal Details</h4>
                <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full w-fit">
                  Step {currentStep} of 4
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="e.g. John Layla"
                    className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g. johnLayla@email.com"
                    className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="e.g. +63 912 345 6789"
                    className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthday" className="text-sm font-medium text-gray-700">
                    Birthday *
                  </Label>
                  <div className="relative">
                    <Input
                      id="birthday"
                      type="date"
                      placeholder="e.g. 1996-08-15"
                      className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                      value={formData.birthday}
                      onChange={(e) => handleInputChange("birthday", e.target.value)}
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                    Location (City & Country) *
                  </Label>
                  <div className="relative">
                    <Input
                      id="location"
                      placeholder="e.g. Quezon City, Philippines"
                      className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Enhanced Privacy Notice */}
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-yellow-400 rounded-md flex items-center justify-center shadow-sm">
                    <span className="text-xs">🔒</span>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong className="text-yellow-800">Privacy Note:</strong> Your personal information is 100% safe with
                  us. We respect your privacy and will never share your details without your consent.
                </p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h4 className="text-lg font-semibold text-gray-900">Professional Background</h4>
                <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full w-fit">
                  Step {currentStep} of 4
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="occupation" className="text-sm font-medium text-gray-700">
                    Occupation / Business Type
                  </Label>
                  <Input
                    id="occupation"
                    placeholder="e.g. Freelance Graphic Designer"
                    className="transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-11 sm:h-10"
                    value={professionalData.occupation}
                    onChange={(e) => handleProfessionalDataChange("occupation", e.target.value)}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Do you have prior experience with digital products?
                    </Label>
                    <p className="text-xs text-gray-500 mt-1">
                      This could include creating, selling, or even just exploring digital content like eBooks, courses,
                      templates, etc.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100">
                      <input
                        type="radio"
                        name="experience"
                        value="experienced"
                        checked={professionalData.experience === "experienced"}
                        onChange={(e) => handleProfessionalDataChange("experience", e.target.value)}
                        className="mt-1 text-cyan-500 focus:ring-cyan-500 w-4 h-4"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        Yes, I've already created or sold digital products.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100">
                      <input
                        type="radio"
                        name="experience"
                        value="learning"
                        checked={professionalData.experience === "learning"}
                        onChange={(e) => handleProfessionalDataChange("experience", e.target.value)}
                        className="mt-1 text-cyan-500 focus:ring-cyan-500 w-4 h-4"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        I've explored or learned about digital products, but haven't launched anything yet.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100">
                      <input
                        type="radio"
                        name="experience"
                        value="beginner"
                        checked={professionalData.experience === "beginner"}
                        onChange={(e) => handleProfessionalDataChange("experience", e.target.value)}
                        className="mt-1 text-cyan-500 focus:ring-cyan-500 w-4 h-4"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        No, I'm completely new and have no experience at all.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h4 className="text-lg font-semibold text-gray-900">Coaching Goals</h4>
                <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full w-fit">
                  Step {currentStep} of 4
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-sm font-medium text-gray-700">
                    Why are you interested in Digital Products Coaching?
                  </Label>
                  <textarea
                    id="interest"
                    placeholder="Type here..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none text-sm"
                    value={coachingGoalsData.interest}
                    onChange={(e) => handleCoachingGoalsDataChange("interest", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
                    Anything else you'd like us to know?
                  </Label>
                  <textarea
                    id="additionalInfo"
                    placeholder="Type here..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none text-sm"
                    value={coachingGoalsData.additionalInfo}
                    onChange={(e) => handleCoachingGoalsDataChange("additionalInfo", e.target.value)}
                  />
                </div>
              </div>

              {/* Privacy Notice for Step 3 */}
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-yellow-400 rounded-md flex items-center justify-center shadow-sm">
                    <span className="text-xs">🔒</span>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong className="text-yellow-800">Privacy Note:</strong> Your personal information is 100% safe with
                  us. We respect your privacy and will never share your details without your consent.
                </p>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h4 className="text-lg font-semibold text-gray-900">Communication Preferences</h4>
                <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full w-fit">
                  Step {currentStep} of 4
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    How would you prefer to be contacted for coaching?
                  </Label>
                  <p className="text-xs text-gray-500 mt-1">
                    Select all communication methods that work best for you. We'll use these to schedule sessions and
                    send updates.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {communicationOptions.map((option) => {
                    const IconComponent = option.icon
                    const isSelected = communicationData.preferences.includes(option.id)
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleCommunicationPreferenceToggle(option.id)}
                        className={`flex items-center gap-3 p-3 sm:p-4 border rounded-lg text-left transition-all duration-200 active:scale-[0.98] ${isSelected
                            ? "border-cyan-500 bg-cyan-50 text-cyan-700"
                            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100"
                          }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isSelected ? "bg-cyan-500 text-white" : "bg-gray-200 text-gray-600"
                            }`}
                        >
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium flex-1">{option.label}</span>
                        {isSelected && (
                          <div className="flex-shrink-0">
                            <Check className="h-4 w-4 text-cyan-500" />
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Privacy Notice for Step 4 */}
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-yellow-400 rounded-md flex items-center justify-center shadow-sm">
                    <span className="text-xs">🔒</span>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong className="text-yellow-800">Privacy Note:</strong> Your personal information is 100% safe with
                  us. We respect your privacy and will never share your details without your consent.
                </p>
              </div>
            </div>
          )}

          {/* Enhanced Next/Submit Button */}
          <div className="sticky bottom-0 bg-white pt-4 mt-6 border-t border-gray-100">
            <Button
              className={`w-full py-3 sm:py-3 text-base font-medium transition-all duration-200 ${isCurrentStepValid
                  ? "bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl active:scale-[0.98]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              size="lg"
              onClick={handleNext}
              disabled={!isCurrentStepValid}
            >
              {currentStep === 4 ? "Let's Do This" : "Next"}
            </Button>

            {/* Progress indicator */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div
                className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <PersonalInfoDialog />
    </div>
  )
}
