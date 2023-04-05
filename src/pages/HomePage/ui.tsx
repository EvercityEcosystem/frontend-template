import { ContentLayout, Paragraph, Space, Title } from "@evercityecosystem/evercity-ui";
import React from "react";
import { useTranslation } from "react-i18next";
import { AppLayout } from "shared/ui";

export const HomePage = () => {
  const { t } = useTranslation(["home"]);

  return (
    <AppLayout>
      <Title>{t("title")}</Title>
    </AppLayout>
  );
};
