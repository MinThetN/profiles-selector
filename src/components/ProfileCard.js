export default function ProfileCard({ profile, onClick }) {
  return (
    <button
      onClick={() => onClick(profile)}
      className="bg-white p-6 rounded-full shadow hover:shadow-xl transition duration-200 text-left"
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl">{profile.icon}</span>
        <div>
          <h3 className="font-semibold">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.description}</p>
        </div>
      </div>
    </button>
  );
} 