import { MapPin } from 'lucide-react';
import Typography from '@/components/general/typography';

type ProfileHeaderProps = {
  name: string;
  title: string;
  location: string;
};

const ProfileHeader = ({ name, title, location }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Typography variant="h1" className="text-4xl font-bold md:text-5xl">
          {name}
        </Typography>
        <Typography variant="h2" className="text-muted-foreground text-xl md:text-2xl">
          {title}
        </Typography>
      </div>
      <div className="text-muted-foreground flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <Typography>{location}</Typography>
      </div>
    </div>
  );
};

export default ProfileHeader;
