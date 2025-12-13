import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  challenge: string;
};

export const ExplorationForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    alert("Request received. Redirecting to calendar...");
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section id="exploration-session" className="py-32 bg-panel relative overflow-hidden border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-void/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Start Your Transformation
            </h2>
            <p className="text-gray-400">
              Book a complimentary strategy session. No commitment, just clarity.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-gray-500">First Name</label>
                <input 
                  {...register("firstName", { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all"
                  placeholder="Jane"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-gray-500">Last Name</label>
                <input 
                  {...register("lastName", { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-gray-500">Work Email</label>
                <input 
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-gray-500">Company</label>
                <input 
                  {...register("company", { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-500">Primary Challenge</label>
              <textarea 
                {...register("challenge", { required: true })}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all resize-none"
                placeholder="What is the biggest hurdle your leadership team is facing?"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
              {isSubmitting ? 'Processing...' : 'Request Exploration Session'}
            </Button>
            
            <p className="text-center text-xs text-gray-600">
              By submitting, you agree to our Privacy Policy. Your data is secure.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
