import { useTranslation } from "react-i18next";
import type {List, FeaturesContent} from "@/types"


const FeatureData = () => {
  const { t } = useTranslation();
  const list = t("services.features.list", { returnObjects: true }) as List[];

  const featuresContent: FeaturesContent[] = list.slice(0, 3).map((item) => ({
    title: item.serviceName,
    desc: item.serviceDescription,
    href: "/",
  }));

  console.log("featuresContent: ", featuresContent)

  return featuresContent;
};

export default FeatureData;