import { Mail, MapPin, Phone, SendIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-center mr-16">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:gabienbryan99@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gabienbryan99@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-center mr-16">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+18145058978"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (814) 505-8978
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-center mr-16">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Philadelphia, PA, United States
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary resize-y max-w-full max-h-64"
                  placeholder="Your message..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className={cn('cosmic-button w-full flex items-center justify-center gap-2')}
              >
                Send Message <SendIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
