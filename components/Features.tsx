import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Palette, Wand2, Lock } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Generate images in seconds with our advanced AI model.',
    icon: Zap,
  },
  {
    title: 'Stunning Quality',
    description: 'Create high-resolution images with incredible detail.',
    icon: Palette,
  },
  {
    title: 'Easy to Use',
    description: 'Simple interface for effortless image generation.',
    icon: Wand2,
  },
  {
    title: 'Secure & Private',
    description: 'Your prompts and generated images are kept confidential.',
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Powerful Features for Your Creativity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}