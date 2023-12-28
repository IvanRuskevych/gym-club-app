export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export type TypeBenefit = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type TypeClass = {
  name: string;
  image: string;

  description?: string;
};
