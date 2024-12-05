import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cloneDeep } from "lodash";

const useGetMenuKey = (): string[] => {
  const [menuKeys, setMenuKeys] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const pathName = router.asPath;

    const generateKey = (): void => {
      const cloneName = cloneDeep(pathName);
      const keyNames = cloneName.split("/");
      const keys = keyNames[1];
      setMenuKeys([keys]);
    };

    generateKey();
  }, [router.asPath]);

  return menuKeys;
};

export default useGetMenuKey;
