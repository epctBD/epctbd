import Image from "next/image";
import { Input, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SignIn.module.scss";
import logo from "../../../public/images/epct_logo.png";
import CoreButton from "../common/core-components/core-button/CoreButton";

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

  const onSubmit = (data: ISignInForm) => {
    setIsButtonLoading(true);

    // Simulating a login request (replace this with your actual logic)
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          data.email === "admin@example.com" &&
          data.password === "password"
        ) {
          resolve("Success");
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    })
      .then(() => {
        message.success("Logged in successfully");
        router.push("/admin/dashboard");
      })
      .catch((error) => {
        message.error("Login failed: " + error.message);
        setIsButtonLoading(false);
      });
  };

  return (
    <div className={styles.signInWrapper}>
      <div className={styles.signInInnerWrapper}>
        <Image src={logo} alt="epct-logo" />

        <div className={styles.signInFormWrapper}>
          <p className={styles.signInText}>Sign In</p>
          <form
            className={styles.signInFormInnerWrapper}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.adminInputWrapper}>
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
                    placeholder="Email"
                    className={styles.adminInput}
                  />
                )}
              />
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email.message}</p>
              )}
            </div>

            <div
              className={styles.adminInputWrapper}
              style={{ width: "500px" }}
            >
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    placeholder="Password"
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
