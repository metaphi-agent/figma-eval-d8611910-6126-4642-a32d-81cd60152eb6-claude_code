interface ProfileCardProps {
  name: string;
  location: string;
  avatar: string;
  stats: {
    label: string;
    value: string | number;
  }[];
}

export default function ProfileCard({ name, location, avatar, stats }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-6" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
      <div className="flex flex-col items-center">
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden mb-4">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-[#2B3674] text-[18px] font-bold leading-[24px] mb-1">{name}</h3>
        <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px] mb-6 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline">
            <path d="M6 1C3.8 1 2 2.8 2 5C2 7.5 6 11 6 11C6 11 10 7.5 10 5C10 2.8 8.2 1 6 1Z" stroke="#A3AED0" strokeWidth="1.2" fill="none"/>
            <circle cx="6" cy="5" r="1.5" fill="#A3AED0"/>
          </svg>
          {location}
        </p>
        <div className="grid grid-cols-3 gap-8 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px] mb-1">{stat.label}</p>
              <p className="text-[#2B3674] text-[24px] font-bold leading-[32px]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
