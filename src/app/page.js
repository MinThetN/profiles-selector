'use client';
import { useState } from 'react';
import { profiles } from '@/data/profiles';
import ProfileCard from '@/components/ProfileCard';
import ProfileDetail from '@/components/ProfileDetail';

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Choose Your Profile</h1>
        
        {selectedProfile ? (
          <ProfileDetail 
            profile={selectedProfile} 
            onBack={() => setSelectedProfile(null)} 
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onClick={setSelectedProfile}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
