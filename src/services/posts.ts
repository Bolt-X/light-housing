import { directusClientWithRest } from '@/src/lib/directus';
import { readItems } from '@directus/sdk';

export interface Post {
  id: string;
  slug: string;
  title: string;
  cover: string;
  thumbnail?: string;
  blurb?: string;
  content: string;
  date_published: string;
  categories: any[];
  status: string;
}

export const fnGetPosts = async ({
  limit = 10,
  page = 1,
  sort = ['-date_published'],
  filter = {},
}: {
  limit?: number;
  page?: number;
  sort?: string[];
  filter?: object;
}) => {
  try {
    const res = await directusClientWithRest.request(
      readItems('posts', {
        fields: [
          'short_content',
          'categories.categories_id.name',
          'categories.categories_id.slug',
        ],
        filter: {
          ...filter,
        },
        limit,
        page,
        sort,
      }),
    );
    return res;
  } catch (error: any) {
    console.error(
      'Error getting posts: ',
      error?.errors?.[0]?.message || error?.message || error,
    );
    return [];
  }
};

export const fnGetPostBySlug = async (slug: string) => {
  try {
    const res = await directusClientWithRest.request(
      readItems('posts', {
        fields: [
          'raw_content',
          'categories.categories_id.name',
          'categories.categories_id.slug',
        ],
        filter: {
          slug: { _eq: slug },
        },
        limit: 1,
      }),
    );
    return res?.[0] || null;
  } catch (error: any) {
    console.error(
      'Error getting post by slug: ',
      error?.errors?.[0]?.message || error?.message || error,
    );
    return null;
  }
};
