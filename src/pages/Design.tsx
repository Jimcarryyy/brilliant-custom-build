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
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { number: 1, title: 'Vision' },
  { number: 2, title: 'Preferences' },
  { number: 3, title: 'Contact' },
];

const Design = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [designData, setDesignData] = useState({
    inspiration: '',
    style: '',
    budget: '',
    timeline: '',
    stonePreference: '',
    metalPreference: '',
    details: '',
    contactInfo: { name: '', email: '', phone: '' },
  });
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: 'Design request submitted',
      description:
        'Our team will reach out within one business day to schedule your consultation.',
    });
  };

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <div className="max-w-2xl mb-10 md:mb-14">
            <p className="text-label mb-3">Custom design</p>
            <h1 className="text-display-xl text-luxury-charcoal mb-4">
              Start your ring brief
            </h1>
            <p className="text-body text-luxury-text-muted">
              Three short steps to capture your vision. We&apos;ll use this to
              prepare for your consultation — no commitment until you approve a
              design and quote.
            </p>
          </div>
        </Reveal>

        <Reveal delay={50}>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-10">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition-colors',
                      currentStep >= step.number
                        ? 'bg-luxury-charcoal border-luxury-charcoal text-white'
                        : 'border-border text-luxury-text-muted'
                    )}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={cn(
                      'text-sm hidden sm:inline',
                      currentStep >= step.number
                        ? 'text-luxury-charcoal font-medium'
                        : 'text-luxury-text-muted'
                    )}
                  >
                    {step.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-8 md:w-12 h-px bg-border mx-2 md:mx-3" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-border bg-background p-6 md:p-10 rounded-sm mb-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="inspiration">What are you imagining?</Label>
                  <Textarea
                    id="inspiration"
                    placeholder="Describe the ring, share references, mention anything you want to avoid..."
                    value={designData.inspiration}
                    onChange={(e) =>
                      setDesignData((p) => ({
                        ...p,
                        inspiration: e.target.value,
                      }))
                    }
                    rows={4}
                    className="mt-1.5"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Style direction</Label>
                    <Select
                      value={designData.style}
                      onValueChange={(v) =>
                        setDesignData((p) => ({ ...p, style: v }))
                      }
                    >
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Choose a direction" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="classic">Classic & timeless</SelectItem>
                        <SelectItem value="modern">Modern & minimal</SelectItem>
                        <SelectItem value="vintage">Vintage & romantic</SelectItem>
                        <SelectItem value="unique">Completely unique</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Timeline</Label>
                    <Select
                      value={designData.timeline}
                      onValueChange={(v) =>
                        setDesignData((p) => ({ ...p, timeline: v }))
                      }
                    >
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="When do you need it?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flexible">Flexible</SelectItem>
                        <SelectItem value="2-months">Within 2 months</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="urgent">Rush — ASAP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PreferenceList
                    label="Stone preference"
                    options={[
                      { id: 'lab-diamond', name: 'Lab-grown diamond' },
                      { id: 'moissanite', name: 'Moissanite' },
                      { id: 'other', name: 'Other gemstone' },
                      { id: 'unsure-stone', name: 'Help me decide' },
                    ]}
                    selected={designData.stonePreference}
                    onSelect={(id) =>
                      setDesignData((p) => ({ ...p, stonePreference: id }))
                    }
                  />
                  <PreferenceList
                    label="Metal preference"
                    options={[
                      { id: 'white-gold', name: 'White gold' },
                      { id: 'yellow-gold', name: 'Yellow gold' },
                      { id: 'rose-gold', name: 'Rose gold' },
                      { id: 'mixed', name: 'Mixed metals' },
                      { id: 'unsure-metal', name: 'Help me decide' },
                    ]}
                    selected={designData.metalPreference}
                    onSelect={(id) =>
                      setDesignData((p) => ({ ...p, metalPreference: id }))
                    }
                  />
                </div>
                <div>
                  <Label>Budget range</Label>
                  <Select
                    value={designData.budget}
                    onValueChange={(v) =>
                      setDesignData((p) => ({ ...p, budget: v }))
                    }
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2000-3500">$2,000 – $3,500</SelectItem>
                      <SelectItem value="3500-5000">$3,500 – $5,000</SelectItem>
                      <SelectItem value="5000-7500">$5,000 – $7,500</SelectItem>
                      <SelectItem value="7500+">$7,500+</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="details">Special details</Label>
                  <Textarea
                    id="details"
                    placeholder="Engraving, heirloom stones, sizing notes..."
                    value={designData.details}
                    onChange={(e) =>
                      setDesignData((p) => ({ ...p, details: e.target.value }))
                    }
                    rows={3}
                    className="mt-1.5"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={designData.contactInfo.name}
                      onChange={(e) =>
                        setDesignData((p) => ({
                          ...p,
                          contactInfo: { ...p.contactInfo, name: e.target.value },
                        }))
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
                      value={designData.contactInfo.email}
                      onChange={(e) =>
                        setDesignData((p) => ({
                          ...p,
                          contactInfo: { ...p.contactInfo, email: e.target.value },
                        }))
                      }
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={designData.contactInfo.phone}
                    onChange={(e) =>
                      setDesignData((p) => ({
                        ...p,
                        contactInfo: { ...p.contactInfo, phone: e.target.value },
                      }))
                    }
                    className="mt-1.5"
                  />
                </div>
                {(designData.style || designData.budget) && (
                  <div className="bg-luxury-cream p-5 rounded-sm text-sm">
                    <p className="text-label mb-2">Your brief</p>
                    <ul className="space-y-1 text-caption">
                      {designData.style && <li>Style: {designData.style}</li>}
                      {designData.stonePreference && (
                        <li>Stone: {designData.stonePreference.replace('-', ' ')}</li>
                      )}
                      {designData.metalPreference && (
                        <li>Metal: {designData.metalPreference.replace('-', ' ')}</li>
                      )}
                      {designData.budget && <li>Budget: ${designData.budget}</li>}
                      {designData.timeline && (
                        <li>Timeline: {designData.timeline.replace('-', ' ')}</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </Reveal>

        <div className="flex justify-between items-center">
          <Button
            variant="luxury-outline"
            onClick={() => setCurrentStep((s) => s - 1)}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          {currentStep < 3 ? (
            <Button variant="luxury" onClick={() => setCurrentStep((s) => s + 1)}>
              Continue
            </Button>
          ) : (
            <Button variant="luxury" onClick={handleSubmit}>
              Submit brief
            </Button>
          )}
        </div>

        <p className="text-caption text-center mt-8">
          Prefer a quick question?{' '}
          <Link to="/contact" className="text-luxury-rose-gold underline">
            Contact us directly
          </Link>
        </p>
      </div>
    </div>
  );
};

function PreferenceList({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: { id: string; name: string }[];
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <Label className="text-sm">{label}</Label>
      <div className="mt-2 space-y-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={cn(
              'w-full text-left p-3 text-sm border rounded-sm transition-colors',
              selected === option.id
                ? 'border-luxury-rose-gold bg-luxury-rose-gold/5'
                : 'border-border hover:border-luxury-rose-gold/40'
            )}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Design;
