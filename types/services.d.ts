export type ProcessPaginationProps = {
  slidesData: any;
  mainSwiper: any;
  activeIndex: number;
};

export type ProcessSlideProps = {
  i: number;
  item: {
    title: string;
    description: string;
  };
};

export type ServicesSlideCardProps = {
  slide: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
};

export interface StoriesSlideItem {
  image: string;
  title: string;
  description: string;
  name: string;
  position: string;
}

export interface SuccessStoriesProps {
  image: string;
  title: string;
  description: string;
  name: string;
  position: string;
}
export interface StoriesSlideProps {
  item: StoriesSlideItem;
}
