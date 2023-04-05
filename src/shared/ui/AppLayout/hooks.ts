import { BreadcrumbProps } from "@evercityecosystem/evercity-ui";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const useBreadcrumb = (titles: string[]): BreadcrumbProps => {
  const location = useLocation();

  const { t } = useTranslation("common");
  const routes = useMemo(() => {
    const matches = location.pathname.split("/").slice(1);

    const paths = matches.reduce((acc: string[], match, index) => {
      const result = [...acc];
      result.push(index === 0 ? `/${match}` : `/${matches[index - 1]}/${match}`);
      return result;
    }, []);

    const breadcrumbs = titles.map((title, index) => ({
      breadcrumbName: title,
      path: paths[index],
    }));

    if (paths[0] !== "/") {
      breadcrumbs.unshift({
        path: "/",
        breadcrumbName: t("breadcrumb.home"),
      });
    }

    return breadcrumbs;
  }, [location, titles]);

  return {
    routes,
  };
};
