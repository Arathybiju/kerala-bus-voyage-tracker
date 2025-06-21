
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, AlertTriangle } from 'lucide-react';

interface FeatureSelectorProps {
  onFeaturesChange: (features: string[]) => void;
}

const FeatureSelector = ({ onFeaturesChange }: FeatureSelectorProps) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['live-gps', 'accurate-eta', 'delay-alerts']);

  const features = [
    {
      id: 'live-gps',
      name: 'Live GPS Tracking',
      icon: MapPin,
      description: 'Real-time bus location updates',
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'accurate-eta',
      name: 'Accurate ETAs',
      icon: Clock,
      description: 'Precise arrival time estimates',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'delay-alerts',
      name: 'Delay Alerts',
      icon: AlertTriangle,
      description: 'Instant notifications for delays',
      color: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const toggleFeature = (featureId: string) => {
    const updatedFeatures = selectedFeatures.includes(featureId)
      ? selectedFeatures.filter(f => f !== featureId)
      : [...selectedFeatures, featureId];
    
    setSelectedFeatures(updatedFeatures);
    onFeaturesChange(updatedFeatures);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          const isSelected = selectedFeatures.includes(feature.id);
          
          return (
            <Card
              key={feature.id}
              className={`cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? 'ring-2 ring-emerald-500 bg-emerald-50' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => toggleFeature(feature.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${feature.color}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{feature.name}</h4>
                      {isSelected && (
                        <Badge className="bg-emerald-500 text-white text-xs">
                          Active
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSelector;
