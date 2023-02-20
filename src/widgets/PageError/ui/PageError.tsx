import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageLoaderProps {
  className?: string;
}

const PageError = ({ className }: PageLoaderProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t("unknown error")}</h1>
      <Button onClick={reloadPage} theme={ThemeButton.PAGE_ERROR}>
        {t("reload page")}
      </Button>
    </div>
  );
};

export default PageError;
