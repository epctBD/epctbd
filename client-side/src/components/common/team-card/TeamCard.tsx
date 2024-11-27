import Image, { StaticImageData } from "next/image";
import styles from "./TeamCard.module.scss";
import ProfileFacebook from "../svg/ProfileFacebook";
import Link from "next/link";
import ProfileTwitter from "../svg/ProfileTwitter";
import ProfileLinkedin from "../svg/ProfileLinkedin";

interface ITeamCardProps {
  imageSrc: StaticImageData;
  name: string;
  position: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

const TeamCard = ({
  imageSrc,
  name,
  position,
  facebook,
  twitter,
  linkedin,
}: ITeamCardProps) => {
  return (
    <div className={styles.teamCardWrapper}>
      <div className={styles.teamImageWrapper}>
        <Image
          src={imageSrc}
          alt="Profile Image"
          className={styles.userImage}
        />
      </div>

      <div className={styles.innerWrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.position}>{position}</p>
        <div className={styles.socialMediaSection}>
          {facebook && (
            <Link href={""}>
              <ProfileFacebook />
            </Link>
          )}
          {twitter && (
            <Link href={""}>
              <ProfileTwitter />
            </Link>
          )}
          {linkedin && (
            <Link href={""}>
              <ProfileLinkedin />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
