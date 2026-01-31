import Button from '../ui/Button';

interface PromoCardProps {
  title: string;
  description: string;
  buttonText: string;
  secondaryButton?: string;
  image?: string;
}

export default function PromoCard({ title, description, buttonText, secondaryButton, image }: PromoCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-8" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
      <div className="flex items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-[#2B3674] text-[28px] font-bold leading-[36px] tracking-[-0.56px] mb-4">
            {title}
          </h2>
          <p className="text-[#A3AED0] text-[14px] font-medium leading-[24px] mb-6">
            {description}
          </p>
          <div className="flex items-center gap-3">
            <Button variant="primary" size="lg">
              {buttonText}
            </Button>
            {secondaryButton && (
              <Button variant="secondary" size="lg">
                {secondaryButton}
              </Button>
            )}
          </div>
        </div>
        {image && (
          <div className="flex-shrink-0">
            <img src={image} alt="" className="w-[240px] h-auto" loading="lazy" />
          </div>
        )}
      </div>
    </div>
  );
}
