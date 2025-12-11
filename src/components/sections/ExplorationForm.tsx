import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  phone?: string;
  challenge: string;
  source?: string;
  gdpr: boolean;
};

export const ExplorationForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    // In real app: redirect to thank you / open Calendly
    alert("Thank you. Opening calendar...");
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section id="exploration-session" className="py-24 bg-putty">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Curious? Start with a complimentary one-hour conversation.
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-merlot"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">First Name *</label>
              <input 
                {...register("firstName", { required: true })}
                className="w-full px-4 py-3 border border-gray-200 focus:border-merlot focus:ring-1 focus:ring-merlot outline-none transition-colors"
                placeholder="Jane"
              />
              {errors.firstName && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Last Name *</label>
              <input 
                {...register("lastName", { required: true })}
                className="w-full px-4 py-3 border border-gray-200 focus:border-merlot focus:ring-1 focus:ring-merlot outline-none transition-colors"
                placeholder="Doe"
              />
              {errors.lastName && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Company *</label>
              <input 
                {...register("company", { required: true })}
                className="w-full px-4 py-3 border border-gray-200 focus:border-merlot focus:ring-1 focus:ring-merlot outline-none transition-colors"
              />
              {errors.company && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Role *</label>
              <input 
                {...register("role", { required: true })}
                className="w-full px-4 py-3 border border-gray-200 focus:border-merlot focus:ring-1 focus:ring-merlot outline-none transition-colors"
              />
              {errors.role && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Email *</label>
              <input 
                type="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full px-4 py-3 border border-gray-200 focus:border-merlot focus:ring-1 focus:ring-merlot outline-none transition-colors"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">Valid email required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
              <input 
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 border border-gray-200 focus:border-merlot focus:ring-1 focus:ring-merlot outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-charcoal mb-1">Biggest leadership challenge *</label>
            <textarea 
              {...register("challenge", { required: true })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 focus:border-merlot focus:ring-1 focus:ring-merlot outline-none transition-colors resize-none"
            />
            {errors.challenge && <span className="text-red-500 text-xs mt-1">Required</span>}
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-charcoal mb-1">How did you hear about us?</label>
            <input 
              {...register("source")}
              className="w-full px-4 py-3 border border-gray-200 focus:border-merlot focus:ring-1 focus:ring-merlot outline-none transition-colors"
            />
          </div>

          <div className="mb-8 flex items-start">
            <input 
              type="checkbox" 
              id="gdpr"
              {...register("gdpr", { required: true })}
              className="mt-1 mr-3 h-4 w-4 text-merlot focus:ring-merlot border-gray-300 rounded"
            />
            <label htmlFor="gdpr" className="text-sm text-gray-600">
              I agree to the storage and processing of my personal data by ETC Consulting as described in the Privacy Policy. *
            </label>
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto min-w-[200px]">
            {isSubmitting ? 'Submitting...' : 'Request Session'}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
