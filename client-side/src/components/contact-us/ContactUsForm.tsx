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
    try {
      // Make a POST request to your backend
      const response = await sendMessage(data);
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
        <p className={styles.letTalk}>Let's Talk</p>
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
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must not exceed 50 characters",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Your Name"
                    className={styles.generalInput}
                  />
                )}
              />
              {errors.Name && (
                <p className={styles.errorMessage}>{errors.Name.message}</p>
              )}
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.inputWrapper}>
              <Controller
                name="PhoneNumber"
                control={control}
                rules={{
                  required: "Phone Number is required",
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Please enter a valid phone number",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Phone Number"
                    className={styles.generalInput}
                  />
                )}
              />
              {errors.PhoneNumber && (
                <p className={styles.errorMessage}>
                  {errors.PhoneNumber.message}
                </p>
              )}
            </div>
          </Col>
        </Row>

        <div className={styles.inputWrapper}>
          <Controller
            name="Email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Email"
                className={styles.generalInput}
              />
            )}
          />
          {errors.Email && (
            <p className={styles.errorMessage}>{errors.Email.message}</p>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <Controller
            name="Message"
            control={control}
            rules={{
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: 1000,
                message: "Message must not exceed 1000 characters",
              },
            }}
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
            <p className={styles.errorMessage}>{errors.Message.message}</p>
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
