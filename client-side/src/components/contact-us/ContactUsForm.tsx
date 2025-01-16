import { Controller, useForm } from "react-hook-form";
import styles from "./ContactUs.module.scss";
import { Col, Input, message, Row } from "antd";
import CoreButton from "../common/core-components/core-button/CoreButton";
import { sendMessage } from "@/services/contactUs.service";

const { TextArea } = Input;

interface IContactUsPayload {
  Name: string;
  PhoneNumber: string;
  Email: string;
  Message: string;
}

const ContactUsForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IContactUsPayload>({ mode: "onTouched" });

  const onSubmit = async (data: IContactUsPayload) => {
    console.log(data);
    try {
      // Make a POST request to your backend
      const response = await sendMessage(data);
      console.log(response, "response");
      message.success("Message is sent, please wait for the response form us");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.contactUsForn}>
      <div className={styles.header}>
        <p className={styles.letTalk}>Let’s Talk</p>
        <p className={styles.subTitle}>
          Get in touch with us to discuss your next project. We look forward to
          collaborating with you.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapepr}>
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <div className={styles.inputWrapper}>
              <Controller
                name="Name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Your Name"
                    className={styles.generalInput}
                  />
                )}
              />
              {errors.Name && (
                <p className={styles.errorMessage}>Name is required</p>
              )}
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.inputWrapper}>
              <Controller
                name="PhoneNumber"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Phone Number"
                    className={styles.generalInput}
                  />
                )}
              />
              {errors.PhoneNumber && (
                <p className={styles.errorMessage}>Phone Number is required</p>
              )}
            </div>
          </Col>
        </Row>

        <div className={styles.inputWrapper}>
          <Controller
            name="Email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Email"
                className={styles.generalInput}
              />
            )}
          />
          {errors.Email && (
            <p className={styles.errorMessage}>Email is required</p>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <Controller
            name="Message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextArea
                {...field}
                rows={6}
                placeholder="Message"
                className={styles.generalInput}
              />
            )}
          />
          {errors.Message && (
            <p className={styles.errorMessage}>Message is required</p>
          )}
        </div>

        <CoreButton
          text="Contact Us"
          type="primary"
          htmlType="submit"
          isFullWidth={true}
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
