import Image from "next/image";
import { Input, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import styles from "./SignIn.module.scss";
import logo from "../../../../public/images/epct_logo.png";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignInForm>({ mode: "onChange" });

  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (data: ISignInForm) => {
    setIsButtonLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        throw new Error(res.error);
      }

      message.success("Logged in successfully");
      router.push("/admin/team-member"); // Redirect to dashboard
    } catch (error) {
      message.error("Login failed: ");
      setIsButtonLoading(false);
    }
  };

  return (
    <div className={styles.signInWrapper}>
      <div className={styles.signInInnerWrapper}>
        <div className={styles.signInTextWrapper}>
          <Image src={logo} alt="epct-logo" />
          <p className={styles.signInTitle}>Management Portal</p>
          <p className={styles.signInText}>
            Create your account to manage your data
          </p>
        </div>

        <div className={styles.signInFormWrapper}>
          <form
            className={styles.signInFormInnerWrapper}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.adminInputWrapper}>
              <p className={styles.inputTitle}>Your Email*</p>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="admin@example.com"
                    className={styles.adminInput}
                  />
                )}
              />
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.adminInputWrapper}>
              <p className={styles.inputTitle}>Password*</p>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    placeholder="........"
                    className={styles.adminInput}
                  />
                )}
              />
              {errors.password && (
                <p className={styles.errorMessage}>{errors.password.message}</p>
              )}
            </div>
            <CoreButton
              text="Login"
              type="primary"
              htmlType="submit"
              loading={isButtonLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
