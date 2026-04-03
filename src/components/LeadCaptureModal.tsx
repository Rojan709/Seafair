import { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion, AnimatePresence } from 'motion/react';

export default function LeadCaptureModal() {
  const { isModalOpen, closeModal, preselectedService } = useModal();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '',
    painPoint: '',
    serviceInterest: preselectedService || 'General IT Audit'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/v1/leads/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
        >
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600 mb-8">
                  One of our senior IT strategists will be in touch within 15 minutes to schedule your free audit.
                </p>
                <button 
                  onClick={closeModal}
                  className="bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Book Your Free IT Audit</h2>
                  <p className="text-slate-600 text-sm">
                    {step === 1 ? "Let's start with the basics." : "Tell us a bit about your current setup."}
                  </p>
                </div>

                <div className="flex gap-2 mb-8">
                  <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
                  <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
                </div>

                <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2); } : handleSubmit}>
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                        <input 
                          required
                          type="email" 
                          className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-6">
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Company Size</label>
                        <select 
                          required
                          className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                          value={formData.companySize}
                          onChange={e => setFormData({...formData, companySize: e.target.value})}
                        >
                          <option value="">Select size...</option>
                          <option value="1-10">1-10 Employees</option>
                          <option value="11-50">11-50 Employees</option>
                          <option value="51-200">51-200 Employees</option>
                          <option value="201+">201+ Employees</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Biggest IT Challenge</label>
                        <textarea 
                          required
                          rows={3}
                          className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                          placeholder="e.g., Slow support, security concerns, migrating to cloud..."
                          value={formData.painPoint}
                          onChange={e => setFormData({...formData, painPoint: e.target.value})}
                        ></textarea>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-md font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                          Back
                        </button>
                        <button type="submit" disabled={isSubmitting} className="flex-1 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-70">
                          {isSubmitting ? 'Submitting...' : 'Request Audit'}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
