export type OurClientsSlide = {
  activeIndex: number;
  i: number;
  testi: { user: string; email: string; avatar: string };
};

export type Reasons = {
  icon: React.JSX.Element;
  title: string;
  description: string;
};

export interface WhyUsItemsProps {
  feature: Reasons;
  index: number;
}

export interface OurClientsDataProps {
  text: string;
  user: string;
  email: string;
    avatar: StaticImageData;

}



