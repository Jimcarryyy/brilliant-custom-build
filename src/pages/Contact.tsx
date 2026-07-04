import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Reveal } from '@/components/Reveal';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message received',
      description:
        "Thanks for reaching out — we'll respond within one business day.",
    });
    setFormData({ name: '', email: '', phone: '', topic: '', message: '' });
  };

  return (
    <div className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-label mb-3">Contact</p>
            <h1 className="text-display-xl text-luxury-charcoal mb-4">
              Let&apos;s talk about your ring
            </h1>
            <p className="text-body text-luxury-text-muted">
              Questions about sizing, timelines, or a style you saw in the
              collection? Send a note below. For a full custom brief with
              preferences and budget, use our{' '}
              <Link to="/design" className="text-luxury-rose-gold underline">
                design wizard
              </Link>
              .
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 border border-border bg-background p-6 md:p-8 rounded-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="topic">Topic</Label>
                <Select
                  value={formData.topic}
                  onValueChange={(v) =>
                    setFormData((p) => ({ ...p, topic: v }))
                  }
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="What can we help with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quote">Quote on a collection style</SelectItem>
                    <SelectItem value="custom">Custom design inquiry</SelectItem>
                    <SelectItem value="sizing">Sizing or fit question</SelectItem>
                    <SelectItem value="timeline">Timeline / rush order</SelectItem>
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell us what you're thinking — no need to have every detail figured out."
                  rows={5}
                  required
                  className="mt-1.5"
                />
              </div>

              <Button type="submit" variant="luxury" className="w-full md:w-auto">
                Send message
              </Button>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={80}>
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-medium text-luxury-charcoal mb-4">
                  Studio details
                </h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'hello@gracerings.com',
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '(555) 123-4567',
                    },
                    {
                      icon: MapPin,
                      label: 'Showroom',
                      value: 'By appointment — virtual or in-studio',
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <item.icon className="w-4 h-4 text-luxury-rose-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-label mb-0.5">{item.label}</p>
                        <p className="text-sm text-luxury-charcoal">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="text-sm font-medium text-luxury-charcoal mb-2">
                  Response time
                </h2>
                <p className="text-caption leading-relaxed">
                  We reply within one business day. For detailed specs and
                  reference images, the{' '}
                  <Link to="/design" className="text-luxury-rose-gold underline">
                    design form
                  </Link>{' '}
                  helps us prepare for your consultation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
