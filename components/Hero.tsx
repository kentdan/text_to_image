import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Transform Text into Stunning Images
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
          Harness the power of AI to create beautiful, unique images from your text descriptions.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" asChild>
            <a href="#image-generator">Try It Now</a>
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}