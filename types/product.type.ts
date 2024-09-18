export interface Product {
  id: number;
  name: string;
  guarantee: string | null;
  small_images: string[];
  large_images: string[];
  availability: string;
  model: string | null;
  reviews_count: number;
  reviews_middle_rating: number | null;
  brand: string;
  sale_price: number;
  installment_price: number;
  benefit: number;
  loan_price: number;
  old_price: number | null;
  minimal_loan_price: {
    min_monthly_price: string;
    month_number: number;
    min_loan_type: string;
    description: string;
  };
  code: string;
  sale_months: {
    id: number;
    key: string;
    name: string;
    image: string;
  }[];
  stickers: unknown[];
  main_characters: {
    name: string;
    value: string;
  }[];
  offers_by_image: unknown[];
  offers_by_character: unknown[];
  breadcrumbs: {
    name: string;
    slug: string;
  }[];
  promotion_0_0_12_price: number | null;
}
