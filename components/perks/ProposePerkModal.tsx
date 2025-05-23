"use client"

import type React from "react"

import { useState } from "react"
import { X, Plus, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Predefined tags
const PREDEFINED_TAGS = [
  "AI Tools",
  "Development",
  "UX Design",
  "Hosting",
  "Analytics",
  "Marketing",
  "Productivity",
  "Security",
  "Database",
  "Communication",
]

// Predefined popup crews (ZuPass credentials)
const POPUP_CREWS = ["Zuzalu", "ZuConnect", "Vitalia", "AgoraCore", "Edge City", "Network State", "Popup City"]

interface ProposePerkModalProps {
  onClose: () => void
  onSubmit: (data: any) => void
}

export function ProposePerkModal({ onClose, onSubmit }: ProposePerkModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tag: "",
    benefit: "",
    redemptionSteps: [""],
    code: "",
    note: "",
    logo: null as File | null,
    submittedBy: "",
    popupCrew: "",
  })
  const [newTag, setNewTag] = useState("")
  const [showNewTagInput, setShowNewTagInput] = useState(false)
  const [availableTags, setAvailableTags] = useState(PREDEFINED_TAGS)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleRedemptionStepChange = (index: number, value: string) => {
    const newSteps = [...formData.redemptionSteps]
    newSteps[index] = value
    setFormData((prev) => ({ ...prev, redemptionSteps: newSteps }))
  }

  const addRedemptionStep = () => {
    setFormData((prev) => ({
      ...prev,
      redemptionSteps: [...prev.redemptionSteps, ""],
    }))
  }

  const removeRedemptionStep = (index: number) => {
    if (formData.redemptionSteps.length > 1) {
      const newSteps = [...formData.redemptionSteps]
      newSteps.splice(index, 1)
      setFormData((prev) => ({ ...prev, redemptionSteps: newSteps }))
    }
  }

  const handleAddNewTag = () => {
    if (newTag.trim()) {
      setAvailableTags((prev) => [...prev, newTag.trim()])
      setFormData((prev) => ({ ...prev, tag: newTag.trim() }))
      setNewTag("")
      setShowNewTagInput(false)
    }
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, logo: e.target.files![0] }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.tag) newErrors.tag = "Tag is required"
    if (!formData.benefit.trim()) newErrors.benefit = "Benefit is required"
    if (formData.redemptionSteps.some((step) => !step.trim())) {
      newErrors.redemptionSteps = "All redemption steps must be filled"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would handle the logo file upload here
      // For this demo, we'll just pass the form data
      onSubmit({
        ...formData,
        id: formData.name.toLowerCase().replace(/\s+/g, "-"),
        logo: formData.logo ? URL.createObjectURL(formData.logo) : null,
        submittedBy: formData.submittedBy || "anonymous",
        popupCrew: formData.popupCrew || "anonymous",
      })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="bg-gray-900 border border-green-500/30 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-green-500/30">
          <h2 className="text-xl font-bold text-green-400">Propose a New Perk</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-green-300">
                Perk Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Granola"
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400 focus:ring-green-400/20"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="description" className="text-green-300">
                Short Description (1 sentence)
              </Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="e.g., The AI notepad for people in back-to-back meetings"
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400 focus:ring-green-400/20"
              />
              {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
            </div>

            <div>
              <Label htmlFor="tag" className="text-green-300">
                Tag
              </Label>
              {!showNewTagInput ? (
                <div className="flex gap-2">
                  <select
                    id="tag"
                    name="tag"
                    value={formData.tag}
                    onChange={handleChange}
                    className="bg-gray-800 border border-green-500/30 rounded-md text-white focus:border-green-400 focus:ring-green-400/20 w-full p-2"
                  >
                    <option value="">Select a tag</option>
                    {availableTags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-green-500/30 text-green-400"
                    onClick={() => setShowNewTagInput(true)}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="New tag name"
                    className="bg-gray-800 border-green-500/30 text-white focus:border-green-400 focus:ring-green-400/20"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="border-green-500/30 text-green-400"
                    onClick={handleAddNewTag}
                  >
                    Add
                  </Button>
                </div>
              )}
              {errors.tag && <p className="text-red-400 text-sm mt-1">{errors.tag}</p>}
            </div>

            <div>
              <Label htmlFor="benefit" className="text-green-300">
                Benefit
              </Label>
              <Input
                id="benefit"
                name="benefit"
                value={formData.benefit}
                onChange={handleChange}
                placeholder="e.g., 1 year free of Granola for your entire company"
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400 focus:ring-green-400/20"
              />
              {errors.benefit && <p className="text-red-400 text-sm mt-1">{errors.benefit}</p>}
            </div>
          </div>

          {/* Submission Info */}
          <div className="space-y-4 border-t border-green-500/30 pt-6">
            <h3 className="text-lg text-green-300">Submission Info (Optional)</h3>
            <p className="text-sm text-gray-400">
              Leave blank to submit anonymously. This will show as "submitted by: anonymous from anonymous"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="submittedBy" className="text-green-300">
                  Your Name/Handle
                </Label>
                <Input
                  id="submittedBy"
                  name="submittedBy"
                  value={formData.submittedBy}
                  onChange={handleChange}
                  placeholder="e.g., alex.eth, sarah_designer"
                  className="bg-gray-800 border-green-500/30 text-white focus:border-green-400 focus:ring-green-400/20"
                />
              </div>

              <div>
                <Label htmlFor="popupCrew" className="text-green-300">
                  Popup Crew
                </Label>
                <select
                  id="popupCrew"
                  name="popupCrew"
                  value={formData.popupCrew}
                  onChange={handleChange}
                  className="bg-gray-800 border border-green-500/30 rounded-md text-white focus:border-green-400 focus:ring-green-400/20 w-full p-2"
                >
                  <option value="">Select popup crew</option>
                  {POPUP_CREWS.map((crew) => (
                    <option key={crew} value={crew}>
                      {crew}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Redemption Steps */}
          <div className="space-y-3">
            <Label className="text-green-300">Redemption Instructions</Label>
            {formData.redemptionSteps.map((step, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={step}
                  onChange={(e) => handleRedemptionStepChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  className="bg-gray-800 border-green-500/30 text-white focus:border-green-400 focus:ring-green-400/20"
                />
                {formData.redemptionSteps.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="border-red-500/30 text-red-400 hover:bg-red-500/20"
                    onClick={() => removeRedemptionStep(index)}
                  >
                    <X size={16} />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              className="border-green-500/30 text-green-400 w-full"
              onClick={addRedemptionStep}
            >
              <Plus size={16} className="mr-2" /> Add Step
            </Button>
            {errors.redemptionSteps && <p className="text-red-400 text-sm">{errors.redemptionSteps}</p>}
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="code" className="text-green-300">
                Redemption Code (if available)
              </Label>
              <Input
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="e.g., ZUPASS-CODE123"
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400 focus:ring-green-400/20"
              />
            </div>

            <div>
              <Label htmlFor="note" className="text-green-300">
                Terms & Conditions Note
              </Label>
              <Textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="e.g., This offer is intended for new customers only."
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400 focus:ring-green-400/20"
              />
            </div>

            <div>
              <Label htmlFor="logo" className="text-green-300">
                Logo (optional)
              </Label>
              <div className="mt-1 flex items-center">
                <label className="block w-full">
                  <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-green-500/30 rounded-lg hover:border-green-400/50 cursor-pointer bg-gray-800/50">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-green-500/50" />
                      <div className="text-sm text-green-400">
                        <span>Upload a logo</span>
                      </div>
                      <p className="text-xs text-gray-400">PNG, JPG, SVG up to 2MB</p>
                    </div>
                    <input
                      id="logo"
                      name="logo"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleLogoChange}
                    />
                  </div>
                </label>
              </div>
              {formData.logo && <p className="mt-2 text-sm text-green-300">Selected file: {formData.logo.name}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-green-500/30">
            <Button
              type="button"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-black font-medium">
              Submit Proposal
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
