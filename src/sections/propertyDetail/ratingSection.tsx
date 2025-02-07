import { Progress } from '@/components/ui/progress';
import { Quote, Star } from 'lucide-react';
import React from 'react';
import {
  CheckCircle,
  Shield,
  HeadphonesIcon,
  MapPin,
  DollarSign,
} from 'lucide-react';
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site.config';

const ratingBars = [
  { level: 5, count: 85 },
  { level: 4, count: 12 },
  { level: 3, count: 2 },
  { level: 2, count: 1 },
  { level: 1, count: 0 },
];

const metrics = [
  { icon: CheckCircle, label: 'Cleanliness', value: '4.8' },
  { icon: CheckCircle, label: 'Accuracy', value: '4.9' },
  { icon: Shield, label: 'Security', value: '4.9' },
  { icon: HeadphonesIcon, label: 'Agent Support', value: '4.9' },
  { icon: MapPin, label: 'Location', value: '4.9' },
  { icon: DollarSign, label: 'Value', value: '4.9' },
];

const reviews = [
  {
    name: 'Beulah Cummings',
    tenure: '4 years on V Hospitality',
    rating: 4,
    date: 'Nov. 01, 2024',
    comment:
      'This place exceeded my expectations in every way. The photos don’t even capture how spacious and airy it feels. The balcony view was a delightful bonus.',
  },
  {
    name: 'Lauren Dickens',
    tenure: '4 years on V Hospitality',
    rating: 4,
    date: 'Nov. 01, 2024',
    comment:
      'What a fantastic place! The apartment was exactly as described, even better in person. The location was ideal.',
  },
  {
    name: 'Janet Mueller',
    tenure: '4 years on V Hospitality',
    rating: 4,
    date: 'Nov. 01, 2024',
    comment:
      'I booked this apartment for a business trip and found it to be ideal. It’s quiet, well-furnished, and has a comfortable work area with good lighting. The Wi-Fi was reliable.',
  },
  {
    name: 'Beulah Cummings',
    tenure: '4 years on V Hospitality',
    rating: 4,
    date: 'Nov. 01, 2024',
    comment:
      'This place exceeded my expectations in every way. The photos don’t even capture how spacious and airy it feels. The balcony view was a delightful bonus.',
  },
  {
    name: 'Lauren Dickens',
    tenure: '4 years on V Hospitality',
    rating: 4,
    date: 'Nov. 01, 2024',
    comment:
      'What a fantastic place! The apartment was exactly as described, even better in person. The location was ideal.',
  },
  {
    name: 'Janet Mueller',
    tenure: '4 years on V Hospitality',
    rating: 4,
    date: 'Nov. 01, 2024',
    comment:
      'I booked this apartment for a business trip and found it to be ideal. It’s quiet, well-furnished, and has a comfortable work area with good lighting. The Wi-Fi was reliable.',
  },
];

const RatingSection = () => {
  return (
    <div>
      {/* Header Rating */}
      <div className="mb-20 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 flex items-center gap-2">
            <Star className="h-20 w-20 fill-[#D99100] text-[#D99100]" />
            <h3 className="text-[100px] font-semibold text-gray-900">4.6</h3>
          </div>
          <p className="max-w-xs text-sm text-gray-600">
            One of the most loved homes on V Hospitality based on ratings,
            reviews, and reliability
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Overall Rating */}
        <div className="flex">
          <div className="w-[180px]">
            <h3 className="mb-2 font-medium text-gray-900">Overall rating</h3>
            <div className="space-y-1">
              {ratingBars.map((rating) => (
                <div key={rating.level} className="flex items-center gap-2">
                  <span className="w-3 text-sm text-gray-600">
                    {rating.level}
                  </span>
                  <Progress
                    value={rating.count}
                    className="h-[6px] w-full bg-gray-100 [&>div]:bg-[#D99100]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid flex-1 grid-cols-3 gap-6 lg:grid-cols-6">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2 rounded-full bg-gray-100 p-2">
                <metric.icon className="h-5 w-5 text-gray-600" />
              </div>
              <div className="text-2xl font-semibold text-gray-900">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="w-full max-w-md border-none p-4 shadow-none"
            >
              <CardHeader className="flex-row gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://s3-alpha-sig.figma.com/img/d067/c913/ad868d019f92ce267e6de23af3413e5b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k-a9Bwc6GYx8KAAjM1MjwNSQedeoBZM3YpOhullsnWKpqPxATTe08qg~emaXmVqPUkJJAs5B74kxSonx8lRSux~LcdNjQuW1idj~jtITYoVQaZi-lh6IAb0itOXR9RLFRkU4DLNIWZw2LyBloaMDaAPg2w4D9CN3qwbrGLeeRGBlsyOTtZJqJKRHwzNY4R-KwFdIxnMHr1f43LTUP4UUNBAA-FJluDgCZ2mPVeVVR8VJa86Zm6lYL83p3q1UuZiVN-5Xxagyd1SyMkTot7Lkm3ycxPOCVPMezjo~P0RYX-etO5UHTqPaqqx6HEwLeO4EyNKQLet2pwox28YpHRJYEQ__"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{review.name}</CardTitle>
                  <CardDescription>{review.tenure}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Quote size={25} />
                <div className="relative mt-4 flex items-start space-x-2">
                  <p className="text-gray-700">{review.comment}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Star color={siteConfig.primaryColor} className="h-6 w-6" />

                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="border-primary text-primary">
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
