/**
 * @description: Get article information return value
 */

export interface Article {
  readonly _id?: string;
  cover?: string;
  title?: string;
  subtitle?: string;
  editor_type?: string;
  content?: string;
  excerpt?: string;
  published_at?: Date | string;
}

/**
 * @description: Get tag information return value
 */
export interface Tag {
  readonly _id?: string;
  slug?: string;
  category?: string;
  name?: string;
  discription?: string;
  icon?: string;
  cover?: string;
  readonly count?: number;
  visible?: boolean;
  roles?: any[];
}
