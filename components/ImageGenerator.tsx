"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import * as fal from "@fal-ai/serverless-client";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize fal client with API key from environment variable
    fal.config({
      credentials: process.env.NEXT_PUBLIC_FAL_KEY,
    });
  }, []);

  const generateImage = async () => {
    setIsLoading(true);
    setError('');
    try {
      const result = await fal.subscribe("fal-ai/flux/schnell", {
        input: {
          prompt: prompt
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            update.logs.map((log) => log.message).forEach(console.log);
          }
        },
      });
      setImageUrl(result.images[0].url);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="image-generator" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Generate Your Image
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Input
                placeholder="Enter your image description..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button 
                onClick={generateImage} 
                disabled={isLoading || !prompt}
                className="w-full"
              >
                {isLoading ? 'Generating...' : 'Generate Image'}
              </Button>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {imageUrl && (
              <div className="mt-6">
                <img src={imageUrl} alt="Generated image" className="w-full rounded-lg shadow-lg" />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}