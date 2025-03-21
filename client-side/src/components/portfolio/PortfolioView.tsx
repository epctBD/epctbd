import { IPortfolio } from "@/models/portfolio.model";
import PortfolioCard from "../common/portfolio-card/PortfolioCard";
import styles from "./PortfolioView.module.scss";
import { Col, Row } from "antd";

interface IPortfolioViewProps {
  portfolios: IPortfolio[];
}

const PortfolioView = ({ portfolios }: IPortfolioViewProps) => {
  return (
    <div className={styles.portfolioViewWrapper}>
      <Row gutter={[24, 24]} align="bottom">
        <Col xs={24} md={14}>
          <p className={styles.headerTitle}>
            Inspiring Projects That Shape Spaces and Elevate Experiences
          </p>
        </Col>
        <Col xs={24} md={10}>
          <p className={styles.headerSubtitle}>
            Discover a collection of our most impactful architectural designs,
            blending innovation and functionality.
          </p>
        </Col>
      </Row>
      <div style={{ marginTop: "80px" }}>
        {portfolios?.length <= 0 ? (
          <div className="no-data">
            <p className="no-data-text">No Portfolio Available</p>
          </div>
        ) : (
          <Row gutter={[24, 24]}>
            {portfolios?.map((portfolio, index) => (
              <Col xs={24} md={12} key={portfolio?._id}>
                <PortfolioCard
                  imageSrc={portfolio?.feature_image}
                  pdfSrc={portfolio?.pdf_file}
                  title={portfolio?.title}
                  subTitle={portfolio?.subtitle}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default PortfolioView;
