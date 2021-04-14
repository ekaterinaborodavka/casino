export interface FormikValues {
  email: string;
  password: string;
}

export enum Sizes {
  // eslint-disable-next-line no-unused-vars
  large = "large",
  // eslint-disable-next-line no-unused-vars
  medium = "medium",
  // eslint-disable-next-line no-unused-vars
  small = "small",
}

export enum FooterLinksColors {
  // eslint-disable-next-line no-unused-vars
  success = "success",
  // eslint-disable-next-line no-unused-vars
  primary = "primary",
  // eslint-disable-next-line no-unused-vars
  gray = "gray",
}

export interface LoginFooterProps {
  margin?: Sizes;
  color?: FooterLinksColors;
}

export interface LoginHeaderProps {
  marginRight?: Sizes;
}

export interface LoginFormProps {
  margininputbottom?: Sizes;
  sizebutton?: Sizes;
}
