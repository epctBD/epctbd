import Image from "next/image";
import styles from "./TeamCard.module.scss";
import ProfileFacebook from "../svg/ProfileFacebook";
import Link from "next/link";
import ProfileTwitter from "../svg/ProfileTwitter";
import ProfileLinkedin from "../svg/ProfileLinkedin";

interface ITeamCardProps {
  imageSrc: string;
  name: string;
  position: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  exTeamMember: boolean;
}

const TeamCard = ({
  imageSrc,
  name,
  position,
  facebook,
  twitter,
  linkedin,
  exTeamMember,
}: ITeamCardProps) => {
  return (
    <div className={styles.teamCardWrapper}>
      <div className={styles.teamImageWrapper}>
        <Image
          src={imageSrc}
          alt="Profile Image"
          className={styles.userImage}
          width={120}
          height={120}
        />
      </div>

      <div className={styles.innerWrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.position}>{position}</p>
        {!exTeamMember && (
          <div className={styles.socialMediaSection}>
            {facebook && (
              <Link href={""} className={styles.socialMediaLink}>
                <ProfileFacebook />
              </Link>
            )}
            {twitter && (
              <Link href={""} className={styles.socialMediaLink}>
                <ProfileTwitter />
              </Link>
            )}
            {linkedin && (
              <Link href={""} className={styles.socialMediaLink}>
                <ProfileLinkedin />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
