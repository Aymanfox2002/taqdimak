export interface List {
  serviceName: string;
  serviceDescription: string;
}

export interface FeaturesContent {
  title: string;
  desc: string;
  href: string;
}

export interface SmallBox extends FeaturesContent {
  i: number;
}
