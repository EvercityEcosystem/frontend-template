import { ExternalLink, Layout, SiderItem, HeaderProps } from "@evercityecosystem/evercity-ui";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
  header?: HeaderProps;
}

const SIDE_BAR_ITEMS: SiderItem[] = [];

export const AppLayout = ({ children, header = {} }: AppLayoutProps) => {
  return (
    <Layout variant="personal">
      <Layout.Sider items={SIDE_BAR_ITEMS} />
      <Layout.Header {...header} />
      <Layout variant="internal">
        <Layout.Content>{children}</Layout.Content>
        <Layout.Footer>
          <ExternalLink href="https://evercity.io/cookie_policy">Cookies Policy</ExternalLink>
          <ExternalLink href="https://storage.googleapis.com/evercity-public/Privacy%20Policy.pdf">
            Privacy Policy
          </ExternalLink>
          <ExternalLink href="https://storage.googleapis.com/evercity-public/Terms%20of%20service.pdf">
            Terms of Use
          </ExternalLink>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};
