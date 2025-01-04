export default function ProfileDetail({ profile, onBack }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{profile.icon}</span>
        <h2 className="text-2xl font-semibold">{profile.name}</h2>
      </div>
      <p className="text-gray-600 mb-4">{profile.description}</p>
      <button 
        onClick={onBack}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Back to Profiles
      </button>
    </div>
  );
} 